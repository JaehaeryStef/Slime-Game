/// <reference path="game.ts"/>

var title: HTMLElement;
var start: HTMLElement;

window.addEventListener("load", function() {

    title = document.createElement("gamename");
    document.body.appendChild(title);

    start = document.createElement("start");
     start.addEventListener("click", function () {

        title.remove();
        start.remove();

        new Game();
    });
    
    document.body.appendChild(start);
});

