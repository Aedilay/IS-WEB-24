(function () {
    let startTime = new Date().getTime();

    function timer() {
        let element = document.getElementById('timer');
        element.innerHTML += 'Loaded in ' + (new Date().getTime() - startTime) / 1000 + ' seconds';
    }

    document.addEventListener("layoutLoaded", _ => {
        timer()
    });
})();