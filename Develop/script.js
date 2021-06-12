moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

var currentTime = moment();

currentTime = currentTime.startOf("hour");

var beforeTime = moment().startOf('day').add(9, "hours");

// Time blocks
// Block1: 9 AM 
var time1 = beforeTime.add(0, "h");
time1 = time1.format('hh:mm A');

$(".block1").text(time1);
// Block2: 10 AM
var time2 = beforeTime.add(1, "h");
time2 = time2.format('hh:mm A');

$(".block2").text(time2);
// Block3: 11 AM
var time3 = beforeTime.add(1, "h");
time3 = time3.format('hh:mm A');

$(".block3").text(time3);
// Block4: 12 PM
var time4 = beforeTime.add(1, "h");
time4 = time4.format('hh:mm A');

$(".block4").text(time4);
// Block5: 1 PM
var time5 = beforeTime.add(1, "h");
time5 = time5.format('hh:mm A');

$(".block5").text(time5);
// Block6: 2 PM
var time6 = beforeTime.add(1, "h");
time6 = time6.format('hh:mm A');

$(".block6").text(time6);
// Block7: 3 PM
var time7 = beforeTime.add(1, "h");
time7 = time7.format('hh:mm A');

$(".block7").text(time7);
// Block8: 4 PM
var time8 = beforeTime.add(1, "h");
time8 = time8.format('hh:mm A');

$(".block8").text(time8);
// Block9: 5 PM
var time9 = beforeTime.add(1, "h");
time9 = time9.format('hh:mm A');

$(".block9").text(time9);

function testTime() {
    //Block1: 9AM
    time1 = moment().startOf('day').add(9, "hours");

    currentTime = currentTime.startOf("hour");

    if (currentTime.isAfter(time1)) {
        $(".form9").addClass("past");
    }
    else if (currentTime.isBefore(time1)) {
        $(".form9").addClass("future");
    }
    else if (currentTime.isSame(time1)) {
        $(".form9").addClass("present");
    };
    // Block2: 10AM 
    time2 = moment().startOf('day').add(10, "hours");

    if (currentTime.isAfter(time2)) {
        $(".form10").addClass("past");
    }
    else if (currentTime.isBefore(time2)) {
        $(".form10").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".form10").addClass("present");
    };
    // Block3: 11AM
    time3 = moment().startOf('day').add(11, "hours");

    if (currentTime.isAfter(time3)) {
        $(".form11").addClass("past");
    }
    else if (currentTime.isBefore(time3)) {
        $(".form11").addClass("future");
    }
    else if (currentTime.isSame(time3)) {
        $(".form11").addClass("present");
    };
    // Block4: 12PM
    time4 = moment().startOf('day').add(12, "hours");

    if (currentTime.isAfter(time4)) {
        $(".form12").addClass("past");
    }
    else if (currentTime.isBefore(time4)) {
        $(".form12").addClass("future");
    }
    else if (currentTime.isSame(time4)) {
        $(".form12").addClass("present");
    };
    // Block5: 1PM
    time5 = moment().startOf('day').add(13, "hours");

    if (currentTime.isAfter(time5)) {
        $(".form1").addClass("past");
    }
    else if (currentTime.isBefore(time5)) {
        $(".form1").addClass("future");
    }
    else if (currentTime.isSame(time5)) {
        $(".form1").addClass("present");
    };
    // Block6: 2PM
    time6 = moment().startOf('day').add(14, "hours");

    if (currentTime.isAfter(time6)) {
        $(".form2").addClass("past");
    }
    else if (currentTime.isBefore(time6)) {
        $(".form2").addClass("future");
    }
    else if (currentTime.isSame(time6)) {
        $(".form2").addClass("present");
    };
    // Block7: 3M
    time7 = moment().startOf('day').add(15, "hours");

    if (currentTime.isAfter(time7)) {
        $(".form3").addClass("past");
    }
    else if (currentTime.isBefore(time7)) {
        $(".form3").addClass("future");
    }
    else if (currentTime.isSame(time7)) {
        $(".form3").addClass("present");
    };
    // Block8: 4pm
    time8 = moment().startOf('day').add(16, "hours");

    if (currentTime.isAfter(time8)) {
        $(".form4").addClass("past");
    }
    else if (currentTime.isBefore(time8)) {
        $(".form4").addClass("future");
    }
    else if (currentTime.isSame(time8)) {
        $(".form4").addClass("present");
    };
    // Block9: 5pm
    time9 = moment().startOf('day').add(17, "hours");

    if (currentTime.isAfter(time9)) {
        $(".form5").addClass("past");
    }
    else if (currentTime.isBefore(time9)) {
        $(".form5").addClass("future");
    }
    else if (currentTime.isSame(time9)) {
        $(".form5").addClass("present");
    };
}
testTime();

var x = [9, 10, 11, 12, 1, 2, 3, 4, 5];
for (var TimeBlock = 0; i < TimeBlock.length; i++) {
    var dataHour = localStorage.getItem(TimeBlock[i]);
    $(".form" + TimeBlock[i]).val(dataHour);
}

$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});