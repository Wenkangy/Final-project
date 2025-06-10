const words = ["student", "Programmer", "game dev"];

let i = 0;
let speed = 260;
let counter = 0;

function typeWriter() {
  let word = words[i].split("");
  let loopTyping = function () {
    if (word.length > 0) {
      document.getElementById("word").innerHTML += word.shift();
    } else {
      deleteWord();
      return false;
    }
    counter = setTimeout(loopTyping, speed);
  };
  loopTyping();
}

function deleteWord() {
  let word = words[i].split("");

  function loopDeleting() {
    if (word.length > 0) {
      word.pop();
      document.getElementById("word").innerHTML = word.join("");
    } else {
      i = (i + 1) % words.length; 
      typeWriter();
      return;
    }
    setTimeout(loopDeleting, speed);
  }

  loopDeleting();
}

typeWriter();