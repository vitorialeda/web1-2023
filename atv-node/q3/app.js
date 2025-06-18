import lodash from "lodash";

const array = [1, 2, 2, 3, 4, 6, 2];

console.log(lodash.sortBy(array));
console.log(lodash.uniq(array));

const array_even = lodash.filter(array, (num) => num % 2 == 0);
console.log(array_even);

const array_double = lodash.map(array, (num) => num * 2);
console.log(array_double)

console.log(lodash.reduce(array, (ac, num) => ac + num));