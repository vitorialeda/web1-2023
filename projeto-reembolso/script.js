let expensesArray = []

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const item = {
        expenseName: document.getElementById("expense").value,
        expenseCategory: document.getElementById("category").value,
        expenseValue: document.getElementById("amount").value
    }

    expensesArray.push(item);
    renderArray();
});

function renderArray() {
    const expensesList = document.querySelector("ul");
    expensesArray.forEach((item, index) => {
        const expenseLi = document.createElement("li");
        expenseLi.classList.add("expense");
        expenseLi.id = index;

        expenseLi.innerHTML = `
        <img src="./img/food.svg" alt="Ícone de tipo da despesa" />
        <div class="expense-info">
            <strong>${item.expenseName}</strong>
            <span>${item.expenseCategory}</span>
        </div>

        <span class="expense-amount"><small>R$</small>${item.expenseValue}</span>

        <img src="./img/remove.svg" alt="remover" class="remove-icon" />`;

        expensesList.appendChild(expenseLi);
    })
}