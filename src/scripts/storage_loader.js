(function () {
    if (localStorage.length !== 0) {
        let container = document.querySelector("#content_container")
        let parent = container.parentElement
        parent.removeChild(container);
        const html = localStorage.getItem('container');
        const element = document.createElement('div');
        element.id = 'content_container'
        element.innerHTML = html;
        parent.appendChild(element);

        let settings = element.querySelectorAll(".settings");
        settings.forEach( it =>
            it.addEventListener("click", _ => {
                showOverlay(it.closest(".tier-row"))
            })
        )

        let moveUpButtons = element.querySelectorAll(".move-up");
        moveUpButtons.forEach(it => {
            it.addEventListener("click", _ => {
                swapWithUpperRow(it.closest(".tier-row"))
            });
        })

        let moveDownButtons = element.querySelectorAll(".move-down");
        moveDownButtons.forEach(it => {
            it.addEventListener("click", _ => {
                swapWithLowerRow(it.closest(".tier-row"))
            });
        })
    }
})();