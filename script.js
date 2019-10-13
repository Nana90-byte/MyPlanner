
//function that displays the date in the console and browser
function dator() {
    var date = document.querySelector("#currentDay");
    var m = moment().format("dddd MMMM Do");
    console.log(m.toString("dddd MMMM Do"));
    date.innerHTML = m;
}
//Updates and runs the function every minute on the date display
setInterval(dator, 1000 * 60 );
//Calls the function
dator();




// get out data from local storage and save it in the browser
for (var i = 9; i < 18; i++) {
    console.log(
        i,
        localStorage.getItem(i)
    )
    $("#textarea" + i).val(localStorage.getItem(i))
}
//Using an array checks the current hour of the day and compares it to the  hour of the text area, and with a conditional statement it will change color depending on the hour
function colorBlocks() {
    var t = moment().format("H");
    console.log(t.toString("H"));
    var boxList = ["#textarea9", "#textarea10", "#textarea11", "#textarea12", "#textarea13", "#textarea14", "#textarea15", "#textarea16", "#textarea17"];
    for (var i = 0; i < 9; i++) {
        var mess = i + 9;

        if (t < mess) {
            $(boxList[i]).css("background-color", "green");

        } else if (t > mess) {
            $(boxList[i]).css("background-color", "light-gray");

        } else if (t = mess) {
            $(boxList[i]).css("background-color", "red");

        }
    }
}
//Updates and runs the function every minute on the time blocks
setInterval(colorBlocks, 1000 * 60);
colorBlocks();

//after each click the variables will be saved to local storage 
$(".saveBtn").on("click", function () {
    var val = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // store in local storage....time is the name of the local storage and value is the value of the local storage
    localStorage.setItem(time, val);
    console.log(val);
    console.log(time);
})






