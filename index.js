// import { mouseOver } from "./function.js";

let button = document.getElementById("hi");
let p = document.getElementById("");
function test() {
  let firstName = prompt("what is your name ?", "your first name");
  let lastName = prompt("your last name ?");
  firstName = firstName.toUpperCase();
  console.log(firstName);
  console.log(lastName);
  alert(`Hi ${firstName} ${lastName}!`);
  mouseOver;
  console.log("currentDate ==> ", currentDate);
}

const form = document.getElementById("form");
const error = document.getElementById("error");
const  value = document.getElementById("email").value;
const email= document.getElementById("email")

function handleSubmit(e) {
    e.preventDefault()
  console.log("from sum=bmited");
}
form.addEventListener("submit" , handleSubmit)

function blurInput() {
  console.log(value);
  if (value === "") {
    error.textContent = "email is requered";
      error.style.color = "red";
      error.style.display = "block";
      email.style.backgroundColor="#ffd9d9"
  }
}
email.addEventListener("blr" , blurInput)





let currentDate = new Date();
currentDate.setFullYear(2001);
console.log(currentDate.getFullYear());


let count =0
function addCount() {
  count++
  const countP = document.getElementById("count")
  countP.textContent = count
}
const khara = document.getElementById("hi")
khara.addEventListener("mouseover" , addCount)
console.log();

const h6Div=document.getElementById("h6")
h6Div.childNodes[5].style.color="red"
// const h6 = document.getElementsByTagName("h6")
// h6[1].style.color="red"
// h6[2].innerHTML="majd is the best"




// let m = "majd";
// console.log(typeof m);
// let str = "hind";
// console.log(str.slice(0, 1));
// console.log("str ==> ", str);
// let n = 10 + 20;

// // It returns only first Number it encounters
// e = parseFloat("22 7 2018")
// console.log('parseFloat("22 7 2018") = '
//     + e);

// let majd = 2
// console.log(majd);
//     majd =majd.toString()
//     console.log(majd);
//     console.log(typeof(majd));
// let b = parseFloat("2018@geeksforgeeks")
// console.log('parseFloat("2018@geeksforgeeks") = '
//     + b);

// console.log(parseInt("2a.1a879"));
// console.log(n);
// console.log("random", Math.random() * 3 + 2);
// let str1 = "bdet ihs bek 3ade bdet aseh";
// const index = str1.lastIndexOf("bdet");
// console.log(index);

button.addEventListener("click", test);
