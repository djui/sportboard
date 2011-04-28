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
    return daysInMonth[month-1];
  }
}

var currentWeek = function(fromMonday) {
  var currentDate    = new Date();
  var currentYear    = currentDate.getFullYear();
  var currentMonth   = currentDate.getMonth()+1;
  var currentDay     = currentDate.getDate();
  var currentWeekday = currentDate.getDay() || 7; // Shift Sun:0 to Sun:7
  
  var currentWeek = [];
  
  // Create an array of all days from +/- 1 month around today
  var previousMonth = (currentYear*12 + currentMonth - 1) % 12;
  var previousYear  = Math.floor((currentYear*12 + currentMonth - 1) / 12);
  var nextMonth     = (currentYear*12 + currentMonth + 1) % 12;
  var nextYear      = Math.floor((currentYear*12 + currentMonth + 1) / 12);

  var previousMonthDays = getDaysInMonth(previousMonth, previousYear);
  var currentMonthDays  = getDaysInMonth(currentMonth, currentYear);
  var nextMonthDays     = getDaysInMonth(nextMonth, nextYear);

  var daysRange = [];
  for (var i=1; i <= previousMonthDays; i++)
    daysRange.push(i);
  for (var i=1; i <= currentMonthDays; i++)
    daysRange.push(i);
  for (var i=1; i <= nextMonthDays; i++)
    daysRange.push(i);
  
  var weekStartDay = currentDay - (fromMonday ? currentWeekday : 1);
  var weekStartDayIndex = previousMonthDays+weekStartDay;
  var currentWeekDays = [];
  for (var i=0; i < 7; i++)
    currentWeekDays.push(daysRange[weekStartDayIndex+i]);

  return currentWeekDays;
}

var currentWeekFromMonday = function() { return currentWeek(true); }
var currentWeekFromToday = function() { return currentWeek(false); }

console.log('Current week from Monday: ' + currentWeekFromMonday());
console.log('Current week from Today: ' + currentWeekFromToday());

exports.currentWeekFromToday = currentWeekFromToday;
exports.currentWeekFromMonday = currentWeekFromMonday;
