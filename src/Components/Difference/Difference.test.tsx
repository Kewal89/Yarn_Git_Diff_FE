import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import Difference from "./Difference"
import { differenceAPIResponse } from "./DifferenceData"

const mockChanges = [...differenceAPIResponse]

test("renders Difference component with mock data", () => {
  render(<Difference changes={mockChanges} />)

  // Case 1: Render Document
  expect(screen.getByText("index.html")).toBeInTheDocument()

  // Case 2: Expand Icon To be Present
  const expandIcons = screen.queryAllByAltText("Expand")
  expect(expandIcons).toHaveLength(4)

  // Case 3: Check class Expanded by default
  expect(screen.getByTestId(`fileExpander-${mockChanges[0].headFile.path}`)).toHaveClass("Expanded")

  // Case 4: Test if Expand / Collapse
  fireEvent.click(screen.getByTestId(`fileExpander-${mockChanges[0].headFile.path}`))

  // Case 4.1: Test if Expanded
  expect(screen.getByTestId(`fileExpander-${mockChanges[0].headFile.path}`)).not.toHaveClass("Expanded")
})

test("renders Difference component with multiple files and expands/collapses correctly", () => {
  render(<Difference changes={mockChanges} />)

  // Case 11: If all Files are rendered correctly
  mockChanges.forEach((change) => {
    expect(screen.getByText(change.headFile.path)).toBeInTheDocument()
  })

  // Case 12: If all files are in expanded state by default
  mockChanges.forEach((change) => {
    expect(screen.getByTestId(`fileExpander-${change.headFile.path}`)).toHaveClass("Expanded")
  })

  // Case 13: Collapse one by one.
  mockChanges.forEach((change) => {
    fireEvent.click(screen.getByTestId(`fileExpander-${change.headFile.path}`))
  })

  // Case 14: All items are collapsed
  mockChanges.forEach((change) => {
    expect(screen.getByTestId(`fileExpander-${change.headFile.path}`)).not.toHaveClass("Expanded")
  })
})
