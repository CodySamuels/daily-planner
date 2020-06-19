// GLOBAL VARIABLES ------------------------------------
var currentHourMilitaryTime = parseInt(moment().format("HH"))
var currentDate = moment().format("MMM Do, YYYY");
var storageArray = JSON.parse(localStorage.getItem("user")) || [];

// PAGE LOAD NONSENSE ----------------------------------
pageLoad()
populateText(9)

// FUNCTIONS ------------------------------------------
function pageLoad() {
    $("#currentDay").append(currentDate)
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

function populateText(x) {
    for (let i = 0; i < storageArray.length; i++) {
        $("#" + x + "time").text(storageArray[i]);
        x++;
    }
}

// EVENT LISTENERS ------------------------------------
$("button").click(function() {
    storageArray=[];
    for (let i = 0; i < ($("textarea").length); i++) {    
        storageArray.push($("textarea")[i].value);
    }
    localStorage.setItem("user", JSON.stringify(storageArray))
})