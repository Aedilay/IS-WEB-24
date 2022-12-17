(function () {
    let footer =
        '<footer>\n' +
        '    <p id="timer"></p>\n' +
        '</footer>'

    document.addEventListener('DOMContentLoaded', _ => {
        let parent = document.getElementById("body");
        let headerPlace = document.createElement('footer');
        headerPlace.innerHTML = footer;
        parent.insertBefore(headerPlace.lastElementChild, parent.lastChild);
    });
})();