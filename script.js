
  function checkAnswers() {
    const answer1 = document.querySelector('input[name="question-1-answers"]:checked');
    const answer2 = document.querySelector('input[name="question-2-answers"]:checked');
    const answer3 = document.querySelector('input[name="question-3-answers"]:checked');
  
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
  
    const percentageCorrect = Math.round(correctAnswers / 3 * 100);
  
    document.getElementById("result").textContent = `Jūs atbildējāt pareizi uz ${correctAnswers} no 3 jautājumiem (${percentageCorrect}%).`;
  }