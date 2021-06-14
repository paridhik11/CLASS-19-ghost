var tower,towerImg
var door,doorImage,doorGroups
var climber,climberImg,climberGroups
var ghost,ghostImg
var Iblock,IblockGroups

function preload(){
  towerImg=loadImage("tower.png")
doorImage=loadImage("door.png")
  climberImg=loadImage("climber.png")
  ghostImg=loadImage("ghost-standing.png")
}

function setup(){
  createCanvas(600,600)
  tower=createSprite(300,300)
  tower.addImage("tower",towerImg)
  tower.velocityY=1
  doorGroups=new Group()
  climberGroups=new Group()
  IblockGroups=new Group()
  ghost=createSprite(200,200,50,50)
  ghost.scale=0.3
  ghost.addImage("ghost",ghostImg)
  
}

function draw(){
  background(0)
  if(tower.y>400){
    tower.y=300
  }
  
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3
  }
  
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3
  }
  
  if(keyDown("space")){
    ghost.velocityY=-5
  }
  ghost.velocityY=ghost.velocityY+0.8
  
if(climberGroups.isTouching(ghost)){
  ghost.velocityY=0
}
  if(IblockGroups.isTouching(ghost) || ghost.y>600){
    ghost.destroy();
  }
  spawnDoors();
  drawSprites();
}

function spawnDoors(){
  if (frameCount%240 === 0){
    var door=createSprite(200,-50)
    door.addImage("door",doorImage)
    
    var climber=createSprite(200,10)
    climber.addImage("climber",climberImg)
    
    var Iblock=createSprite(200,15)
    Iblock.width=climber.width
    Iblock.height=2
    
    door.x=Math.round(random(120,400))
    climber.x=door.x
    Iblock=door.x
    
    door.velocityY=1
    climber.velocityY=1
    Iblock.velocityY=1
    
    ghost.depth=door.depth
    ghost.depth+=1
    
    door.lifetime=800
    climber.lifetime=800
    Iblock.lifetime=800
    
    doorGroups.add(door)
    climberGroups.add(climber)
    IblockGroups.add(Iblock)
    Iblock.debug=true
  }
}