(function () {
    function addRowAbove(rowId) {
        let row = createRow()
        let referenceRow = document.querySelector(`.tier-row[data-id="${rowId}"]`)
        let parent = referenceRow.parentNode;
        parent.insertBefore(row, referenceRow);
        let container = document.querySelector("#content_container")
        localStorage.setItem('container', container.innerHTML)
        drake.containers.push(row.querySelector('.tier-sort'))
    }
    function addRowBelow(rowId) {
        let row = createRow()
        let referenceRow = document.querySelector(`.tier-row[data-id="${rowId}"]`)
        let parent = referenceRow.parentNode;
        parent.insertBefore(row, referenceRow.nextElementSibling);
        let container = document.querySelector("#content_container")
        localStorage.setItem('container', container.innerHTML)
        drake.containers.push(row.querySelector('.tier-sort'))
    }
    function deleteRow(rowId) {
        let referenceRow = document.querySelector(`.tier-row[data-id="${rowId}"]`)
        let parent = referenceRow.parentNode;
        parent.removeChild(referenceRow);
        hideOverlay()
        let container = document.querySelector("#content_container")
        localStorage.setItem('container', container.innerHTML)
    }
    function addRow() {
        let row = createRow()
        let tierContainer = document.querySelector("#tier-container")
        tierContainer.appendChild(row)
        let container = document.querySelector("#content_container")
        localStorage.setItem('container', container.innerHTML)
        console.log(localStorage)
        drake.containers.push(row.querySelector('.tier-sort'))
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
    let addRowButton = document.querySelector("#add-row-button");
    addRowButton.addEventListener("click", _ => {
        addRow()
    })
})()