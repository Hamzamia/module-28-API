const friend = ['hamza mahmud', ' jahid bhuiyan', 'tom imam', 'kazi mahbub'];
const fLength = friend.map(friend => friend.length);
// console.log(fLength);

const product = [
    { name: 'water', price: 50, color: 'white' },
    { name: 'coca-cola', price: 60, color: 'red' },
    { name: 'pepsi', price: 20, color: 'parple' }
]
const productName = product.map(product => product.name)
console.log(productName);
const productPrice = product.map(product => product.price);
console.log(productPrice);


product.map(product => console.log(product));