var bg,bgIMG;
var sun,sunIMG;
var ground,groundIMG;
var ball,planeIMG;
var CreateLog;
var logIMG,logIMG2;
var line;
function preload(){
  bgIMG = loadImage("background.png")
  sunIMG = loadImage("sun.png")
  groundIMG = loadImage("ground.png")
  planeIMG = loadImage("Ball.png")
  logIMG = loadImage("log.png")
  logIMG2 = loadImage("log2.png")
}
function setup() {
    createCanvas(360,640);

    bg = createSprite(200,460)
    bg.addImage(bgIMG)
    bg.scale = 6

    ground = createSprite(145,550)
    ground.addImage(groundIMG)
    ground.scale = 3
    ground.x = ground.width /2;
    ground.velocityX = -6;
        
    sun = createSprite(300,50)
    sun.addImage(sunIMG)
    sun.scale = 0.5

    ball = createSprite(60,280)
    ball.addImage(planeIMG);
    ball.scale = 0.2;
    ball.restitution = 2;

    line = createSprite(170,155,400,2)
    line.shapeColor = "black"
    CreateLog = new Group();
}

function draw() {
  createLog();
  if(keyDown("space") && ball.y >= 159) {
    ball.velocityY = -12;
  }
  ball.velocityY = ball.velocityY + 0.8

  ball.collide(ground)

    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    //console.log(mouseX)
    console.log(mouseY)

  drawSprites();

}
function createLog(){
  if (frameCount % 100 === 0) {
    var log = createSprite(590,490);
    log.x= Math.round(random(50,400));
    log.addImage(logIMG)
    log.velocityX = -2;
    log.scale = 0.3;
    CreateLog.add(log);
    log.debug = true;
  }
}

function createLog2(){
  if (frameCount % 100 === 0) {
    var log1 = createSprite(590,490);
    log1.x= Math.round(random(50,400));
    log1.addImage(logIMG)
    log1.velocityX = -2;
    log1.scale = 0.3;
    CreateLog.add(log1);
  }
}