function asyncFunction() {
    return new Promise((resolve, reject) => {
        // Simular processamento assíncrono
        setTimeout(() => {
            const isSuccess = true;
            if (isSuccess) {
                resolve("Deu certo :D");
            } else {
                reject("Erro na operação");
            }
        }, 1000)
    })
}

asyncFunction().then(resolve => console.log(resolve)).catch((error) => console.log(error))


// async function Teste() {
//     const teste = await asyncFunction();
//     console.log(teste);
// }
// Teste()