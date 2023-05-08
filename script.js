function checkAnswer() {
    const answer1 = document.querySelector('input[name="question-1-answers"]:checked');
    if (!answer1) {
      alert("Lūdzu, izvēlieties atbildi.");
      return;
    }
    if (answer1.value === "b") {
      document.getElementById("result").textContent = "Pareizi!";
    } else {
      document.getElementById("result").textContent = "Diemžēl nav pareizi.";
    }
  }

  function checkAnswer() {
    const answer2 = document.querySelector('input[name="question-2-answers"]:checked');
    if (!answer2) {
      alert("Lūdzu, izvēlieties atbildi.");
      return;
    }
    if (answer2.value === "a") {
      document.getElementById("result").textContent = "Pareizi!";
    } else {
      document.getElementById("result").textContent = "Diemžēl nav pareizi.";
    }
  }

  function checkAnswer() {
    const answer3 = document.querySelector('input[name="question-3-answers"]:checked');
    if (!answer3) {
      alert("Lūdzu, izvēlieties atbildi.");
      return;
    }
    if (answer3.value === "b") {
      document.getElementById("result").textContent = "Pareizi!";
    } else {
      document.getElementById("result").textContent = "Diemžēl nav pareizi.";
    }
  }