(function () {
    let header =
        '<header>\n' +
        '    <div id="header_container">\n' +
        '        <div id="header">\n' +
        '            <a id="logo" title="TierListMaker">\n' +
        '                <img src="\thttps://tiermaker.com/images/tiermaker-logo.png" alt="">\n' +
        '            </a>\n' +
        '            <nav id="nav">\n' +
        '                <ul>\n' +
        '                    <li>\n' +
        '                        <a id="all" class="nav_button" href="main_page.html">All TierLists</a>\n' +
        '                    </li>\n' +
        '                    <li>\n' +
        '                        <a id="create" class="nav_button" href="index.html">Create TierList</a>\n' +
        '                    </li>\n' +
        '                </ul>\n' +
        '            </nav>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</header>'

    document.addEventListener('DOMContentLoaded', _ => {
        let parent = document.getElementById("body");
        let headerPlace = document.createElement('header');
        headerPlace.innerHTML = header;
        parent.insertBefore(headerPlace.firstElementChild, parent.firstChild);
        document.dispatchEvent(new Event("layoutLoaded"));
    });
})();