$(document).ready(function() {

    //event handler
    $("button").click(scheduleTracker);

    //functions
    function scheduleTracker(event)
    {
        event.preventDefault();
        var day = $("input[type=radio]:checked").val();
        switch (day) {
            case "Monday":
                $("#work").text("Work: 7:30-5:00 PM");
                $("#exercise").text("Exercise: 5:30-7:00 PM");
                break;
            case "Tuesday":
                $("#work").text("Work: 7:30-5:00 PM");
                $("#exercise").text("Exercise: NONE");
                break;
            case "Wednesday":
                $("#work").text("Work: 7:30-5:00 PM");
                $("#exercise").text("Exercise: 5:30-7:00 PM");
                break;
            case "Thursday":
                $("#work").text("Work: 7:30-5:00 PM");
                $("#exercise").text("Exercise: NONE");
                break;
            case "Friday":
                $("#work").text("Work: 7:30-5:00 PM");
                $("#exercise").text("Exercise: 5:30-7:00 PM");
                break;
            case "Saturday":
                $("#work").text("Work: NONE");
                $("#exercise").text("Exercise: 9:00 AM-10:30 PM");
            case "Sunday":
                $("#work").text("Work: NONE");
                $("#exercise").text("Exercise: NONE");
                break;
            default:
                $("#work").text("NONE");
                $("#exercise").text("NONE");
                break;
        }
        }
    }
);