


function preload(){
  backImage=loadImage("Jungle1.jpg");
 monkeyimg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaimg = loadImage ("pineapple.gif");
  Stoneimg = loadImage ("stone.png");

  
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=2;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  monkey = createSprite (100,315,20,50);
  monkey.addAnimation("run",monkeyimg);
  monkey.scale = 0.3;
  
  
}

function draw() {
  
  background(255);
  if (backgr.x < 100){
      backgr.x = backgr.width/2;
    }
  if(keyDown("space")){
      monkey.velocityY = -2 ;
     // playSound("jump.mp3");
    }
  spawnBannanas();
  drawSprites();
  spawnObstacles();
    
  
}

function spawnBannanas() {
  //write code here to spawn the clouds
  if (World.frameCount % 100 === 0) {
    var bannana = createSprite(600,250,40,10);
    bannana.y = random(100,250);
    bannana.addImage(bananaimg);
    bannana.scale = 0.15;
    bannana.velocityX = -3;
    
     //assign lifetime to the variable
    bannana.lifetime = 134;
    
    //adjust the depth
    bannana.depth = monkey.depth;
    bannana.depth = monkey.depth + 1;
    
    //add each cloud to the group
  }

}
function spawnObstacles() {
  //write code here to spawn the clouds
  if (World.frameCount % 100 === 0) {
    var obstacle = createSprite(400,349,40,10);
    obstacle.addImage(Stoneimg);
    obstacle.scale = 0.15;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 134;
    
    obstacle.depth = monkey.depth;
    obstacle.depth = monkey.depth + 1;
    
    //add each cloud to the group
  }

}

  
