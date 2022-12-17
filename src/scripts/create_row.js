function createRow() {
    let row = document.createElement('div');
    let maxDataId = getNodeWithLargestId()
    row.classList.add('tier-row');
    row.setAttribute("data-id", maxDataId + 1)

    let labelHolder = document.createElement('div');
    labelHolder.classList.add('label-holder');
    labelHolder.setAttribute("contenteditable", "true")
    labelHolder.style.background = generateRandomColor()

    let label = document.createElement('span')
    label.textContent = "undefined"

    let tierSort = document.createElement('div');
    tierSort.classList.add('tier-sort');

    let settingsControl = document.createElement('div');
    settingsControl.classList.add("settings-control")

    let settings = document.createElement('div');
    settings.classList.add("settings")
    settings.addEventListener("click", _ => {
        showOverlay(settings.closest(".tier-row"))
    })

    let moveButtons = document.createElement('div');
    moveButtons.classList.add("move-buttons")

    let moveUp = document.createElement('div');
    moveUp.classList.add("move-up")
    moveUp.addEventListener("click", _ => {
        swapWithUpperRow(moveUp.closest(".tier-row"))
    });

    let moveDown = document.createElement('div');
    moveDown.classList.add("move-down")
    moveDown.addEventListener("click", _ => {
        swapWithLowerRow(moveDown.closest(".tier-row"))
    });

    moveButtons.appendChild(moveUp)
    moveButtons.appendChild(moveDown)

    settingsControl.appendChild(settings)
    settingsControl.appendChild(moveButtons)

    labelHolder.appendChild(label)

    row.appendChild(labelHolder)
    row.appendChild(tierSort)
    row.appendChild(settingsControl)

    return row
}

function getNodeWithLargestId() {
    let nodeList = document.querySelectorAll(".tier-row")
    let largestId = null;
    let largestIdNode = null;

    for (let i = 0; i < nodeList.length; i++) {
        const node = nodeList[i];
        const id = node.getAttribute('data-id');
        if (id > largestId) {
            largestId = id;
            largestIdNode = node;
        }
    }

    return largestIdNode?.getAttribute("data-id");
}

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');

    return `#${hexR}${hexG}${hexB}`;
}
