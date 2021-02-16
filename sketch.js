

function preload(){
cubertImg = loadImage("images/cubert.png")
}
function setup(){
    createCanvas(displayWidth-4,displayHeight-83)

    cubert = createSprite(displayWidth%2+70,displayHeight%2+400)
    cubert.addImage(cubertImg)
    cubert.scale = 0.2


}

function draw() {
    background("Black")

    laser()

    if (keyDown("left")) {
      cubert.x = cubert.x-10;    
}
    if (keyDown("right")) {
        cubert.x = cubert.x+10;
}
    if (keyDown("up")) {
        cubert.y = cubert.y-10;
}
    if (keyDown("down")) {
        cubert.y = cubert.y+10;
}

    drawSprites()
} 

function laser(){
  if (frameCount %100 === 0){
    var laser1 = createSprite(displayWidth-20,random(displayHeight-50,displayHeight-100),10,displayHeight-260)
    laser1.velocityX = -3
    laser1.shapeColor = "red"

    var laserTop = createSprite(displayWidth-20,random(10,80),10,displayHeight-260)
    laserTop.velocityX = -3
    laserTop.shapeColor = "yellow"

  
  }
  if(frameCount %250 === 0){
    //var laser2 = createSprite(displayWidth%2-200,random(displayHeight-250,displayHeight-300,7,displayHeight-280))
    var laser2 = createSprite(random(500,800),random(1000),200,10)
    laser2.velocityX = -2
    laser2.shapeColor = "orange"

    var laserFalling = createSprite(random(500,1000),random(1000),10,200)
    laserFalling.velocityY = +2
    laserFalling.shapeColor = "green"

  }
}
