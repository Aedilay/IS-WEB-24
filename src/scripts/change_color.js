(function () {
    function changeColor(colorElem) {
        let color = colorElem.style.background
        let modal = colorElem.closest("#modal")
        let rowId = modal.getAttribute("row-id")
        let row = document.querySelector(`.tier-row[data-id="${rowId}"]`)
        let labelHolder = row.querySelector(".label-holder")
        labelHolder.style.background = color

        let selectedColor = modal.querySelector(".selected")
        selectedColor.classList.remove("selected")
        colorElem.classList.add("selected")
    }

    let color_selector = document.querySelector("#color-select");
    let colors = color_selector.childNodes

    colors.forEach(it =>
        it.addEventListener("click", _ => {
            changeColor(it)
        })
    )
})();