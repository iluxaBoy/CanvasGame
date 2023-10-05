"use strict";
class Alien extends Entety {
    moveAlien = () => { this.y += step };
    alienPrintMove = () => {
        if (this.gameOver) {
            cnt.clearRect(0, 0, canvas.width, canvas.height);
            cancelAnimationFrame(this.frameId);
            this.frameId = null;

            return;
        }

        if (this.stop) {
            cnt.clearRect(this.x, this.y - 5, this.width, this.height + 5);

            this.y = randomPositionY();
            this.x = randomPositionX();

            this.stop = false;
            return;
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
const amountOfAliens = 8;

let alienArr = [];

const randomPositionX = () => {
    return Math.floor(Math.random() * canvas.width - 25);
};

const randomPositionY = () => {
    return Math.floor(Math.random() * -350);
};

for (let i = 0; i < amountOfAliens; i++) {
    alienArr.push(new Alien(randomPositionX(), randomPositionY(), 45, 35, "img/alien.png"));

    alienArr[i].loadImg();

    setInterval(() => {
        if (alienArr[i].frameId) { return; }
        alienArr[i].alienPrintMove()
    }, 500);
}
