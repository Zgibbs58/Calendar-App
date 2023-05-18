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
  });
  // click triggers the setting of hourAttr as key and hourTxt as value in local storage
  $(".saveBtn").click(function () {
    var hourAttr = $(this).parent().attr("id").split("-")[1];
    var hourTxt = $(this).parent().children(".description").val();
    localStorage.setItem(hourAttr, hourTxt);
  });
});
