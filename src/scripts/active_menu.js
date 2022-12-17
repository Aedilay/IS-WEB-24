(function () {
    let pages = {
        'index.html': 'create',
        'main_page.html': 'all',
    };

    function pageIsActive() {
        let path = document.location.pathname
        let page = path.substring(
            path.lastIndexOf('/') + 1
        )
        let itemId = pages[page]
        document.getElementById(itemId).style.color = '#808080'
    }

    document.addEventListener('layoutLoaded', () => {
        pageIsActive();
    })
})();