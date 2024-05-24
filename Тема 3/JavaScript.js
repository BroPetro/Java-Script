let num1 = 10;
let tem = prompt("Яка вас температура ");
let num2 = prompt("Введіть число");
let num3 = prompt("Введіть число яке ділиться на 100");
let num4 = num3;
let num5 = prompt("Введи число і стільки буде sms до 10 ");

if (tem > 36 && tem < 37){
    console.log("Твоя температура є нормальною")
} else if (tem > 37 && tem < 38) {
    console.log("У вас є повишина температура")
} else if ( tem > 38) {
    console.log("У вас є висока температура")
}else if ( tem < 36) {
    console.log("У вас є ниська температура")
}

if (num2 >= 1) {
    console.log("Число більше нуля")
} else if (num2 == 0) {
    console.log("нуль")
} else{
    console.log("Число відємне") 
}



num3 = num3 % 100;
console.log(num3)
if (num3 == 0) {
    alert(num4 + ":Число ділиться на 100 ")
} else{
    alert(num4 + ":Дивно ваше число не ділиться на 100 ")
}



num1 = num1 % 2;
console.log(num1)

if (num1 == 0) {
    console.log("10 парне число");
} else{
    console.log("10 не парне")
} 


if (num5 == 0){
    console.log("0 sms")
} else if (num5 == 1){
    alert("Ти сам винний")
} else if (num5 == 2){
    alert("Ти сам винний")
    alert("Ти сам винний")
} else if (num5 == 3){
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
} else if (num5 == 4){
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
} else if (num5 == 5){
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
} else if (num5 == 6){
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
} else if (num5 == 7){
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
} else if (num5 == 8){
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
} else if (num5 == 9){
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
} else if (num5 == 10){
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
    alert("Ти сам винний")
}