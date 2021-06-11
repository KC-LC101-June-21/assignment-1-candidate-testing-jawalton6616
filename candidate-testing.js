const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name
  candidateName = input.question("Please enter your name. ")
  console.log(`Welcome ${candidateName}!\n`);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);
    if (candidateAnswers[i].toLowerCase().trim() === correctAnswers[i].toLowerCase().trim()) {
      console.log("Correct!\n");
    }
    else {
      console.log("Incorrect");
      console.log(`Correct answer: ${correctAnswers[i]}\n`)
    }
    
  }
console.log(`\nYour answers: ${candidateAnswers} \nCorrect answers: ${correctAnswers}\n`)
}

function gradeQuiz(candidateAnswers) {
  let grade = 0;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (i = 0; i < questions.length; i++){
    if (candidateAnswers[i].toLowerCase().trim() === correctAnswers[i].toLowerCase().trim()){
      grade++
    }
  }
  grade = (grade / questions.length) * 100;

// >>> Overall Grade: 40% (2 of 5 responses correct) <<<
// >>> Status: FAILED <<<

  console.log(`\nOverall Grade:${grade}% (${grade/10/2} of 5 responses correct)`)
  
  if (grade >= 80){
    console.log('>>> SATUS: PASSED <<<')
  }
  else{
    console.log('>>> STATUS: FAILED <<<')
  }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};