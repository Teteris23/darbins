function checkAnswers() {
  const answer1 = document.querySelector('input[name="question-1-answers"]:checked');
  const answer2 = document.querySelector('input[name="question-2-answers"]:checked');
  const answer3 = document.querySelector('input[name="question-3-answers"]:checked');
  const answer4 = document.querySelector('input[name="question-4-answers"]:checked');
  const answer5 = document.querySelector('input[name="question-5-answers"]:checked');
  const answer6 = document.querySelector('input[name="question-6-answers"]:checked');
  const answer7 = document.querySelector('input[name="question-7-answers"]:checked');
  const answer8 = document.querySelector('input[name="question-8-answers"]:checked');
  const answer9 = document.querySelector('input[name="question-9-answers"]:checked');
  const answer10 = document.querySelector('input[name="question-10-answers"]:checked');
  const answer11 = document.querySelector('input[name="question-11-answers"]:checked');
  const answer12 = document.querySelector('input[name="question-12-answers"]:checked');
  const answer13 = document.querySelector('input[name="question-13-answers"]:checked');
  const answer14 = document.querySelector('input[name="question-14-answers"]:checked');
  const answer15 = document.querySelector('input[name="question-15-answers"]:checked');

  if (!answer1 || !answer2 || !answer3) {
    alert("Lūdzu, atbildiet uz visiem jautājumiem.");
    return;
  }

  let correctAnswers = 0;

  if (answer1.value === "b") {
    correctAnswers++;
  }

  if (answer2.value === "a") {
    correctAnswers++;
  }

  if (answer3.value === "b") {
    correctAnswers++;
  }

  if (answer4.value === "b") {
    correctAnswers++;
  }

  if (answer5.value === "c") {
    correctAnswers++;
  }

  if (answer6.value === "a") {
    correctAnswers++;
  }

  if (answer7.value === "a") {
    correctAnswers++;
  }

  if (answer8.value === "b") {
    correctAnswers++;
  }

  if (answer9.value === "c") {
    correctAnswers++;
  }

  if (answer10.value === "d") {
    correctAnswers++;
  }

  if (answer11.value === "c") {
    correctAnswers++;
  }

  if (answer12.value === "d") {
    correctAnswers++;
  }

  if (answer13.value === "a") {
    correctAnswers++;
  }

  if (answer14.value === "b") {
    correctAnswers++;
  }

  if (answer15.value === "a") {
    correctAnswers++;
  }

  const percentageCorrect = Math.round(correctAnswers / 15 * 100);

  document.getElementById("result").textContent = `Jūs atbildējāt pareizi uz ${correctAnswers} no 10 jautājumiem (${percentageCorrect}%).`;
}