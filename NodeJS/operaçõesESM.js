/* 
// Primeira opção
export function soma(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}
*/


/*
// Segunda opção
function soma(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

export {soma, sub};
*/


/*
// Terceira opção
function soma(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export default soma;
*/



// Quarta opção
export class Calculadora {
    soma(a, b) {
        return a + b;
    }

    sub(a, b) {
        return a - b;
    }
}


