var dob = new Date(prompt("Enter Your age ","Jan 10, 2000"));
var dobMili = dob.getTime();
var today = new Date();
var todayMili = today.getTime();
var diff = todayMili - dobMili;
var accurate = Math.floor(diff/(1000*60*60*24*30*12));
