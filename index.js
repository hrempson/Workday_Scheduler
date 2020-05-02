//Global variables

var editSchedule
var saveButton
var taskInput = ""
var currentTime = moment().hour();
var currentTime = 11;

// Print the current date to the top of the page
$("#currentDay").append(moment().format("MMMM DD, YYYY"));
// Get localStorage
localStorage.getItem("tasks")

if (currentTime < 9) { 
    $(".status").addClass("future")
}
else if (currentTime > 17) {
    $(".status").addClass("past")
}
else {
    $(".status").each(function(i){
        var currentSection = $(this).attr("id");
        console.log(currentSection, currentTime);
        if(currentSection == currentTime) {
            $(this).addClass("present")
        }
        else if (currentSection <= currentTime) {
            $(this).addClass("past")
        }
        else {
                $(this).addClass("future")
        }
        
    }) 

    
}
var saveButtons = $(".save"),
tasks = {},
storedTasks= JSON.parse(localStorage.getItem("tasks")) || {};
taskInput = $(".tasks")


// Major Task 3 - Saveable tasks for each hour
// Click events for save buttons and text area
saveButtons.on("click", function() {
    var buttonHour = $(this).data("hour");
    var taskValue = taskInput.val();
    tasks ["tasks" + buttonHour] = taskValue;

//      Save tasks into localStorage
localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("tasks" + buttonHour, taskInput.val());

//      Load data from our localStorage into our HTML
});
