let num1 = prompt('Веди число один !!');
let num3 = prompt('Ввдедіть значення типу (/ , * - +)')
let num2 = prompt('Веди число два !!');
let dor = 0;
let history = "null"
let calculatorWriteElement = document.getElementById("calculatorWrite");

let num1Number = parseInt(num1);
let num2Number = parseInt(num2);


if (num3 == "+" ) {
    dor = num1Number + num2Number;
} else if (num3 == "-" ){
    dor = num1Number - num2Number;
} else if (num3 == "*") {
    dor = num1Number * num2Number;
} else if (num3 == "/") {
    dor = num1Number / num2Number;
} else {
    alert('Помилка');
}







history = num1Number + num3 + num2Number + "=" + dor;
console.log(num1Number + num3 + num2Number + "=" + dor);
calculatorWriteElement.innerHTML = dor;
CalculatorHistory.innerHTML = history;
calculatorWriteElement.style.color = "red";