const expensesList = document.querySelector("ul");


document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const expenseName = document.getElementById("expense").value;
    const expenseCategory = document.getElementById("category").value;
    const expenseValue = document.getElementById("amount").value;

    const newItem = document.createElement("li");
    newItem.classList.add("expense");

    newItem.innerHTML = `
            <img src="./img/food.svg" alt="Ícone de tipo da despesa" />

            <div class="expense-info">
              <strong>${expenseName}</strong>
              <span>${expenseCategory}</span>
            </div>

            <span class="expense-amount"><small>R$</small>${expenseValue}</span>`;

    const deleteButton = createDeleteButton();
    newItem.appendChild(deleteButton);

    expensesList.appendChild(newItem);
});


function createDeleteButton() {
    const deleteButton = document.createElement("img");
    deleteButton.setAttribute("src", "./img/remove.svg");
    deleteButton.setAttribute("alt", "remover");
    deleteButton.classList.add("remove-icon");
    deleteButton.addEventListener("click", deleteItem);

    return deleteButton;
}


function deleteItem() {
    this.parentNode.remove();
}