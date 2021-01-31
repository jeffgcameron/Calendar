
//diplay current time and day in the jumbotron header using moment.js
var currentDay = document.getElementById("currentDay");
var today = moment().format('MMMM Do YYYY, h:mm a');
console.log(today);
console.log(typeof today);
var m = moment();
console.log(m.toString());
console.log(m.hour());
console.log(typeof m.hour());

currentDay.textContent = today;

var inputAtt = document.querySelectorAll(".input-group");


var currentTime = document.querySelectorAll(".input-group-text")
var time = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

var nineId = document.getElementById("nine-id")


//for the vaiable time if the the actual time is equal to time less than or greater than time[i]
// for(var i = 0; i < time.length; i++) {
//          if (time[i] === m.hour()) {
//             time[i].setAttribute("style", "background-color: red")
         
//  }
//change the color (attributes) of boxes based on the time it is in the jumbotron
//if the time is less equal to a time box, make it red.
//if the time is past time time boxes. keep them gray,
//if the time has yet to reach the time boxs make them green
//if today.time = , >, or < time boxes then change the color accordingly

//make text input the 



// var nineInput = window.localStorage.getItem("nine");



var nineInput = document.getElementById("nine-input");
var saveNineButton = document.querySelector(".nine-btn");

function saveNineTask() {
    var nineText = window.localStorage.getItem("text");

    if (!nineText) {
        return;
    }

   nineInput.textContent = nineText;
}


saveNineButton.addEventListener("click", function() {
    console.log("hello");
    var nineText = document.getElementById("nine-input").value;
    localStorage.setItem("text", nineText);
    nineInput.textContent = nineText;
    saveNineTask();
});

// var currentHour = moment();
// var hour = currentHour.get("hour");

// if(hour < 9 || hour > 17) {
//   $(".row").addClass("past");

// } else {
//   pastRows = hour - firstHour;
//   futureRows = finalHour - hour

//   for(var i = 0; i <= pastRows; i++) {
//     $("#_" + (hour - i)).addClass("past");
//   }
//   $("#_" + hour).addClass("present");

//   for(i = 1; i <= futureRows; i++) 
//     $("#_" + (hour + i)).addClass("future");