const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snowObj=[]
var snowBackground;
var walk,walkImg;
var gameState;

function preload(){

walkImg = loadAnimation("walk1.png","walk2.png","walk3.png","walk4.png");
snowBackground = loadImage("snow1.jpg");
walkWalk = loadAnimation("walk1.png");
  
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  gameState = "play";
  
  walk = createSprite(200,200,30,30); 
  walk.addAnimation("walking", walkImg);
  walk.addAnimation(walkWalk);
  
  //snowObj = new snow(-30);
}

function draw() {
  background(snowBackground);
  Engine.update(engine);  
  
  //if(gameState === "play"){
    if(frameCount % 50 === 0){  
      snowObj.push(new snow(-30))
    }
  //}

  for (var f = 0; f < snowObj.length; f = f+1) {
    snowObj[f].display();
  }
  
  if(keyCode === 32){
    walk.changeAnimation( "walking");
  } 
 
  drawSprites();
}

