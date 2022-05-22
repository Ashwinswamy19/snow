const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var backgroundImg, characterImg, character;
var snow = [];
function preload() {
  backgroundImg = loadImage("snow1.jpg");
  characterImg = loadImage("face.png");
}
  
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  character = createSprite(400, 200, 50, 50);
  character.addImage(characterImg)
  character.scale = 0.1;

  if(frameCount % 100 == 0) {
    for(i = 0; i < 20; i++) {
      snow.push(new Snow(random(10,800), random(10,200)));
    }
  }
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  if(keyDown("W")) {
    character.y = character.y - 10;
  }
  if(keyDown("S")) {
    character.y = character.y+ 10;
  }
  if(keyDown("A")) {
    character.x = character.y- 10;
  }
  if(keyDown("D")) {
    character.x = character.y+ 10;
  }
  
  for(i = 0; i < 20; i++) {
    snow[i].display();
    snow[i].updateY();
  }

  
  

  drawSprites();
}