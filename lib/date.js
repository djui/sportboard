var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var monthNames = ['January','February','March',
                  'April','May','June',
                  'July','August','September',
                  'October','November','December'];

function getDaysInMonth(month, year) {
  if ((month == 2) && (year % 4 == 0) &&
      ((year % 100 != 0) || (year % 400 == 0))) {
    return 29; // Leap year
  } else {
    return daysInMonth[month];
  }
}

var currentWeek = function() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDate();
  var weekday = date.getDay() || 7; // Shift Sun:0 to Sun:7
  
  var week = [];
  for (var i=1; i<=7; i++)
    week.push(day-weekday+i); // FIXME This fails on overlapping months
  return week;
}

exports.currentWeek = currentWeek;
