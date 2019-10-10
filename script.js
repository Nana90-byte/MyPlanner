//setting my variables for the planner

var submitButton = document.querySelectorAll(".button");
var textSubmit = document.querySelectorAll(".holder");
var timeSelect = document.querySelectorAll(".time");
var date = document.querySelector("#currentDay");

var m = moment().format("dddd MMMM Do");

console.log(m.toString("dddd MMMM Do"));
date.innerHTML = m;

console.log(submitButton);
console.log(textSubmit);

//after each click the variables will be saved to local storage


$(".button").on("click", function() { 

console.log(submitButton);


var timing = timeSelect.textContent;
var userText = textSubmit.value;

localStorage.setItem("tiempo", timing);
console.log(timing);
localStorage.setItem("input", userText);
console.log(userText);
event.preventDefault();
} 

)