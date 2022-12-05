var readlineSync = require('readline-sync');
score = 0;
function add(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (answer === userAnswer) {
    score++;
    console.log("Yes you are correct! And your score is: " + score);
  }
  else {
    console.log("Sorry you are wrong,And your score is: " + score);
  }
}
add("What was the name of my first pet cat", "kitty");
add("What is my blood group", "b-");
add("What is my dream car", "polo");
add("What would i prefer beach or mountains", "mountains")
add("What is my favourite food, noodles or pizza", "pizza")