//main.js
// store the quotes
//JQuery Library Imported
$(document).ready(function(){
  $("#score_chart").hide();
  $("#closing_remarks").hide();
var quotes_array =
["Working out is a no-risk high reward investment in yourself",
"The grind never stops",
"Tomorrow's success is decided today",
"A plate in gym slang is a 45 pound round weight",
"A quarter in gym slang is a 25 pound round weight",
"Don't compare your beginning to someone's middle",
"You will never start if you're going to start tomorrow",
"Rome wasn't built in a day",
"First impressions matter",
"Look good, feel good"
];

var questions_array =
[
  "Do you want to be more confident?",
  "Do you want to live a long healthy life?",
  "Do you wish clothes fit you better?",
  "Are you getting bodied on the basketball court?",
  "Do your friends make jokes about your body?",
  "When you look in the mirror do want something better than what you see?",
  "Would you make a no-risk high reward investment in yourself?",
  "Do you want to work for something money can't buy?"
];


var question_number, quiz_score;
$("#quote_button").click(function()
{
  document.getElementById("quote_box").innerHTML = quotes_array[Math.floor(((Math.random()*1000) % quotes_array.length))];
});

//Start quiz
$("#start_button").click(function(){
  $("#question_text").html(questions_array[0]);
  $("#start_button").hide(); // hide start button when game starts
  question_number = 0;
  quiz_score = 0;
});

$("#yes_button").click(function(){
  quiz_score++; // Yes their need to go to the gym increases
  question_number++;
  $("#question_text").html(questions_array[question_number]);

  if(question_number == 7)
  display_score();
});

$("#no_button").click(function(){
  question_number++;
  $("#question_text").html(questions_array[question_number]);

  if(question_number == 7)
  display_score();
});

function display_score()
{
  $("#answer_box").hide(); // hide the buttons
  $("#question_text").html("You scored " + (quiz_score+1) + " out of 8 points");
  $("#score_chart").show();
  $("#closing_remarks").show();
}



 // test

});
