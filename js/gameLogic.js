"use strict";

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
            Alien.stopPrint();
            player.stopPrint();

            cnt.clearRect(0, 0, canvas.width, canvas.height);
        }
    });
};

const kill = () => {
    for (const Alien in alienArr) {
        if (collides(laser, alienArr[Alien])) {
            alienArr[Alien].stopPrint();
        }
    }
};