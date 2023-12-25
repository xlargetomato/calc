let clear = document.querySelector(".numberclear");
let delet = document.querySelector(".numberdel");
let slash = document.querySelector(".numberslash");
let minus = document.querySelector(".numberminus");
let one = document.querySelector(".number1");
let two = document.querySelector(".number2");
let three = document.querySelector(".number3");
let plus = document.querySelector(".numberplus");
let four = document.querySelector(".number4");
let five = document.querySelector(".number5");
let six = document.querySelector(".number6");
let darb = document.querySelector(".numberdarb");
let seven = document.querySelector(".number7");
let eight = document.querySelector(".number8");
let nine = document.querySelector(".number9");
// let clear = document.querySelector(".numberclear");
let percent = document.querySelector(".numberpercent");
let zero = document.querySelector(".numberzero");
let dot = document.querySelector(".numberdot");
let equal = document.querySelector(".numberequal");
let display = document.querySelector(".screen");

one.addEventListener("click", function a1() {
  display.innerHTML += "1";
});
two.addEventListener("click", function a1() {
  display.innerHTML += "2";
});
three.addEventListener("click", function a1() {
  display.innerHTML += "3";
});
four.addEventListener("click", function a1() {
  display.innerHTML += "4";
});
five.addEventListener("click", function a1() {
  display.innerHTML += "5";
});
six.addEventListener("click", function a1() {
  display.innerHTML += "6";
});
seven.addEventListener("click", function a1() {
  display.innerHTML += "7";
});
eight.addEventListener("click", function a1() {
  display.innerHTML += "8";
});
nine.addEventListener("click", function a1() {
  display.innerHTML += "9";
});
zero.addEventListener("click", function a1() {
  display.innerHTML += "0";
});
clear.addEventListener("click", function a1() {
  display.innerHTML = "";
});
delet.addEventListener("click", function a1() {
  display.innerHTML.slice(1, -1);
});
slash.addEventListener("click", function a1() {
  display.innerHTML += "/";
});
minus.addEventListener("click", function a1() {
  display.innerHTML += "-";
});
plus.addEventListener("click", function a1() {
  display.innerHTML += "+";
});
darb.addEventListener("click", function a1() {
  display.innerHTML += "*";
});
dot.addEventListener("click", function a1() {
  display.innerHTML += ".";
});
equal.addEventListener("click", function a1(form) {
  display.innerHTML = eval(display.innerHTML);
});

let wws = document.querySelector(".number");
wws.addEventListener("click", function a1(form) {
  document.body.innerHTML = "خدتك عليه";
  document.body.style.fontSize = "60px";
  document.body.style.backgroundColor = "white";
  document.body.style.textAlign = "center";
});
