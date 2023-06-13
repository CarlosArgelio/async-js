function sum (num1, num2) {
    return num1 + num2;
};

function calc (num1, num2, callback) {
    return callback(num1, num2)
};

console.log(calc(1, 2, sum));

setTimeout(function () {
    console.log('Hello JS');
}, 2000)

function getting(name) {
    console.log(`Hola ${name}`)
}

setTimeout(getting, 2000, 'Carlos')