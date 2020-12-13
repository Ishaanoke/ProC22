const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball;

function setup() {
  createCanvas(800,400);

 engine=Engine.create();
 world=engine.world;

 var ground_option={
   isStatic:true
 }
 ground=Bodies.rectangle(200,390,400,10,ground_option);
 World.add(world,ground);
 var ball_option={
   restitution:1
 }
 ball=Bodies.circle(200,200,30,ball_option);
 World.add(world,ball);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30);
  
}