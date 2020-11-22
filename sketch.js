var helicopterIMG, helicopterSprite, 
var packageBody, ground, packageSprite, packageIMG;
var packagelandbox1, packagelandbox2, packagelandbox3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	packagelandbox1 = createSprite(618, 385, 50, 50);
	packagelandbox1.shapeColor=color("red");

	packagelandbox2 = createSprite(625, 385, 50, 50);
	packagelandbox2.shapeColor=color("red");

	packagelandbox3 = createSprite(605, 385, 50, 50)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);  
}

function draw() 
{

  rectMode(CENTER);

  background(0);

  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 
  
  drawSprites();
}

function keyPressed() {
 if (packageSprite === DOWN_ARROW) {
   packageSprite.x = packageBody.position.x;
   packageSprite.y = packageBody.position.y;    
  }
}