(function () {
    function AddComponent() {
        let object = document.createElement('div');
        object.classList.add("object")
        object.setAttribute('ondblclick', 'contentEditable=true;')
        object.setAttribute('onblur', 'contentEditable=false;')
        object.setAttribute('contentEditable', 'false;')
        object.textContent = "New object"
        let carousel = document.querySelector(`#object-carousel`)
        carousel.appendChild(object)

        let container = document.querySelector("#content_container")
        localStorage.setItem('container', container.innerHTML)
    }

    let addComponent = document.querySelector("#add-component-button");
    addComponent.addEventListener("click", _ => {
        AddComponent()
    })
})()

