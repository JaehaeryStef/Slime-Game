/// <reference path="playerone.ts" />


class Game {
    
    private score:number = 0;   
    private scoreElement: HTMLElement;
    private time: number = 60;
    private timeCount: number = 0;
    private timeElement: HTMLElement;

    private playerone:Playerone;
    
    private snotspawn:Snotspawn;
    
    private utils:Utils;
    
    private timeid:number;
    private numelements:number;
    
    constructor() {
        
        this.scoreElement = document.createElement("score");
        document.body.appendChild(this.scoreElement);
        this.timeElement = document.createElement("time");
        document.body.appendChild(this.timeElement);
        
        this.numelements = 0;
        this.createElements();
       
        this.playerone = new Playerone(65, 68, 87, 83); // Player game keys
            
        this.utils = new Utils();
            
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    
         private createElements():void {
             
         this.snotspawn = new Snotspawn(this);
         
     }
    
    private gameLoop(){

        this.scoreElement.innerHTML = "Score: " + this.score;
        this.timeCount++;

        if (this.timeCount >= 60) {
            this.time--;
            this.timeCount = 0;
        }

        this.timeElement.innerHTML = "Time: " + this.time;
        
        this.playerone.move();
        
        let hit:boolean = this.utils.objectsCollide(this.playerone, this.snotspawn); 
        
        this.playerone.showHit(hit);
        this.snotspawn.showHit(hit);
               
        //New gameloop request
        requestAnimationFrame(this.gameLoop.bind(this));

        //remove time and player while time is zero
        if (this.time <= 0) {
            this.playerone.div.remove();
            this.timeElement.remove();
        }
        
     }
     
     public createSnot(){
         console.log("Create Snot");
         this.snotspawn = new Snotspawn(this);
         
     }
     
} 