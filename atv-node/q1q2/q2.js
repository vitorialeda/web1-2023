export function media(array) {
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return media = sum / array.length;
};

export function menor(array) {
    return Math.min(...array)
}

export function maior(array) {
    return Math.max(...array)
}