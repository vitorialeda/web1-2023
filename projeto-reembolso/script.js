// Referencia componente que guardará os itens
const expensesList = document.querySelector("ul");

const expensesArray = []

document.querySelector("form").addEventListener("submit", (e) => {
    // Evita o redirecionamento
    e.preventDefault();

    // Guarda os valores do formulário em um objeto
    const newExpense = {
        expenseName: document.getElementById("expense").value,
        expenseCategory: document.getElementById("category").value,
        expenseValue: document.getElementById("amount").value
    }

    // Adiciona o novo objeto ao final da lista
    expensesArray.push(newExpense);

    // Adiciona novo item à ul
    expensesList.appendChild(createNewListItem(newExpense));

    updateStatus();
});

// Cria novo li
function createNewListItem({ expenseName, expenseCategory, expenseValue }) {
    // Novo item da lista que conterá os valores do formulário
    const newItem = document.createElement("li");

    // Adiciona classe ao item para estilização
    newItem.classList.add("expense");

    // Conteúdo interno do item
    newItem.innerHTML = `
            <img src="./img/food.svg" alt="Ícone de tipo da despesa" />

            <div class="expense-info">
              <strong>${expenseName}</strong>
              <span>${expenseCategory}</span>
            </div>

            <span class="expense-amount"><small>R$</small>${formatValue(expenseValue)}</span>`;


    // Novo botão de exclusão já com a função de deletar item
    const deleteButton = createDeleteButton();
    // Adiciona botão ao item
    newItem.appendChild(deleteButton);

    return newItem;
}

// Cria botão p/ exclusão de item
function createDeleteButton() {
    const deleteButton = document.createElement("img");
    deleteButton.setAttribute("src", "./img/remove.svg");
    deleteButton.setAttribute("alt", "remover");
    deleteButton.classList.add("remove-icon");
    deleteButton.addEventListener("click", deleteItem);

    return deleteButton;
}

// Função de deletar item
function deleteItem() {
    // Remove o elemento pai do botão
    this.parentNode.remove();
}

// Adiciona duas casas decimais ao numero
function formatValue(value) {
    return Number(value).toLocaleString("pt-br", { minimumFractionDigits: 2 })
}

function updateStatus() {
    // Referencia aos elementos do DOM
    const domElementExpensesQuantity = document.getElementById("quantidadeDespesas");
    const domElementTotal = document.getElementById("valorTotal");

    // Quantidade de despesas
    const expensesQuantity = expensesArray.length;

    // Soma os valores de todas as despesas
    const total = expensesArray.reduce((acumulador, despesa) => {
        return acumulador + Number(despesa.expenseValue);
    }, 0);

    // Atualiza valores no DOM
    domElementExpensesQuantity.innerText = `${expensesQuantity} despesas`
    domElementTotal.innerHTML = `<small>R$</small> ${formatValue(total)}`
}