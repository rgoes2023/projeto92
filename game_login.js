function adduser() {
player1Name = document.getElementById("box1").value;
player2Name = document.getElementById("box2").value;

localStorage.setItem("player1_name", player1_name);
localStorage.setItem("player2_name", player2_name);

window.location = "game_page.html";
}
