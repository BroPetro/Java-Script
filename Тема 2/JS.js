//Змінні для завдання 1 і 1.2
let name1 = "Petro";
let name2 = "Hryhorenko";
let age = 11 ;
let stret = "Cnagini Olhy 65";
let kg = "30kg";
let height = "140 cm";
let manORwomen = "man";
let LikeCat = "NO";
let LikeDog = "YES";

//Змінні для завдання 2
let num = prompt("Ведіть своє число :");
let num2 = prompt("Ведіть своє друге число :");
let resultat = 0;
let num1 = 1;
let num3 = 3;
let num4 = 4;
resultat1 = 0;
let res1 = num1 + num3;
let res2 = num3 - num4;
let result = res1 * res2;


//Код для завдання 1 і 1.2
console.log(`мене звати: ${name1},моє прізвище:${name2},мені:${age},я живу на вулиці :${stret},я важу :${kg},Моя висота :${height},Хлопець чи дівчина :${manORwomen},Чи я люблю котів:${LikeCat},Чи люблю собак:${LikeDog}`);



//код для завдання 2
resultat = num + num2 
alert("Ось відповідь не розумного калькулятора :" + num + "+" + num2 + "=" + resultat)


resultat = num1 + num3 + num4
console.log("1+3+4");
console.log(resultat);
resultat = 0
resultat = num4 * num3 - num1
console.log("4*3-1");
console.log(resultat);
resultat = 0
resultat = num1 * num3 + num4
console.log("1*3+4");
console.log(resultat);
resultat = 0
console.log("(1 + 3) * (3 - 4)");
console.log(result);

let myButton = document.getElementById("myButton");
myButton.onclick = function () {
	alert("Ви натиснули кнопку!");
};
let textInput = document.getElementById("textInput");
let addButton = document.getElementById("addButton");
let list = document.getElementById("list");

addButton.onclick = function () {
	let listItem = document.createElement("li");
	listItem.innerText = textInput.value;
	list.appendChild(listItem);
	textInput.value = "";
};
let toggleButton = document.getElementById("toggleButton");
let hiddenText = document.getElementById("hiddenText");

toggleButton.onclick = function () {
	if (hiddenText.style.display === "none") {
		hiddenText.style.display = "block";
	} else {
		hiddenText.style.display = "none";
	}
};


