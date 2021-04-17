
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var g1
var p1
var side1
var side2


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	g1 = new ground(400, 680, 800, 20)
	p1 = new paper(100, 660, 30)

	side1 = createSprite(570, 640, 15, 100)
	side2 = createSprite(680, 640, 15, 100)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  g1.display()
  p1.display()
  drawSprites();
 
}

function KeyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(p1.body, p1.body.position, {x: 10, y: -10})
	}
}



