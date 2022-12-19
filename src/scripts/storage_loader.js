(function () {
    if (localStorage.length !== 0) {
        let container = document.querySelector("#tier-container")
        let parent = container.parentElement
        parent.removeChild(container);
        const html = localStorage.getItem('container');
        const element = document.createElement('div');
        element.id = 'tier-container'
        element.innerHTML = html;
        let charContainer = document.querySelector("#char-tier-container")
        parent.insertBefore(element, charContainer);

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