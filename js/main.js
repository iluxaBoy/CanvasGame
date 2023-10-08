"use strict";
const playerKill = new Audio("audio/explosion.wav");
const shoot = new Audio("audio/shoot.wav");
const alienKill = new Audio("audio/invaderkilled.wav");
playerKill.volume = 0.3;
shoot.volume = 0.3;
alienKill.volume = 0.2;

const canvas = document.querySelector("canvas");
canvas.height = 700;
canvas.width = 600;

const cnt = canvas.getContext("2d");
const rect = canvas.getBoundingClientRect();

const step = 5;

class Entety {
    constructor(x, y, width, height, imgLink) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.imgLink = imgLink;
        this.img = new Image();
        this.frameId = null;
        this.stop = false;
        this.gameOver = false
    };
    stopPrint = () => this.stop = true;

    gameEnd = () => this.gameOver = true;

    loadImg = () => {
        this.img.onload = () => cnt.drawImage(this.img, this.x, this.y, this.width, this.height);
        this.img.src = this.imgLink;
    };
}