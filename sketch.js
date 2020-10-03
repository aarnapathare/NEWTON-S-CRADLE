
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



  bob1 = new Bob(300,250)
  bob2 = new Bob(340,250)
  bob3= new Bob(380,250)
  bob4 = new Bob(420,250)
  bob5 = new Bob(460,250)

var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } });
Engine.run(engine);

roof = new Roof(390,60,300,50)
//rope1= new Rope(bobObject1, roof.body, -20, 0)

rope1 = new Rope(bob1.body, roof.body, -40*2, 0)
rope2 = new Rope(bob2.body, roof.body, -40, 0)
rope3 = new Rope(bob3.body, roof.body, 0, 0)
rope4 = new Rope(bob4.body, roof.body, 40, 0)
rope5 = new Rope(bob5.body, roof.body, 40*2, 0)



Engine.run(engine);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGrey");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


keyPressed();
    drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:85, y:-85})
	}
}


