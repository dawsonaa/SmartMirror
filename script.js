/************************************************************************
* Smart Mirror JavaScript
* February 2023
* KSU ECE
* 2023 Senior Design Project
* 
* 
************************************************************************/

// 0 = Time, 1 = weather, 2 = qotd, 3 = camera, 
var currentApp = 0;
let timezone;
let timezoneWord;
const firstdate = new Date();
const firsttimezone = firstdate.getTimezoneOffset();
timezone = firstdate.getTimezoneOffset();
timezoneWord = getTimezone(timezone);
document.getElementById("bString").innerHTML ="Timezone: " + timezoneWord;

setInterval(getApp, 100); // Runs every 1/10th second

function getApp(){
  if(currentApp == 0)
    {
      getDateAndTime();
    }
  else if(currentApp == 1)
    {
      getWeather();
    }
}

function getWeather(){
  document.getElementById("tString").innerHTML = "Day";
  document.getElementById("mString").innerHTML = "32 F";
  document.getElementById("bString").innerHTML = "Location?";
  
  document.getElementById('bButton1').style.visibility = 'hidden';
  document.getElementById('bButton2').style.visibility = 'hidden';
  document.getElementById('bButton3').style.visibility = 'hidden';
  document.getElementById('bButton4').style.visibility = 'hidden';
  document.getElementById('bButton5').style.visibility = 'hidden';
  document.getElementById('bButton6').style.visibility = 'hidden';
}

//Gets year, month, day, hour, minute, second, day of week, month as a word, timezone, and timezone offset
function getDateAndTime(){
  const date = new Date(); 
  var year = date.getFullYear();
  var month = date.getMonth()+1; 
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var dayOfWeekNum = date.getDay();
  if(timezone != firsttimezone)
    {
      hour = hour + (firsttimezone - timezone) / 60;
    }
  if(hour >= 23)  //23
    {
      hour = hour - 23;
      day = day + 1;
      dayOfWeekNum = dayOfWeekNum + 1;
      if(((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && day > 31)  // 31 days
         || ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30)  // 30 days
         || (month == 2 && day > 28 && year % 4 != 0)  // february not leap year
         || (month == 2 && day > 29 && year % 4 == 0)) // february leap year
        {
          day = 1;
          month = month + 1;
          if(month > 12)
            {
              month = 1;
              year = year + 1;
            }
        }
    }
  hour = getHour(hour);
  var dayOfWeek = getDayOfWeek(dayOfWeekNum);
  var monthWord = getMonth(month);
  if(minute < 10 && second < 10)
  {
      document.getElementById("mString").innerHTML = hour + ":0" + minute + ":0" + second;
  }
  else if(minute < 10)
  {
    document.getElementById("mString").innerHTML = hour + ":0" + minute + ":" + second;  
  }
  else if(second < 10)
  {
      document.getElementById("mString").innerHTML = hour + ":" + minute + ":0" + second;
  }
  else
  {
    document.getElementById("mString").innerHTML = hour + ":" + minute + ":" + second;
  }
  document.getElementById("tString").innerHTML = dayOfWeek + ", " + monthWord + " " + day + " " + year;
  timezoneWord = getTimezone(timezone);
  document.getElementById("bString").innerHTML ="Timezone: " + timezoneWord;
  document.getElementById('bButton1').style.visibility = 'visible';
  document.getElementById('bButton2').style.visibility = 'visible';
  document.getElementById('bButton3').style.visibility = 'visible';
  document.getElementById('bButton4').style.visibility = 'visible';
  document.getElementById('bButton5').style.visibility = 'visible';
  document.getElementById('bButton6').style.visibility = 'visible';
}

//Returns the day of the week
function getDayOfWeek(dayOfWeekNum)
{
  var dayOfWeek;
  if(dayOfWeekNum == 0)
      dayOfWeek = "Sunday";
  else if(dayOfWeekNum == 1)
      dayOfWeek = "Monday";
  else if(dayOfWeekNum == 2)
      dayOfWeek = "Tuesday";
  else if(dayOfWeekNum == 3)
      dayOfWeek = "Wednesday";
  else if(dayOfWeekNum == 4)
      dayOfWeek = "Thursday";
  else if(dayOfWeekNum == 5)
      dayOfWeek = "Friday";
  else if(dayOfWeekNum == 6)
      dayOfWeek = "Saturday";
  return dayOfWeek;
}

