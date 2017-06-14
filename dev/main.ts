/// <reference path="game.ts"/>
/**
 * Je kan hier ook singelton voor gebruiken
 * Je kan dan vanuit elke plek bijvoorbeeld game aanroepen
 * VB.
 * window.addEventListener("load", function() {
    Game.getInstance();
});
 */

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

