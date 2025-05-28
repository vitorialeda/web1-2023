const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("footer");
const description = document.getElementById("description")


document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    switch (currency.value) {
        case "USD":
            convertCurrency(amount, 5.65, "US$");
            break;
        case "EUR":
            convertCurrency(amount, 6.35, "€");
            break;
        case "GBP":
            convertCurrency(amount, 7.60, "£");
            break;
    }
})


function convertCurrency(amount, price, symbol) {
    try {
        console.log(amount.value * price)
        description.innerHTML = symbol + (amount * price);
        footer.classList.add("show");
    } catch {
        footer.classList.remove("show");
    }
}
// amount.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log(amount.value)
//     console.log(currency)
//     // switch(currency)
// })