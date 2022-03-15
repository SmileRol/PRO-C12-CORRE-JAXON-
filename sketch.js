var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  
  pathImg = loadImage("path.png")
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
 
}

function setup(){
createCanvas(400, 400);

path = createSprite(180,180,10,30);
path.addImage("ground",pathImg);
path.y = path.width /2;
path.velocityY = 65;
path.scale=1.2;

boy = createSprite(200,330, 20,50);
boy.addAnimation("running",boyImg);
boy.scale=0.08;
  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;

  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
