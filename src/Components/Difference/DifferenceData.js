const differenceAPIResponse = [
  {
    changeKind: "MODIFIED",
    headFile: {
      path: "index.html",
    },
    baseFile: {
      path: "index.html",
    },
    hunks: [
      {
        header: "@@ -52,7 +52,7 @@",
        lines: [
          {
            baseLineNumber: 52,
            headLineNumber: 52,
            content: "           }",
          },
          {
            baseLineNumber: 53,
            headLineNumber: 53,
            content: "         })",
          },
          {
            baseLineNumber: 54,
            headLineNumber: 54,
            content: " ",
          },
          {
            baseLineNumber: 55,
            headLineNumber: 55,
            content: "-        const itemList3 = Array.from({ length: 100000 }, (_, i) => {",
          },
          {
            baseLineNumber: 56,
            headLineNumber: 56,
            content: "+        const itemList3 = Array.from({ length: 2 }, (_, i) => {",
          },
          {
            baseLineNumber: 56,
            headLineNumber: 57,
            content: "           return {",
          },
          {
            baseLineNumber: 57,
            headLineNumber: 58,
            content: "             index: i,",
          },
          {
            baseLineNumber: 58,
            headLineNumber: 59,
            content: "             label: `Item ${i}`,",
          },
        ],
      },
      {
        header: "@@ -134,14 +134,15 @@",
        lines: [
          {
            baseLineNumber: 134,
            headLineNumber: 134,
            content: "           items: itemList3,",
          },
          {
            baseLineNumber: 135,
            headLineNumber: 135,
            content: '           rootElement: ".MultiSelectContainer_3",',
          },
          {
            baseLineNumber: 136,
            headLineNumber: 136,
            content: "           disabledFields: [31, 32, 33, 34],",
          },
          {
            baseLineNumber: 137,
            headLineNumber: 137,
            content: "-          defaultSelected: [0, 1, 2, 3, 4, 5, 6],",
          },
          {
            baseLineNumber: 138,
            headLineNumber: 138,
            content: "+          defaultSelected: [0, 1, 2, 3, 4, 5],",
          },
          {
            baseLineNumber: 138,
            headLineNumber: 139,
            content: '+          mode: "single",',
          },
          {
            baseLineNumber: 138,
            headLineNumber: 140,
            content: "+          debug: true,",
          },
          {
            baseLineNumber: 138,
            headLineNumber: 141,
            content: "         })",
          },
          {
            baseLineNumber: 139,
            headLineNumber: 142,
            content: "         multiSelect4 = new MultiSelect({",
          },
          {
            baseLineNumber: 140,
            headLineNumber: 143,
            content: "           items: itemList4,",
          },
          {
            baseLineNumber: 141,
            headLineNumber: 144,
            content: '           rootElement: ".MultiSelectContainer_4",',
          },
          {
            baseLineNumber: 142,
            headLineNumber: 145,
            content: '           mode: "single",',
          },
          {
            baseLineNumber: 143,
            headLineNumber: 146,
            content: "           defaultSelected: [0],",
          },
          {
            baseLineNumber: 144,
            headLineNumber: 147,
            content: "-          debug: true,",
          },
          {
            baseLineNumber: 145,
            headLineNumber: 148,
            content: "         })",
          },
          {
            baseLineNumber: 146,
            headLineNumber: 149,
            content: "         multiSelect5 = new MultiSelect({",
          },
          {
            baseLineNumber: 147,
            headLineNumber: 150,
            content: "           items: itemList3,",
          },
        ],
      },
    ],
  },
  {
    changeKind: "MODIFIED",
    headFile: {
      path: "multiselect.css",
    },
    baseFile: {
      path: "multiselect.css",
    },
    hunks: [
      {
        header: "@@ -319,9 +319,9 @@",
        lines: [
          {
            baseLineNumber: 319,
            headLineNumber: 319,
            content: "   color: #B5BDC1;",
          },
          {
            baseLineNumber: 320,
            headLineNumber: 320,
            content: " }",
          },
          {
            baseLineNumber: 321,
            headLineNumber: 321,
            content: " ",
          },
          {
            baseLineNumber: 322,
            headLineNumber: 322,
            content: "-.MultiSelectList .VItem:last-child:hover {",
          },
          {
            baseLineNumber: 323,
            headLineNumber: 323,
            content: "+/* .MultiSelectList .VItem:last-child:hover {",
          },
          {
            baseLineNumber: 323,
            headLineNumber: 324,
            content: "   border-radius: 0 0 8px 8px;",
          },
          {
            baseLineNumber: 324,
            headLineNumber: 325,
            content: "-}",
          },
          {
            baseLineNumber: 325,
            headLineNumber: 326,
            content: "+} */",
          },
          {
            baseLineNumber: 325,
            headLineNumber: 327,
            content: " ",
          },
          {
            baseLineNumber: 326,
            headLineNumber: 328,
            content: " .MultiSelectList .VItem:hover {",
          },
          {
            baseLineNumber: 327,
            headLineNumber: 329,
            content: "   background: #E7E9EA;",
          },
        ],
      },
    ],
  },
  {
    changeKind: "MODIFIED",
    headFile: {
      path: "multiselect.js",
    },
    baseFile: {
      path: "multiselect.js",
    },
    hunks: [
      {
        header: "@@ -39,6 +39,10 @@ function MultiSelect(props) {",
        lines: [
          {
            baseLineNumber: 39,
            headLineNumber: 39,
            content: "   this.unselectedItems = Array.isArray(this.defaultSelected) && this.defaultSelected.length > 0 ? [] : [...this.itemList]",
          },
          {
            baseLineNumber: 40,
            headLineNumber: 40,
            content: "   // TODO: Handle This Error Properly As It May Crash Rest of The Code.",
          },
          {
            baseLineNumber: 41,
            headLineNumber: 41,
            content: '   if (!Array.isArray(this.itemList)) console.error("Item List should be an array.", this.root)',
          },
          {
            baseLineNumber: 42,
            headLineNumber: 42,
            content: '+  if (this.mode === "single" && this.defaultSelected.length > 1) {',
          },
          {
            baseLineNumber: 42,
            headLineNumber: 43,
            content: "+    this.defaultSelected = [this.defaultSelected[0]]",
          },
          {
            baseLineNumber: 42,
            headLineNumber: 44,
            content: '+    console.error("Single Select Accepts only 1 value in defaultSelected")',
          },
          {
            baseLineNumber: 42,
            headLineNumber: 45,
            content: "+  }",
          },
          {
            baseLineNumber: 42,
            headLineNumber: 46,
            content: " ",
          },
          {
            baseLineNumber: 43,
            headLineNumber: 47,
            content: "   this.initialize()",
          },
          {
            baseLineNumber: 44,
            headLineNumber: 48,
            content: "   multiSelectInstances.set(this.rootContainer, this)",
          },
        ],
      },
      {
        header: "@@ -68,9 +72,12 @@ MultiSelect.prototype.recalculateHeight = function () {",
        lines: [
          {
            baseLineNumber: 68,
            headLineNumber: 68,
            content: '     else isClearAll.classList.add("Inactive")',
          },
          {
            baseLineNumber: 69,
            headLineNumber: 69,
            content: "   }",
          },
          {
            baseLineNumber: 70,
            headLineNumber: 70,
            content: " ",
          },
          {
            baseLineNumber: 71,
            headLineNumber: 71,
            content: "-  if (!this.chipCollapse || this.selectedItems.length < this.collapseChipCount) return false",
          },
          {
            baseLineNumber: 72,
            headLineNumber: 72,
            content: '-  const height = this.popperContainer.querySelector(".ChipsList").offsetHeight',
          },
          {
            baseLineNumber: 73,
            headLineNumber: 73,
            content: "-  this.unselectedItemsContainer.style.height = `${this.height - height}px`",
          },
          {
            baseLineNumber: 74,
            headLineNumber: 74,
            content: "+  if (!this.chipCollapse) return false",
          },
          {
            baseLineNumber: 74,
            headLineNumber: 75,
            content: "+  var height = 400",
          },
          {
            baseLineNumber: 74,
            headLineNumber: 76,
            content: "+  if (this.itemList.length < 10) height = this.itemList.length * 40",
          },
          {
            baseLineNumber: 74,
            headLineNumber: 77,
            content: '+  else height = this.height - this.popperContainer.querySelector(".ChipsList").offsetHeight',
          },
          {
            baseLineNumber: 74,
            headLineNumber: 78,
            content: "+",
          },
          {
            baseLineNumber: 74,
            headLineNumber: 79,
            content: "+  this.unselectedItemsContainer.style.height = `${height}px`",
          },
          {
            baseLineNumber: 74,
            headLineNumber: 80,
            content: " }",
          },
          {
            baseLineNumber: 75,
            headLineNumber: 81,
            content: " ",
          },
          {
            baseLineNumber: 76,
            headLineNumber: 82,
            content: " MultiSelect.prototype.generateDOM = function () {",
          },
        ],
      },
      {
        header: "@@ -232,7 +239,7 @@ MultiSelect.prototype.setupEventListeners = function () {",
        lines: [
          {
            baseLineNumber: 232,
            headLineNumber: 232,
            content: '     self.backdropElement.classList.toggle("Show", !isOpen)',
          },
          {
            baseLineNumber: 233,
            headLineNumber: 233,
            content: " ",
          },
          {
            baseLineNumber: 234,
            headLineNumber: 234,
            content: "     if (self.virtualList) {",
          },
          {
            baseLineNumber: 235,
            headLineNumber: 235,
            content: "-      self.refreshList()",
          },
          {
            baseLineNumber: 236,
            headLineNumber: 236,
            content: "+      // self.refreshList()",
          },
          {
            baseLineNumber: 236,
            headLineNumber: 237,
            content: "     }",
          },
          {
            baseLineNumber: 237,
            headLineNumber: 238,
            content: "   }",
          },
          {
            baseLineNumber: 238,
            headLineNumber: 239,
            content: " ",
          },
        ],
      },
      {
        header: "@@ -266,7 +273,7 @@ MultiSelect.prototype.setupEventListeners = function () {",
        lines: [
          {
            baseLineNumber: 266,
            headLineNumber: 266,
            content: "       if (!self.outerLabelCollapse) self.renderSelectedItems() // No Overflow",
          },
          {
            baseLineNumber: 267,
            headLineNumber: 267,
            content: '     } else if (event.target.classList.contains("VItem") && !event.target.closest(".ChipsList")) {',
          },
          {
            baseLineNumber: 268,
            headLineNumber: 268,
            content: "       self.handleItemSelection(event.target)",
          },
          {
            baseLineNumber: 269,
            headLineNumber: 269,
            content: '-    } else if (event.target.classList.contains("VItemCrossIcon")) {',
          },
          {
            baseLineNumber: 270,
            headLineNumber: 270,
            content: '+    } else if (event.target.classList.contains("VItemCrossIcon") && self.mode === "multi") {',
          },
          {
            baseLineNumber: 270,
            headLineNumber: 271,
            content: '       self.handleItemUnselection(event.target.closest(".VItem"))',
          },
          {
            baseLineNumber: 271,
            headLineNumber: 272,
            content: '     } else if (self.mode === "multi" && event.target === self.selectAllBtn && self.selectAllExpose) {',
          },
          {
            baseLineNumber: 272,
            headLineNumber: 273,
            content: "       self.selectAllItems()",
          },
        ],
      },
      {
        header: "@@ -305,11 +312,26 @@ MultiSelect.prototype.addTooltipToElement = function (element, content, position",
        lines: [
          {
            baseLineNumber: 305,
            headLineNumber: 305,
            content: "     const tooltipWidth = tooltipRect.width",
          },
          {
            baseLineNumber: 306,
            headLineNumber: 306,
            content: "     const tooltipHeight = tooltipRect.height",
          },
          {
            baseLineNumber: 307,
            headLineNumber: 307,
            content: " ",
          },
          {
            baseLineNumber: 308,
            headLineNumber: 308,
            content: "-    let tooltipX, tooltipY, arrowPositionLeft, arrowPositionTop, transform",
          },
          {
            baseLineNumber: 309,
            headLineNumber: 309,
            content: "+    let tooltipX, tooltipY, arrowPositionLeft, arrowPositionTop, transform, relativeRect",
          },
          {
            baseLineNumber: 309,
            headLineNumber: 310,
            content: "+    let parentRect = parentElem ? parentElem.getBoundingClientRect() : undefined",
          },
          {
            baseLineNumber: 309,
            headLineNumber: 311,
            content: "+    if (parentRect) {",
          },
          {
            baseLineNumber: 309,
            headLineNumber: 312,
            content: "+      relativeRect = {",
          },
          {
            baseLineNumber: 309,
            headLineNumber: 313,
            content: "+        top: rect.top - parentRect.top,",
          },
          {
            baseLineNumber: 309,
            headLineNumber: 314,
            content: "+        left: rect.left - parentRect.left,",
          },
          {
            baseLineNumber: 309,
            headLineNumber: 315,
            content: "+        right: rect.right - parentRect.left,",
          },
          {
            baseLineNumber: 309,
            headLineNumber: 316,
            content: "+        bottom: rect.bottom - parentRect.top,",
          },
          {
            baseLineNumber: 309,
            headLineNumber: 317,
            content: "+        width: rect.width,",
          },
          {
            baseLineNumber: 309,
            headLineNumber: 318,
            content: "+        height: rect.height,",
          },
          {
            baseLineNumber: 309,
            headLineNumber: 319,
            content: "+      }",
          },
          {
            baseLineNumber: 309,
            headLineNumber: 320,
            content: "+    }",
          },
          {
            baseLineNumber: 309,
            headLineNumber: 321,
            content: "+",
          },
          {
            baseLineNumber: 309,
            headLineNumber: 322,
            content: '+    // console.info("Hover Parent :", parentRect, "\\nChild Element :", rect,  "\\nRelative Child :", relativeRect,"\\nTooltip :", tooltipRect)',
          },
          {
            baseLineNumber: 309,
            headLineNumber: 323,
            content: '+    console.info("Values :", relativeRect, rect)',
          },
          {
            baseLineNumber: 309,
            headLineNumber: 324,
            content: "     const tooltipArrowSize = 10",
          },
          {
            baseLineNumber: 310,
            headLineNumber: 325,
            content: '     if (position === "topright") {',
          },
          {
            baseLineNumber: 311,
            headLineNumber: 326,
            content: "       tooltipX = rect.right - tooltipWidth / 2",
          },
          {
            baseLineNumber: 312,
            headLineNumber: 327,
            content: "       tooltipY = rect.top + scrollY - (tooltipHeight + tooltipArrowSize) // + 10 for Arrow",
          },
          {
            baseLineNumber: 313,
            headLineNumber: 328,
            content: '+      arrowPositionLeft = "50%"',
          },
          {
            baseLineNumber: 313,
            headLineNumber: 329,
            content: '       arrowPositionTop = "100%"',
          },
          {
            baseLineNumber: 314,
            headLineNumber: 330,
            content: '       transform = "rotate(270deg)"',
          },
          {
            baseLineNumber: 315,
            headLineNumber: 331,
            content: '     } else if (position === "topcenter") {',
          },
        ],
      },
      {
        header: "@@ -348,14 +370,15 @@ MultiSelect.prototype.addTooltipToElement = function (element, content, position",
        lines: [
          {
            baseLineNumber: 348,
            headLineNumber: 348,
            content: '       arrowPositionLeft = "-5px"',
          },
          {
            baseLineNumber: 349,
            headLineNumber: 349,
            content: '       arrowPositionTop = "65%"',
          },
          {
            baseLineNumber: 350,
            headLineNumber: 350,
            content: '     } else if (position === "rightcenter") {',
          },
          {
            baseLineNumber: 351,
            headLineNumber: 351,
            content: "-      tooltipX = rect.right + tooltipArrowSize",
          },
          {
            baseLineNumber: 352,
            headLineNumber: 352,
            content: "+      tooltipX = rect.right + tooltipArrowSize + 5",
          },
          {
            baseLineNumber: 352,
            headLineNumber: 353,
            content: "       tooltipY = rect.top + scrollY + rect.height / 2 - tooltipHeight / 2",
          },
          {
            baseLineNumber: 353,
            headLineNumber: 354,
            content: '       arrowPositionLeft = "-5px"',
          },
          {
            baseLineNumber: 354,
            headLineNumber: 355,
            content: "       arrowPositionTop = `${rect.height / 2 - tooltipHeight / 2}px}`",
          },
          {
            baseLineNumber: 355,
            headLineNumber: 356,
            content: '     } else if (position === "rightbottom") {',
          },
          {
            baseLineNumber: 356,
            headLineNumber: 357,
            content: "       tooltipX = rect.right + tooltipArrowSize",
          },
          {
            baseLineNumber: 357,
            headLineNumber: 358,
            content: "       tooltipY = rect.top + scrollY - 12",
          },
          {
            baseLineNumber: 358,
            headLineNumber: 359,
            content: '       arrowPositionLeft = "-5px"',
          },
          {
            baseLineNumber: 359,
            headLineNumber: 360,
            content: "+      arrowPositionTop = parentElem ? `${parentRect.height / 2 - 5}px` : `${rect.height / 2}px`",
          },
          {
            baseLineNumber: 359,
            headLineNumber: 361,
            content: '     } else if (position === "lefttop") {',
          },
          {
            baseLineNumber: 360,
            headLineNumber: 362,
            content: "       tooltipX = rect.left - tooltipWidth - tooltipArrowSize",
          },
          {
            baseLineNumber: 361,
            headLineNumber: 363,
            content: "       tooltipY = rect.top + scrollY - tooltipHeight / 2",
          },
        ],
      },
      {
        header: "@@ -395,7 +418,7 @@ MultiSelect.prototype.addTooltipToElement = function (element, content, position",
        lines: [
          {
            baseLineNumber: 395,
            headLineNumber: 395,
            content: "   })",
          },
          {
            baseLineNumber: 396,
            headLineNumber: 396,
            content: " ",
          },
          {
            baseLineNumber: 397,
            headLineNumber: 397,
            content: '   element.addEventListener("mouseleave", () => {',
          },
          {
            baseLineNumber: 398,
            headLineNumber: 398,
            content: '-    if (element.classList.contains("OuterFlow")) return',
          },
          {
            baseLineNumber: 399,
            headLineNumber: 399,
            content: '+    // if (element.classList.contains("OuterFlow")) return',
          },
          {
            baseLineNumber: 399,
            headLineNumber: 400,
            content: '     tooltip.style.display = "none"',
          },
          {
            baseLineNumber: 400,
            headLineNumber: 401,
            content: "     tooltip.remove()",
          },
          {
            baseLineNumber: 401,
            headLineNumber: 402,
            content: "   })",
          },
        ],
      },
      {
        header: "@@ -418,7 +441,8 @@ MultiSelect.prototype.outerChipInjection = function () {",
        lines: [
          {
            baseLineNumber: 418,
            headLineNumber: 418,
            content: '     overflowChip.textContent = "+" + (this.selectedItems.length - 1)',
          },
          {
            baseLineNumber: 419,
            headLineNumber: 419,
            content: "     outerContainer.appendChild(overflowChip)",
          },
          {
            baseLineNumber: 420,
            headLineNumber: 420,
            content: " ",
          },
          {
            baseLineNumber: 421,
            headLineNumber: 421,
            content: '-    const tooltipContent = this.selectedItems.map((item) => item[this.labelKey]).join("\\n")',
          },
          {
            baseLineNumber: 422,
            headLineNumber: 422,
            content: '+    const tooltipContent = this.selectedItems.slice(1).map((item) => item[this.labelKey]).join("\\n")',
          },
          {
            baseLineNumber: 422,
            headLineNumber: 423,
            content: '+    this.addTooltipToElement(overflowChip, tooltipContent, "rightbottom", this.popoverBtn)',
          },
          {
            baseLineNumber: 422,
            headLineNumber: 424,
            content: "   }",
          },
          {
            baseLineNumber: 423,
            headLineNumber: 425,
            content: " ",
          },
          {
            baseLineNumber: 424,
            headLineNumber: 426,
            content: "   this.popoverBtn.appendChild(outerContainer)",
          },
        ],
      },
      {
        header: "@@ -481,20 +505,21 @@ MultiSelect.prototype.handleItemSelection = function (element) {",
        lines: [
          {
            baseLineNumber: 481,
            headLineNumber: 481,
            content: " ",
          },
          {
            baseLineNumber: 482,
            headLineNumber: 482,
            content: "   const selectedItemText = element.textContent.trim()",
          },
          {
            baseLineNumber: 483,
            headLineNumber: 483,
            content: "   const selectedItemIndex = this.unselectedItems.findIndex((x) => x[this.labelKey] === selectedItemText)",
          },
          {
            baseLineNumber: 484,
            headLineNumber: 484,
            content: "-  const selectedItemValue = this.unselectedItems[selectedItemIndex][this.valueKey]",
          },
          {
            baseLineNumber: 485,
            headLineNumber: 485,
            content: "-",
          },
          {
            baseLineNumber: 486,
            headLineNumber: 486,
            content: "-  if (this.disabledFields.includes(selectedItemValue)) {",
          },
          {
            baseLineNumber: 487,
            headLineNumber: 487,
            content: "-    return // Disable selection",
          },
          {
            baseLineNumber: 488,
            headLineNumber: 488,
            content: "-  }",
          },
          {
            baseLineNumber: 489,
            headLineNumber: 489,
            content: " ",
          },
          {
            baseLineNumber: 490,
            headLineNumber: 490,
            content: "   if (selectedItemIndex !== -1) {",
          },
          {
            baseLineNumber: 491,
            headLineNumber: 491,
            content: "+    const selectedItemValue = this.unselectedItems[selectedItemIndex][this.valueKey]",
          },
          {
            baseLineNumber: 491,
            headLineNumber: 492,
            content: "+",
          },
          {
            baseLineNumber: 491,
            headLineNumber: 493,
            content: "+    if (this.disabledFields.includes(selectedItemValue)) {",
          },
          {
            baseLineNumber: 491,
            headLineNumber: 494,
            content: "+      return // Disable selection",
          },
          {
            baseLineNumber: 491,
            headLineNumber: 495,
            content: "+    }",
          },
          {
            baseLineNumber: 491,
            headLineNumber: 496,
            content: "+",
          },
          {
            baseLineNumber: 491,
            headLineNumber: 497,
            content: "     // Move Item From Unselected to Selected Items List",
          },
          {
            baseLineNumber: 492,
            headLineNumber: 498,
            content: '     if (this.mode === "single") {',
          },
          {
            baseLineNumber: 493,
            headLineNumber: 499,
            content: "-      const prev = [...this.selectedItems]",
          },
          {
            baseLineNumber: 494,
            headLineNumber: 500,
            content: '+      const prev = this.selectedItems.length > 0 ? [...this.selectedItems][0] : ""',
          },
          {
            baseLineNumber: 494,
            headLineNumber: 501,
            content: "       this.selectedItems = [this.unselectedItems[selectedItemIndex]] // Single select mode",
          },
          {
            baseLineNumber: 495,
            headLineNumber: 502,
            content: "       this.unselectedItems.splice(selectedItemIndex, 1)",
          },
          {
            baseLineNumber: 496,
            headLineNumber: 503,
            content: "-      this.unselectedItems.unshift(prev[0])",
          },
          {
            baseLineNumber: 497,
            headLineNumber: 504,
            content: '-      console.info("prev :", prev[0])',
          },
          {
            baseLineNumber: 498,
            headLineNumber: 505,
            content: "+      if (prev) this.unselectedItems.unshift(prev)",
          },
          {
            baseLineNumber: 498,
            headLineNumber: 506,
            content: '+      console.info("prev :", prev)',
          },
          {
            baseLineNumber: 498,
            headLineNumber: 507,
            content: "       this.handleBackDrop()",
          },
          {
            baseLineNumber: 499,
            headLineNumber: 508,
            content: "     } else {",
          },
          {
            baseLineNumber: 500,
            headLineNumber: 509,
            content: "       this.selectedItems.splice(0, 0, this.unselectedItems[selectedItemIndex])",
          },
        ],
      },
      {
        header: "@@ -507,6 +532,7 @@ MultiSelect.prototype.handleItemSelection = function (element) {",
        lines: [
          {
            baseLineNumber: 507,
            headLineNumber: 507,
            content: '     selectedItemElement.innerHTML = `<span class="VItemLabel">${selectedItemText}</span>`',
          },
          {
            baseLineNumber: 508,
            headLineNumber: 508,
            content: '     const crossIcon = document.createElement("img")',
          },
          {
            baseLineNumber: 509,
            headLineNumber: 509,
            content: '     crossIcon.classList.add("VItemCrossIcon")',
          },
          {
            baseLineNumber: 510,
            headLineNumber: 510,
            content: '+    crossIcon.style.display = this.mode === "single" ? "none" : "block"',
          },
          {
            baseLineNumber: 510,
            headLineNumber: 511,
            content: '     crossIcon.src = "./assets/cross.svg"',
          },
          {
            baseLineNumber: 511,
            headLineNumber: 512,
            content: "     selectedItemElement.appendChild(crossIcon)",
          },
          {
            baseLineNumber: 512,
            headLineNumber: 513,
            content: "     this.selectedItemsContainer.appendChild(selectedItemElement)",
          },
        ],
      },
      {
        header: "@@ -600,6 +626,7 @@ MultiSelect.prototype.renderSelectedItems = function (isOuterChip = false) {",
        lines: [
          {
            baseLineNumber: 600,
            headLineNumber: 600,
            content: "     if (!isOuterChip) {",
          },
          {
            baseLineNumber: 601,
            headLineNumber: 601,
            content: '       const crossIcon = document.createElement("img")',
          },
          {
            baseLineNumber: 602,
            headLineNumber: 602,
            content: '       crossIcon.classList.add("VItemCrossIcon")',
          },
          {
            baseLineNumber: 603,
            headLineNumber: 603,
            content: '+      crossIcon.style.display = this.mode === "single" ? "none" : "block"',
          },
          {
            baseLineNumber: 603,
            headLineNumber: 604,
            content: '       crossIcon.src = "./assets/cross.svg"',
          },
          {
            baseLineNumber: 604,
            headLineNumber: 605,
            content: "       selectedItemElement.appendChild(crossIcon)",
          },
          {
            baseLineNumber: 605,
            headLineNumber: 606,
            content: "     }",
          },
        ],
      },
    ],
  },
  {
    changeKind: "MODIFIED",
    headFile: {
      path: "vlist.js",
    },
    baseFile: {
      path: "vlist.js",
    },
    hunks: [
      {
        header: "@@ -106,6 +106,7 @@ VirtualList.createContainer = function (t, w, h) {",
        lines: [
          {
            baseLineNumber: 106,
            headLineNumber: 106,
            content: '   var c = t ?? document.createElement("div")',
          },
          {
            baseLineNumber: 107,
            headLineNumber: 107,
            content: "   c.style.width = w",
          },
          {
            baseLineNumber: 108,
            headLineNumber: 108,
            content: "   c.style.height = h",
          },
          {
            baseLineNumber: 109,
            headLineNumber: 109,
            content: '+  c.style.minHeight = 100 + "px"',
          },
          {
            baseLineNumber: 109,
            headLineNumber: 110,
            content: '   c.style.overflow = "auto"',
          },
          {
            baseLineNumber: 110,
            headLineNumber: 111,
            content: '   c.style.position = "relative"',
          },
          {
            baseLineNumber: 111,
            headLineNumber: 112,
            content: "   c.style.padding = 0",
          },
        ],
      },
    ],
  },
]

module.exports = { differenceAPIResponse }
