
//diplay current time and day in the jumbotron header using moment.js
var currentDay = document.getElementById("currentDay");
var hour = (moment().hours());
var today = moment().format('MMMM Do YYYY, h:mm a');
var saveBbutton = document.querySelector(".btn");
var inputAtt = document.querySelectorAll(".input-group");

console.log(currentDay);
console.log(hour);

currentDay.textContent = today;

function colorCode() {
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id"));

    if(hour < blockHour) {
        $(this).addClass("future");
    } else if (hour === blockHour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("past");
    }
    })
}


function storeInput() {
    userInput = {
        nineInput: $.trim($("#nine-input").val()),
        tenInput: $.trim($("#ten-input").val()),
        elInput: $.trim($("#el-input").val()),
        twInput: $.trim($("#tw-input").val()),
        oneInput: $.trim($("#one-input").val()),
    }
    window.localStorage.setItem("events", JSON.stringify(userInput));
}

function displayInput(){
    var input = JSON.parse(window.localStorage.getItem("events"))
    if (input) {
        $("#nine-input").html(input.nineText);
    }
}



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
saveBbutton.click(storeInput());
colorCode();
storeInput();
displayInput();
