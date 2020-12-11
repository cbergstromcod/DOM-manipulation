window.onload = () => {
  let colors = ["blue", "red", "green", "purple", "pink"];
  let square = document.getElementById("square");
  // let square = document.querySelector("#square");
  // console.log(square);
  square.style.width = "100px";
  square.style.height = "100px";
  square.style.border = "5px solid black";
  // square.style.backgroundColor = "lightblue";
  square.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
  square.style.position = "absolute";
  square.style.left = "10rem";

  let circle = document.querySelector("button").addEventListener("click", () => {
    square.style.borderRadius = "50%";
    document.querySelector("#square p").innerHTML = "I'm a circle now";
  });

  square.addEventListener("click", () => {
    // console.log("clicked")
    square.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
  });

  let squareX = 0;
  let squareY = 0;
  window.addEventListener("keydown", (e) => {
    console.log(e);
    console.log(e.key);
    if (e.key == "ArrowLeft") {
      // left
      squareX -= 10;
      square.style.left = squareX + "px";
    } else if (e.key == "ArrowUp") {
      // up
      squareY -= 10;
      square.style.top = squareY + "px";
    } else if (e.key == "ArrowRight") {
      // right
      squareX += 10;
      square.style.left = squareX + "px";
    } else if (e.key == "ArrowDown") {
      // down
      squareY += 10;
      square.style.top = squareY + "px";
    } else if (e.key == "ArrowDown" && e.key == "ArrowRight") {
      // down
      squareY += 10;
      squareX += 10;
      square.style.top = squareY + "px";
      square.style.left = squareX + "px";
    }
  });
  // square.style.top = "10rem";
  // square.style.left = "10rem";
}