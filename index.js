const words = ["student", "learner", "Programmer", "game developer"];

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
  let loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById("word").innerHTML = word.join("");
    } else {
      if(words.length > (i+1)){
        i++;
      }
      else{
        i= 0;
      }
      typeWriter();
      return false;
    }
    counter = setTimeout(loopDeleting, speed);
  };
  loopDeleting();
}

typeWriter();
