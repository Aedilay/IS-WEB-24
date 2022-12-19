(function () {
    function saveLocal() {
        let container = document.querySelector("#content_container")
        localStorage.setItem('container', container.innerHTML)
    }

    let saveButton = document.querySelector("#save-button");
    saveButton.addEventListener("click", _ => {
        saveLocal()
    })
})()

function saveLocal() {
    let container = document.querySelector("#content_container")
    localStorage.setItem('container', container.innerHTML)
}

