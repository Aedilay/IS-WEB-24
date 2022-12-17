(function () {
    let moveUpButtons = document.querySelectorAll(".move-up");
    moveUpButtons.forEach(it => {
        it.addEventListener("click", _ => {
            swapWithUpperRow(it.closest(".tier-row"))
        });
    })

    let moveDownButtons = document.querySelectorAll(".move-down");
    moveDownButtons.forEach(it => {
        it.addEventListener("click", _ => {
            swapWithLowerRow(it.closest(".tier-row"))
        });
    })
})();

function swapWithUpperRow(row) {
    let referenceRow = row.previousElementSibling
    if (referenceRow == null)
        return
    row.parentNode.insertBefore(row, referenceRow);
}

function swapWithLowerRow(row) {
    let referenceRow = row.nextElementSibling
    if (referenceRow == null)
        return
    row.parentNode.insertBefore(row, referenceRow.nextElementSibling);
}