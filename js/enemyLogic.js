"use strict";

//Aliens funs made in class because i decided to make an array of aliens so i can track specific alien and his location
class Alien extends Entety {
    moveAlien = () => { this.y += step };
    alienPrintMove = () => {
        if (player.gameOver) {
            cnt.clearRect(0, 0, canvas.width, canvas.height);

            cancelAnimationFrame(this.frameId);
            this.frameId = null;

            this.y = randomPositionY();
            this.x = randomPositionX();

            return;
        }

        if (this.stop) {
            cnt.clearRect(this.x, this.y - 5, this.width, this.height + 5);

            this.y = randomPositionY();
            this.x = randomPositionX();

            this.stop = false;
        }

        this.frameId = requestAnimationFrame(() => {
            cnt.clearRect(this.x, this.y - 5, this.width, this.height + 5);

            cnt.drawImage(this.img, this.x, this.y, this.width, this.height);

            this.moveAlien();
            gameOver();
            if (this.y < canvas.height) {
                this.alienPrintMove();
            } else {
                cancelAnimationFrame(this.frameId);
                this.frameId = null;

                cnt.clearRect(this.x, this.y - 5, this.width, this.height + 5);
                this.y = randomPositionY();
                this.x = randomPositionX();
            }
        });
    };
};

const alienImg = new Image();
const amountOfAliens = 0;

let alienArr = [];

//random funs so i can locate alians randomli around the fieald 
const randomPositionX = () => {
    return Math.floor(Math.random() * canvas.width - 25);
};

const randomPositionY = () => {
    return Math.floor(Math.random() * -350);
};
//----

//this fun is creating alliens and adding them to arr
const createAlians = () => {
    for (let i = 0; i < amountOfAliens; i++) {
        alienArr.push(new Alien(randomPositionX(), randomPositionY(), 45, 35, "img/alien.png"));

        alienArr[i].loadImg();

        setInterval(() => {
            if (alienArr[i].frameId) { return; }
            alienArr[i].alienPrintMove()
        }, 500);
    }
};

createAlians();
