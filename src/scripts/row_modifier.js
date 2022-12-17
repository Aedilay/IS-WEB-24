(function () {
    function addRowAbove(rowId) {
        let row = createRow()
        let referenceRow = document.querySelector(`.tier-row[data-id="${rowId}"]`)
        referenceRow.parentNode.insertBefore(row, referenceRow);
    }
    function addRowBelow(rowId) {
        let row = createRow()
        let referenceRow = document.querySelector(`.tier-row[data-id="${rowId}"]`)
        referenceRow.parentNode.insertBefore(row, referenceRow.nextElementSibling);
    }
    function deleteRow(rowId) {
        let referenceRow = document.querySelector(`.tier-row[data-id="${rowId}"]`)
        referenceRow.parentNode.removeChild(referenceRow)
        hideOverlay()
    }
    function addRow() {
        let row = createRow()
        let container = document.querySelector("#tier-container")
        container.appendChild(row)
    }

    let addRowAboveButton = document.querySelector("#add-row-above");
    addRowAboveButton.addEventListener("click", _ => {
        addRowAbove(addRowAboveButton.closest("#modal").getAttribute("row-id"))
    })
    let addRowBelowButton = document.querySelector("#add-row-below");
    addRowBelowButton.addEventListener("click", _ => {
        addRowBelow(addRowBelowButton.closest("#modal").getAttribute("row-id"))
    })
    let deleteRowButton = document.querySelector("#delete-row");
    deleteRowButton.addEventListener("click", _ => {
        deleteRow(deleteRowButton.closest("#modal").getAttribute("row-id"))
    })
    let addRowButton = document.querySelector("#add-row");
    addRowButton.addEventListener("click", _ => {
        addRow()
    })
})()