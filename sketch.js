
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var groundObj;
var leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundObj = new Ground(windowWidth/2, 670, windowWidth, 20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1150,600,20,120);
	
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Matter.Bodies.circle(windowWidth/4, windowHeight/4, 10, ball_options);
	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.show();
  leftSide.show();
  rightSide.show();
  ellipse(ball.position.x,ball.position.y,10);
  
  drawSprites();

  if (keyDown("space")){
	Matter.Body.applyForce(ball, {x: 0, y:0},{x:0, y: -0.05});
  }

  if (keyDown("D")){
	  Matter.Body.applyForce(ball, {x: 0, y:0}, {x:0.05, y:0});
  }
 
}



