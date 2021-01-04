
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Pendulum1,Pendulum2,Pendulum3,Pendulum4,Pendulum5;
var roof1;
var chan1, chain2,chain3,chain4, chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Pendulum1 = new Pendulum(150,500,100);
	Pendulum2 = new Pendulum(250,500,100);
	Pendulum3 = new Pendulum(350,500,100);
	Pendulum4 = new Pendulum(450,500,100);
	Pendulum5 = new Pendulum(550,500,100);

	//roof1 = new Roof(350,100,500);
	
	chain1 = new Rope(Pendulum1.body , {x:150, y:100});
	chain2 = new Rope(Pendulum2.body , {x:250, y:100});
	chain3 = new Rope(Pendulum3.body , {x:350, y:100});
	chain4 = new Rope(Pendulum4.body , {x:450, y:100});
	chain5 = new Rope(Pendulum5.body , {x:550, y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Pendulum1.display();
  Pendulum2.display();
  Pendulum3.display();
  Pendulum4.display();
  Pendulum5.display();

  //roof1.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
 // keypressed();

  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(Pendulum1.body, {x: mouseX, y:mouseY});
}

