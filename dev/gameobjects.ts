class Gameobjects {
    //protected ivp private omdat je met protected wel kan gebruiken anders niet
        // protected gemaakt ipv public alleen gebruiken in gameobjects
    
    public x:number;
    public y:number;
    public width:number;
    public height:number;

    constructor(x:number,y:number,width:number,height:number) {


        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

}
