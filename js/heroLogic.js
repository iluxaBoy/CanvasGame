"use strict";
const shoot = new Audio("audio/shoot.wav");
// shoot.volume = 1;
class Player extends Entety {
    moveRight = () => { player.x += step };
    moveLeft = () => { player.x -= step };
}

const player = new Player(275, 665, 45, 35, "img/player.png");

class Laser extends Entety {
    laserMove = () => { this.y -= step };
}

const centerForLaser = 21;//const so laser allways center to player
const laser = new Laser(player.x + centerForLaser, player.y, 4, 11, "img/laser.png");

// Load img
player.loadImg();

laser.loadImg();
//----

// Print movement of player 
const printMove = (e) => {
    player.frameId = requestAnimationFrame(() => {
        printMove(e);
    });

    switch (e.code) {
        case "ArrowRight":
            player.moveRight();
            break;

        case "ArrowLeft":
            player.moveLeft();
            break;
    }
    borderTeleport();
    cnt.clearRect(player.x - 10, player.y, player.width + 20, player.height);

    cnt.drawImage(player.img, player.x, player.y, player.width, player.height);
};
//----

const shootLaser = (tempX) => {
    laser.frameId = requestAnimationFrame(() => {
        laser.x = tempX
        cnt.clearRect(laser.x, laser.y, 5, 16);
        cnt.drawImage(laser.img, laser.x, laser.y);

        laser.laserMove();
        kill();

        if (laser.y > -10) {
            shootLaser(laser.x);
        } else {
            cancelAnimationFrame(laser.frameId);
            laser.frameId = null;

            cnt.clearRect(laser.x, laser.y, 5, 16);
            laser.y = player.y;
        }
    });
};

document.addEventListener("keydown", (e) => {
    if (player.frameId) { return; }
    if (player.gameOver) { return; }

    if (e.code === "ArrowRight" || e.code === "ArrowLeft") {
        player.frameId = requestAnimationFrame(() => {
            printMove(e);
        });
    }

    if (e.code === "Space") {
        if (!laser.frameId) {
            let tempX = player.x + centerForLaser;
            laser.y = 645;
            laser.frameId = requestAnimationFrame(() => {
                shootLaser(tempX);
            });
            shote.play();
        }
    }
});

document.addEventListener("keyup", (e) => {
    if (e.code === "ArrowRight" || e.code === "ArrowLeft") {
        cancelAnimationFrame(player.frameId);
        player.frameId = null;
    }
});
