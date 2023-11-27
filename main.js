document.getElementById("btn").addEventListener("click", btnClicked);

// Eight Ball
function btnClicked() {
  let inputQuestion = document.getElementById("input").value.toLowerCase();
  let response;

  if (inputQuestion.includes("does a magic 8 ball actually work?")) {
    response = "How dare you doubt me!";
  } else if (inputQuestion.includes("is javascript awesome?")) {
    response = "Of course!";
  } else if (inputQuestion.trim() === "") {
    response = "Please ask a question...";
  } else {
    let randNum = Math.random();
    if (randNum < 0.2) {
      response = "Without a Doubt.";
    } else if (randNum < 0.4) {
      response = "As I see it, yes.";
    } else if (randNum < 0.6) {
      response = "Concentrate and ask again.";
    } else if (randNum < 0.8) {
      response = "Don't count on it.";
    } else {
      response = "Outlook not so good.";
    }
  }

  document.getElementById("output").textContent = "Answer: " + response;
}
