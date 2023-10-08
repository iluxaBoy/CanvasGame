"use strict";
const menu = document.getElementById("menu");
const game = document.getElementById("game");

const backMusic = new Audio("audio/spaceinvaders1.mp3");
backMusic.volume = 0.5;

let startGame = false;

start.onclick = () => {
    menu.style.display = "none";
    game.style.display = "flex";
    startGame = true;
    backMusic.play();
};

restart.onclick = () => {
    player.gameOver = false;

    canvas.style.display = "flex";
    infoHolder.className = "";
    text.style.display = "none";

    createAlians();
    player.loadImg();
    laser.loadImg();
};

menuBtn.onclick = () => {
    menu.style.display = "flex";
    game.style.display = "none";
}