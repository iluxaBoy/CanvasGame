"use strict";
// Создать игру на canvas, используя для отрисовки requestAnimationFrame
// - страница главного меню с кнопкой старта для запуска игры и подсказками по управлению
// - на полотне герой и фон
// - героем можно управлять(двигать стрелками либо вверх\вниз, либо влево\вправо - выбираете только одну ось)
// - через полотно летят снаряды(рандомное появление за краем полотна и летят в сторону героя)
// - при столкновении с игроком - игра останавливается и воспроизводится звук, с полотна все пропадает, кроме фона
// - при старте - на фоне играет музыка
// - фон на полотне, герой и снаряды это картинки
// - как выглядит герой, снаряды и фон - решаете сами

// ----

// Доп. (не обязательно)
// - стрельба персонажа
// - счетчик очей
// - тепорт с края полотна на противополоный край

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
    };
    stopPrint = () => {
        this.stop = true;
        this.frameId = null;
    };
    loadImg = () => {
        this.img.onload = () => cnt.drawImage(this.img, this.x, this.y, this.width, this.height);
        this.img.src = this.imgLink;
    };
}