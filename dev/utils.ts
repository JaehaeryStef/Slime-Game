class Utils {
    // collide between playone and snotspawn
    public objectsCollide(c1:Playerone, c2:Snotspawn): boolean {
         return (c1.x < c2.x + c2.width && 
                 c1.x + c1.width > c2.x && 
                 c1.y < c2.y + c2.height && 
                 c1.height + c1.y > c2.y);
    }
}