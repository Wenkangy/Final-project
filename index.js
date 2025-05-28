function myGame() {
  let game = document.getElementById("game");
  let canvas = document.createElement("canvas");
  canvas.className="d-flex justify-content-center"
  canvas.id = "cursor";
  canvas.width = 480;
  canvas.height = 280;
  canvas.style.zIndex = 8;
  canvas.style.position = "absolute";
  canvas.style.border = "1px solid";

 
  game.appendChild(canvas);
}

myGame();
