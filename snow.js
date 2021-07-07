class snow {
    constructor(y){
        var options = {
            density : 1.2,
            isStatic : false
        }           
        this.x = random(100,700);
        this.y = y;
        this.snow = Bodies.rectangle(this.x,y,30,30,options);
        World.add(world,this.snow);
    }
    display(){
        //var angle = this.snow.angle;
        stroke(0        )
        fill("white");   
        ellipseMode(RADIUS)     
        ellipse(this.snow.position.x,this.snow.position.y,5,5);
       
    }
}