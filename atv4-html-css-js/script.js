const listaItens = document.getElementById("list");

const alert = document.querySelector(".alert");
const alertDeleteButton = document.querySelector(".delete-alert");
alertDeleteButton.addEventListener("click", hideAlert);

const button = document.getElementById("add-item").addEventListener("click", () => {
    const newItem = document.getElementById("text-field").value;
    const newElement = createNewLi(newItem);
    listaItens.appendChild(newElement);

    document.getElementById("text-field").value = "";
});

function createNewLi(itemName) {
    const newLi = document.createElement("li");
    newLi.classList.add("list-item");

    newLi.innerHTML = `
    <div class="text">
        <input type="checkbox">
        <p>${itemName}</p>
    </div>`

    const newDeleteButton = document.createElement("img");
    newDeleteButton.src = "./assets/delete-02-stroke-rounded.svg";
    newDeleteButton.alt = "delete button";
    newDeleteButton.addEventListener("click", deleteParentNode);

    newLi.appendChild(newDeleteButton);

    return newLi;
}

function deleteParentNode() {
    this.parentNode.remove();
    showAlert();
}

function showAlert() {
    alert.classList.remove("hidden");
}

function hideAlert() {
    alert.classList.add("hidden");
}