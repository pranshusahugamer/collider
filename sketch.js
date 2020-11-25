var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600,100,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
}

function draw() {
  background(0,0,0);  
  movingRect.velocityY=-5;
  fixedRect.velocityY=5;
  bounceOff(movingRect,fixedRect);
  drawSprites();
}