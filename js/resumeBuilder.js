/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Manas Solanki \n");
var name = "Manas Solanki";
console.log(name);
var awesomeThoughts = "I am Manas Solanki and I am awesome!";
console.log(awesomeThoughts);

$( "#main" ).append(awesomeThoughts);

var awesome = awesomeThoughts.replace("awesome", "fun");
console.log(awesome);

$( "#main" ).append("<br>"+awesome);
