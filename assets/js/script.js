$(function () {
  // pulling the current day from dayjs and using it to populate header p text
  $("#currentDay").text(dayjs().format("MMM D, YYYY"));
  var hour = dayjs().hour();
  $(".time-block").each(function () {
    // id using this to grab the (.time-block) id attribute and split it into an array of two items. ["hour", "9"] then using index of 1 to grab second string 9.
    var id = $(this).attr("id").split("-")[1];
    var rowHour = parseInt(id);
    // ternary operator used to set the class for text block color based on current hour
    hour > rowHour
      ? $(this).addClass("past")
      : hour < rowHour
      ? $(this).addClass("future")
      : $(this).addClass("present");
      // sets the text of the child of timeblock with a class of description to the local storage variable. 
      $(this).children(".description").text(localStorage.getItem(id));
      
    //   var calendarText = localStorage.getItem(id);
    // $(id).children(".description").text(calendarText);
  });
  // click triggers the setting of hourAttr as key and hourTxt as value in local storage
  $(".saveBtn").click(function () {
    var hourAttr = $(this).parent().attr("id").split("-")[1];
    var hourTxt = $(this).parent().children(".description").val();
    localStorage.setItem(hourAttr, hourTxt);
  });
});

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.

// anthony said use military time to make it simple for am and pm
//
