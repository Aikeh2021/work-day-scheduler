//Troubleshooting to make sure the right moment.js features are being displayed
console.log(moment().format('MMMM Do YYYY'));
console.log(moment().hours());

//Displaying the current date on the webpage (taken from moment.js)
$(document).ready(function () {
    $("#currentDay").text(moment().format('dddd, MMMM Do'));


    //Adding an event listener to the save buttons to make sure they're saving/setting the text from the timeblocks to local storage
    $(".saveBtn").on("click", function () {
        var descriptionValue = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")
        localStorage.setItem(time, descriptionValue);
    });

//Changing the color of the timeblocks 
    function hourColors() {
        var currentHour = moment().hours();
        $(".time-block").each(function () {
            var timeBlockHour = parseInt($(this).attr("id"));
            if (timeBlockHour < currentHour) {
                $(this).addClass("past");
            } else if (timeBlockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }

        })


    }

    hourColors();

    //Calling the local storage to get the hourly event descriptions and put them on the page whenever the page is refreshed
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#1 .description").val(localStorage.getItem("1"));
$("#2 .description").val(localStorage.getItem("2"));
$("#3 .description").val(localStorage.getItem("3"));
$("#4 .description").val(localStorage.getItem("4"));
$("#5 .description").val(localStorage.getItem("5"));

});