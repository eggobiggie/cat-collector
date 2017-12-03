$(document).ready(function() {

//TOTAL SCORE and INITIAL NUMBER:
var totalScore = 0; //Adds up as user clicks cats
var totalScoreAdded = ""; //prints added numbers to screen
var wins = 0;
var losses = 0;

//generates random number between 19 - 120 for user to see
var initialNumber = Math.floor((Math.random() * 102) + 19);
console.log(initialNumber);

//Prints intial number and total score to page
$("#initial-number").text(initialNumber);
$("#total-score").text(totalScore);

//assigns random value between 1 - 12 to each cat variable
var blueCat = Math.floor((Math.random() * 12) + 1);
var greenCat = Math.floor((Math.random() * 12) + 1);
var purpleCat = Math.floor((Math.random() * 12) + 1);
var redCat = Math.floor((Math.random() * 12) + 1);

$("#blue-cat").val(blueCat);
$("#green-cat").val(greenCat);
$("#purple-cat").val(purpleCat);
$("#red-cat").val(redCat);

$("#blue-cat").on("click", function() {
  console.log("The blue cat is " + blueCat);
  totalScoreAdded = totalScore += blueCat;
  $("#total-score").text(totalScoreAdded);
});

$("#green-cat").on("click", function() {
  console.log("The green cat is " + greenCat);
  totalScoreAdded = totalScore += greenCat;
  $("#total-score").text(totalScoreAdded);
});

$("#purple-cat").on("click", function() {
  console.log("The purple cat is " + purpleCat);
  totalScoreAdded = totalScore += purpleCat;
  $("#total-score").text(totalScoreAdded);
});

$("#red-cat").on("click", function() {
  console.log("The red cat is " + redCat);
  totalScoreAdded = totalScore += redCat;
  $("#total-score").text(totalScoreAdded);
});

//Win or Loss if/else statement

$(".catImage").on("click", function() {
  if (totalScoreAdded === initialNumber) {
    $("#win-loss-text").text("You Win! Status Boosted!");
    wins++;
    $("#win-text").text(" " + wins);
    resetFunction();
  } else if (totalScoreAdded > initialNumber) {
    $("#win-loss-text").text("You lose! Try again!");
    losses++;
    $("#loss-text").text(" " + losses);
    resetFunction();
  }
});

// Reset Function:
  function resetFunction() {
    totalScore = 0;
    $("#total-score").text(totalScore);
    totalScoreAdded = "";
    initialNumber = Math.floor((Math.random() * 102) + 19);
    $("#initial-number").text(initialNumber);
    blueCat = Math.floor((Math.random() * 12) + 1);
    greenCat = Math.floor((Math.random() * 12) + 1);
    purpleCat = Math.floor((Math.random() * 12) + 1);
    redCat = Math.floor((Math.random() * 12) + 1);
    $("#blue-cat").val(blueCat);
    $("#green-cat").val(greenCat);
    $("#purple-cat").val(purpleCat);
    $("#red-cat").val(redCat);
  }

});
