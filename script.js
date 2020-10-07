console.log(moment().format('MMMM Do YYYY'));

$(document).ready(function () {
    $("#currentDay").text(moment().format('dddd, MMMM Do'));


    $(".saveBtn").on("click", function () {
        var descriptionValue = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")
        localStorage.setItem(time, descriptionValue);
    });


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