/// <reference path="playerone.ts" />


class Game {
    
    private score:number = 0;   
   
    private playerone:Playerone;
    
    private snotspawn:Snotspawn;
    
    private utils:Utils;
    
    private timeid:number;
    private numelements:number;
    
    constructor() {
        
        this.numelements = 0;
        this.createElements();
       
        this.playerone = new Playerone(65, 68, 87, 83); // Player game keys
            
        this.utils = new Utils();
            
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    public updateScore(i:number){
        this.score += i; // Score
    }
    
         private createElements():void {
             
         console.log("test");

         this.snotspawn = new Snotspawn(this);
         
     }
    
    private gameLoop(){
        
        console.log(this.snotspawn);
        this.playerone.move();
        
        let hit:boolean = this.utils.objectsCollide(this.playerone, this.snotspawn); 
        // let hittwo:boolean = this.utils.objectsCollidetwee(this.playerone, this.snotspawn);
               
        this.playerone.showHit(hit);
        this.snotspawn.showHit(hit);
               
        //New gameloop request
        requestAnimationFrame(this.gameLoop.bind(this));
     }
     
     public createSnot(){
         console.log("UBERTEST");
         this.snotspawn = new Snotspawn(this);
         
     }
     
} 