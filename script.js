// GLOBAL VARIABLES ------------------------------------
var currentHourMilitaryTime = parseInt(moment().format("HH"))
var currentDate = moment().format("MMM Do YYYY");
$("#currentDay").append(currentDate)
onRun()


// FUNCTIONS ------------------------------------------
function onRun() {
    for (let i = 9; i <= 17; i++) {
        timeCheck([i]);
    }
    function timeCheck(x) {
        if (currentHourMilitaryTime < x) {
            $("#" + x + "time").addClass("future");
        } else if (currentHourMilitaryTime > x) {
            $("#" + x + "time").addClass("past");
        } else {
            $("#" + x + "time").addClass("present");
        }
    }
}


// EVENT LISTENERS ------------------------------------