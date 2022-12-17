(function () {
    let settings = document.querySelectorAll(".settings");
    settings.forEach( it =>
        it.addEventListener("click", _ => {
            showOverlay(it.closest(".tier-row"))
        })
    )
})();

function showOverlay(element) {
    let overlay = document.querySelector("#overlay");
    overlay.style.opacity = 1;
    overlay.style.visibility = "visible";

    let modal = document.querySelector("#modal")
    modal.style.display = "block"
    modal.setAttribute("row-id", element.getAttribute("data-id"))
}