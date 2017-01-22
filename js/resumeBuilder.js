/*
This is empty on purpose! Your code to build the resume will go here.
 */

// console.log(name);
// var awesomeThoughts = "I am Manas Solanki and I am awesome!";
// console.log(awesomeThoughts);

// $( "#main" ).append(awesomeThoughts);
// var awesome = awesomeThoughts.replace("awesome", "fun");
// console.log(awesome);
// $( "#main" ).append("<br>"+awesome);

var name = "Manas Solanki";
var role = "Software Developer";
var skills = ["Programming", "HTML", "CSS", "Javascript", "Python", "C++"];
var bio = {
	"name": "Manas Solanki",
	"role": "Software Developer",
	"contact": "manassolanki@gmail.com",
	"pic": "images/dp.jpg",
	"welcome": "Welcome Message",
	"skills": skills
};

var formattedname = HTMLheaderName.replace("%data%", name);
var formattedrole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedrole);
$("#header").prepend(formattedname);

