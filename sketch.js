var garden,rabbit;
var gardenImg,rabbitImg;
var apple;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImage = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);

 
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

if (frameCount%80===0)
  {

apple=createSprite(random(50,350),1000,10,10)
  apple.addImage("apple",appleImage);
  apple.scale=0.1;
  apple.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1

}

if (frameCount%70===0)
{


leaf=createSprite(random(50,350),1000,10,10)
leaf.addImage("leaf",leafImage)
leaf.scale=0.1;
leaf.velocityY=4;
leaf.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1
}


var rand=Math.round(random(50,350))
console.log(frameCount)
}


function draw() {
  

  if (rabbit.isTouching( apple))
  {
    apple.destroy();
   
  }
  if (rabbit.isTouching( leaf))
  {
    leaf.destroy();
  }
 
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX
  createApple();
  createLeaf();
  drawSprites();

  

}

function createApple()
{
  if (frameCount%80===0)
  {

  
  apple=createSprite(random(50,350),40,10,10)
  apple.addImage("apple",appleImage);
  apple.scale=0.1;
  apple.velocityY=5;
  apple.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1

}
}

function createLeaf()
{


if (frameCount%70===0)
{


leaf=createSprite(random(50,350),40,10,10)
leaf.addImage("leaf",leafImage)
leaf.scale=0.1;
leaf.velocityY=4;
leaf.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1
}
}

  