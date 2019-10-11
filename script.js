//setting my variables for the planner

// var submitButton = document.querySelectorAll(".saveBtn");
// var textSubmit = document.querySelectorAll(".specification");
// var timeSelect = document.querySelectorAll(".hour");
var date = document.querySelector("#currentDay");

var m = moment().format("dddd MMMM Do");

console.log(m.toString("dddd MMMM Do"));
date.innerHTML = m;

var t = moment().format("H");
    console.log(t.toString("H"));

// var t2 = moment().hour(9);
//     console.log(t2.toString("9"))


   
   
function colorBlocks() {
   var t = moment().format("H");
    console.log(t.toString("H"));
    var boxList = ["#textarea9", "#textarea10", "#textarea11","#textarea12","#textarea13","#textarea14","#textarea15","#textarea16","#textarea17"];
for ( var i = 0; i < 9; i++) {
var mess = i + 9;

if (t < mess) {
 $(boxList[i]).css("background-color", "green");

}
   else if (t > mess){
    $(boxList[i]).css("background-color", "light-gray");
   
   }
else if (t = mess) {
    $(boxList[i]).css("background-color", "red");
   
   }




}}
colorBlocks();

function firsthourblock() {
    // var t = moment().format("H");
    // console.log(t.toString("H"));
var t = 9
  if(t < 9) {
        $("#textarea1").css("background-color", "green");
  }
  else if (t => 9) {
      $("#textarea1").css("background-color", "red")
  }
        
    
   
   
}
function secondhourblock() {
    var t = 9
    if(t < 10) {
          $("#textarea2").css("background-color", "green");
    }
    else if (t => 10) {
        $("#textarea2").css("background-color", "red")
    }  
}
// firsthourblock();
// secondhourblock();




//after each click the variables will be saved to local storage


// submitButton.addEventListener("click", function (event) { 
$(".saveBtn").on("click", function(){
    var val = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // store in local storage....time is the name of the local storage and value is the value of the local storage
    localStorage.setItem(time, val);

})


// create hour update function that checks the current hour to the hour of the time block
// have to loop through each time block and get the number from the Id to compare the current hour




// )
