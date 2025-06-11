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

function getData(form) {
  let formData = new FormData(form);
  let email = document.querySelector("#email-field");
  
  let emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(email.value)) {
    alert("Please enter a valid email address.");
    return;
  }

  console.log("==========Form data==========");
  for (let pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }
  console.log(Object.fromEntries(formData));
}

document.querySelector(".myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  getData(e.target);
});
