//Global variables
var saveButton 
var currentTime = moment().hour();
// var currentTime = 11;
var savedTasks = JSON.parse(localStorage.getItem("tasks")) || {};

// Get stored tasks
$("#task-9").val(savedTasks.tasks9);
console.log(savedTasks.tasks9)
$("#task-10").val(savedTasks.tasks10);

$("#task-11").val(savedTasks.tasks11);

$("#task-12").val(savedTasks.tasks12);

$("#task-13").val(savedTasks.tasks13);

$("#task-14").val(savedTasks.tasks14);

$("#task-15").val(savedTasks.tasks15);

$("#task-16").val(savedTasks.tasks16);

// Print the current date to the top of the page
$("#currentDay").append(moment().format("MMMM DD, YYYY"));
// Color coding for past, present, future
if (currentTime < 9) { 
    $(".status").addClass("future");
}
else if (currentTime > 17) {
    $(".status").addClass("past");
}
else {
    $(".status").each(function(i){
        var currentSection = $(this).attr("id");
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
var saveButtons = $(".save");
var tasks = {};

// Major Task 3 - Saveable tasks for each hour
// Click events for save buttons and text area
saveButtons.on("click", function() {
    var buttonHour = $(this).data("hour");
    console.log(buttonHour);
    var taskInput = $("#task-" + buttonHour);
    var taskValue = taskInput.val();
    savedTasks ["tasks" + buttonHour] = taskValue;

//      Save tasks into localStorage
localStorage.setItem("tasks", JSON.stringify(savedTasks));
console.log(savedTasks);
    localStorage.setItem("tasks" + buttonHour, taskInput.val());
});
