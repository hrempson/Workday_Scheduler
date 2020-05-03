//Global variables
var saveButton
var currentTime = moment().hour();

// var currentTime = 11;
var savedTasks = JSON.parse(localStorage.getItem("task")) || {};

// Get stored tasks
// Learning about Object.entries https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
for (let [key, value] of Object.entries(savedTasks)) {
    // Learning about Template String (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
    $(`#${key}`).val(value);
    // $("#" + key).val(value);
}

// Print the current date to the top of the page
$("#currentDay").append(moment().format("MMMM DD, YYYY"));

// Color coding for past, present, future
if (currentTime < 9) {
    $(".status").addClass("future");
} else if (currentTime > 17) {
    $(".status").addClass("past");
} else {
    $(".status").each(function (i) {
        var currentSection = $(this).attr("id");
        if (currentSection == currentTime) {
            $(this).addClass("present")
        } else if (currentSection <= currentTime) {
            $(this).addClass("past")
        } else {
            $(this).addClass("future")
        }
    })
}
var saveButtons = $(".save");
var tasks = {};

// Major Task 3 - Saveable tasks for each hour
// Click events for save buttons and text area
saveButtons.on("click", function () {
    var buttonHour = $(this).data("hour");
    console.log(buttonHour);
    var taskInput = $("#task" + buttonHour);
    var taskValue = taskInput.val();
    savedTasks["task" + buttonHour] = taskValue;

    //      Save tasks into localStorage
    localStorage.setItem("task", JSON.stringify(savedTasks));
    localStorage.setItem("task" + buttonHour, taskInput.val());
});