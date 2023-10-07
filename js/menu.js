"use strict";

// start.onclick = () => {
//     menu.remove();
//     game.style.display = "block";
// };

restart.onclick = () => {
    restartGame();
};

const restartGame = () => {
    player.gameOver = false;
    canvas.style.display = "block";
    infoHolder.className = "";
    text.style.display = "none";
    console.log(player.gameOver);
};
