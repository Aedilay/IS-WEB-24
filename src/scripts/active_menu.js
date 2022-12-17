(function () {
    function pageIsActive() {
        let navElems = document.querySelectorAll(".nav_button")

        let path = document.location.pathname
        navElems.forEach(elem => {
            if (elem.href.indexOf(path) > -1) {
                document.getElementById(elem.id).style.color = '#808080'
                return
            }
        })
    }

    document.addEventListener('layoutLoaded', () => {
        pageIsActive();
    })
})();