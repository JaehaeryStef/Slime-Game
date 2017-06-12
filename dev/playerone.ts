class Playerone {
    
    private div:HTMLElement;
    
    private downkey : number;
    private upkey : number;
    private leftkey : number;
    private rightkey : number;
    
    private leftSpeed : number = 0;
    private rightSpeed : number = 0;
    private downSpeed : number = 0;
    private upSpeed : number = 0;
    
    // Public objects, used if collision hit
    public x : number;
    public y : number;
    public width: number;
    public height: number;
    
    constructor(left:number, right:number, up:number, down:number) {
        // creates div of playerone gif
        this.div = document.createElement("playerone");
        document.body.appendChild(this.div);
        
        // Keys
        this.upkey = up;
        this.downkey = down;
        this.leftkey = left;
        this.rightkey = right;
        
        // Position
        this.x = 500;
        this.y = 800;
        this.width = 180;
        this.height = 145;
        
        // Keyboard listener
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    
    
    // Keyboard movespeed
    private onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
        case this.upkey:
            this.upSpeed = 5;
            break;
        case this.downkey:
            this.downSpeed = 5;
            break;
        case this.leftkey:
            this.leftSpeed = 5;
            break;
        case this.rightkey:
            this.rightSpeed = 5;
            break;
        }
    }
    
    // Speed if release button
    private onKeyUp(event:KeyboardEvent):void {
        switch(event.keyCode){
        case this.upkey:
            this.upSpeed = 0;
            break;
        case this.downkey:
            this.downSpeed = 0;
            break;
        case this.leftkey:
            this.leftSpeed = 0;
            break;
        case this.rightkey:
            this.rightSpeed = 0;
            break;
        }
    }

    
    // Move
    public move() : void {
        
        this.x = this.x - this.leftSpeed + this.rightSpeed;
        this.y = this.y - this.upSpeed + this.downSpeed;
                        
        // de div positie aanpassen met transform - tip: scaleX kan je gebruiken om de andere kant op te kijken
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px) scaleX(-1)";
    }

    // Show hit
    public showHit(hit:boolean) : void {
        if(hit){
            console.log("Hit");
        } else {
            this.div.style.borderColor = "Not hit";
        }
    }
}