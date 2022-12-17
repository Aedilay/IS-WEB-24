(function () {
    let closeButton = document.querySelector("#close");
    closeButton.addEventListener("click", _ => {
        hideOverlay()
    })
})();

function hideOverlay() {
    let overlay = document.querySelector("#overlay");
    overlay.style.opacity = 0;
    overlay.style.visibility = "hidden";

    let modal = document.querySelector("#modal")
    modal.style.display = "none"
    modal.removeAttribute("row-id")
}