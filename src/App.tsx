import { observer } from "mobx-react"
import { Difference, Header, Main } from "./Components"

const App = () => {
  return (
    <div className="App">
      <Main>
        <Header />
        <Difference />
      </Main>
    </div>
  )
}

export default observer(App)
