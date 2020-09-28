let player1;
let player2;
let timeOut;
// START
let target = document.querySelector(".johnnys");
let posTop = 10;
let posLeft = 10;


document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  player1 = document.querySelector("#player1").value;
  player2 = document.querySelector("#player2").value;
  //hide the form
  document.querySelector("form").style.display = "none";

  // lqnch gqme
  document.addEventListener("keydown", moveCube);
  target.addEventListener("click", shoot);
  // lqnceéent du timer
  timeOut = setTimeout(function () {
    document.querySelector(".johnnys").style.backgroundColor = ""; /* BG removed for keybord winner*/
    document.querySelector(".johnnys").innerText= "KB Wins";
    document.querySelector(".johnnys"). style.color="#ffffff"; /* white font winner*/
    document.removeEventListener("keydown", moveCube);
    target.removeEventListener("click", shoot);
  }, 30000);
<<<<<<< HEAD
  
=======
>>>>>>> 20b0cda4d680673f7b632c0ed72b5601cb3bb5fc
});

function moveCube(event) {
  //gather
  console.log(event.key);
  //logic - mvt
  if (event.key == "ArrowDown") {
    posTop = posTop + 10;
  }
  if (event.key == "ArrowUp") {
    posTop = posTop - 10;
  }
  if (event.key == "ArrowRight") {
    posLeft = posLeft + 10;
  }
  if (event.key == "ArrowLeft") {
    posLeft = posLeft - 10;
  }
  // ! Limit the playgroung
  if (posTop < -65) { /*(posTop < 0)*/
    posTop = 30;      /*(posTop = 90)*/
  }
  if (posTop > 30) { /*(posTop > 90)*/
    posTop = -65;    /*(posTop = 0)*/
  }
  if (posLeft < 0) {
    posLeft = 90;
  }
  if (posLeft > 90) {
    posLeft = 0;
  }
  //display
  target.style.top = posTop + "%";
  target.style.left = posLeft + "%";
}

//--------------------  cLICKS  ----------------------
function shoot() {
  target.style.backgroundColor = ""; /* BG removed for mouse winner*/
  document.querySelector(".johnnys").innerText = "Mouse Wins";
  target.style.color = "#ffffff"; /* white font winner*/
  // qrreter le jeu - gqme over
  document.removeEventListener("keydown", moveCube);
  target.removeEventListener("click", shoot);
  clearTimeout(timeOut);
}
