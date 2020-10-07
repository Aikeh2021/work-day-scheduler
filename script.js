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
            var timeBlockHour = parseInt($(this).attr("id"))
            if (timeBlockHour < currentHour) {
                $(this).addClass("past");
            } else if (timeBlockHour === currentHour) {
                $(this).removeClass("past")
                $(this).addClass("present");
            } else {
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            }

        })


    }

hourColors();





















































    //     var currentHour = (moment().format('hA'));
    //     var hourArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];


    // function timeTextAreaColor() {
    //     console.log(moment().format('hA'));
    //     if (moment().format('hA') == hourArray.indexOf(i)) {
    //         console.log("something matches!");
    //         // $("#" + hourArray[i]+ "").css("background-color:red");
    //     }

    //     // if(moment().format('h') == hourArray[i]){
    //     //     console.log("we're the same");
    //     // $("#" + hourArray[i]+ "").css("background-color:red");
    // }


    // // timeTextAreaColor(i);







    //I have no idea what this block of code is or where it came from
    // const moment = require("./lib/moment.min.js/moment");

    // $(document).ready(function(){
    //     var currentDate = (moment().format('dddd, MMMM Do'))
    // var dateStats = $("#currentDay").text(currentDate);    
    // })

    // var input1;
    // //Target HTML elements and store in variables
    // var saveButton9 = $("#9saveButton");
    // var input9 = $("#9input");

    // //Creating the event listener to save the hour inputs
    // saveButton9.on("click", function () {
    //     //when clicked, we store the name in local storage
    //     console.log(input9);
    //     //update the DOM
    // });

});