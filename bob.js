class Bob{
    constructor(x,y){
       var options={
           isStatic:true,
           restitution:0.3,
           friction:0,
           density:1.2
       } 
       this.body = Bodies.circle(x, y, 20, options)
       this.Radius = 20
       World.add(world, this.body)

    }
    display(){
push();
fill("pink")
translate(this.body.position.x, this.body.position.y)
        ellipseMode(RADIUS)
    ellipse(0,0,this.Radius, this.Radius)
pop();
    }
}



