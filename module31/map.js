const numbers = [4, 6, 8, 10];
const output1 = [];
// old system of declaretion of function 
// function oldNumber(number) {
//     return number * 2
// }

// new system of declaration of function 
const doubleIt = number => number * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    output1.push(result);
    // 1 loop 
    // element diye function call korchi 
    // result ekta array er moddhe push korchi 
}
// console.log(output1);
// for (const number of numbers) {
//     const result = number * 2;
//     output.push(result);
// }



// const arr1 = [2, 4, 6, 8];
// output = [];
// for (const num of arr1) {
//     const result = num * 3;
//     output.push(result);

// }
// console.log(output)


// using map
// const output = numbers.map(number => number * 2);


const output = numbers.map(x => x * 2);
console.log(output);
const square = numbers.map(x => x * x);
console.log(square);


