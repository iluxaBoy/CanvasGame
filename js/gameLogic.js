"use strict";
let score = 0;

if (localStorage.getItem("score") > 0) {
    score = localStorage.getItem("score");
    scoreHolder.textContent = localStorage.getItem("score");
}

// collides fun is for determining if objects have been colidded or not, to know that you need to transfer objects that are supposed to collide
const collides = (pointA, pointB) => {
    if (pointA.x < pointB.x + pointB.width &&
        pointA.x + pointA.width > pointB.x &&
        pointA.y < pointB.y + pointB.height &&
        pointA.y + pointA.height > pointB.y) { return true; }
};

const gameOver = () => {
    alienArr.forEach(Alien => {
        if (collides(player, Alien)) {
            Alien.gameEnd();
            player.gameEnd();

            cnt.clearRect(0, 0, canvas.width, canvas.height);
        }
    });
};

const kill = () => {
    for (const Alien in alienArr) {
        if (collides(laser, alienArr[Alien])) {
            alienArr[Alien].stopPrint();
            score++
            localStorage.setItem("score", score);
            score = localStorage.getItem("score");
            scoreHolder.textContent = localStorage.getItem("score");
        }
    }
};