//gets the hour, uses a 12 hour clock
function getHour(hour)
{
  var num = hour;
  if(hour > 12)
    num -= 12;
  else if(hour == 0)
  {
    num = 12;
  }
  return num;
}

// Gets the month as a word 
function getMonth(month)
{
  var monthWord;
  if(month == 1)
    monthWord = "January";
  else if(month == 2)
    monthWord = "February";
  else if(month == 3)
    monthWord = "March";
  else if(month == 4)
    monthWord = "April";
  else if(month == 5)
    monthWord = "May";
  else if(month == 6)
    monthWord = "June";
  else if(month == 7)
    monthWord = "July";
  else if(month == 8)
    monthWord = "August";
  else if(month == 9)
    monthWord = "September";
  else if(month == 10)
    monthWord = "October";
  else if(month == 11)
    monthWord = "November";
  else if(month == 12)
    monthWord = "December";
  return monthWord;
}

//Gets the time zone
function getTimezone(timezone)
{
  var tz = (0 - timezone)/60;
  let timezoneWord;
  if(tz == -10)
      timezoneWord = "Hawaii-Aleutian Standard Time";
  else if(tz == -9)
      timezoneWord = "Alaska Standard Time";
  else if(tz == -8)
      timezoneWord = "Pacific Standard Time";
  else if(tz == -7)
      timezoneWord = "Mountain Standard Time";
  else if(tz == -6)
      timezoneWord = "Central Standard Time";
  else if(tz == -5)
      timezoneWord = "Eastern Standard Time";
  return timezoneWord;
}

function hTime()
{
  if(timezone != 600)
  {
    timezone = 600;
  }
  timezoneWord = getTimezone(timezone);
  document.getElementById("bString").innerHTML ="Timezone: " + timezoneWord;
}

function aTime()
{
  if(timezone != 540)
  {
    timezone = 540;
  }
  timezoneWord = getTimezone(timezone);
  document.getElementById("bString").innerHTML ="Timezone: " + timezoneWord;
}

function pTime()
{
  if(timezone != 480)
  {
    timezone = 480;
  }
  timezoneWord = getTimezone(timezone);
  document.getElementById("bString").innerHTML ="Timezone: " + timezoneWord;
}

function mTime()
{
  if(timezone != 420)
  {
    timezone = 420;
  }
  timezoneWord = getTimezone(timezone);
  document.getElementById("bString").innerHTML ="Timezone: " + timezoneWord;
}

function cTime()
{
  if(timezone != 360)
  {
    timezone = 360;
  }
  timezoneWord = getTimezone(timezone);
  document.getElementById("bString").innerHTML ="Timezone: " + timezoneWord;
}

function eTime()
{
  if(timezone != 300)
  {
    timezone = 300;
  }
  timezoneWord = getTimezone(timezone);
  document.getElementById("bString").innerHTML ="Timezone: " + timezoneWord;
}

function timeClick()
{
  currentApp = 0;
}

function weatherClick()
{
  currentApp = 1;
}

function QOTDClick()
{
  currentApp = 2;
  const dqDate = new Date();
  var dQ = dqDate.getDay();
  document.getElementById("tString").innerHTML = "";
  document.getElementById("bString").innerHTML = "";
  if(dQ == 0)
    {
      document.getElementById("mString").innerHTML = "Quote 1";
    }
  else if(dQ == 1)
    {
      document.getElementById("mString").innerHTML = "Quote 2";
    }
  else if(dQ == 2)
    {
      document.getElementById("mString").innerHTML = "Quote 3";
    }
  else if(dQ == 3)
    {
      document.getElementById("mString").innerHTML = "Quote 4";
    }
  else if(dQ == 4)
    {
      document.getElementById("mString").innerHTML = "Quote 5";
    }
  else if(dQ == 5)
    {
      document.getElementById("mString").innerHTML = "Quote 6";
    }
  else if(dQ == 6)
    {
      document.getElementById("mString").innerHTML = "Quote 7";
    }
  
  
  document.getElementById('bButton1').style.visibility = 'hidden';
  document.getElementById('bButton2').style.visibility = 'hidden';
  document.getElementById('bButton3').style.visibility = 'hidden';
  document.getElementById('bButton4').style.visibility = 'hidden';
  document.getElementById('bButton5').style.visibility = 'hidden';
  document.getElementById('bButton6').style.visibility = 'hidden';
}