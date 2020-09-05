 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies; 
 const Body = Matter.Body;

 var dustbinIMG;

function preload() {
  dustbinIMG = loadImage("dust.png");
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

  ground = new groundclass(600, 580, 1200, 20);
  
	dustbinPart1 = new dustbinclass(900, 550, 175, 20);
	dustbinPart2 = new dustbinclass(820, 460, 20, 200);
  dustbinPart3 = new dustbinclass(980, 460, 20, 200);
  
	paperBall = new paperclass(200, 250, 35);

	Engine.run(engine);
}

function draw() {
  background("cyan");
  
	 ground.display();
	 dustbinPart1.display();
	 dustbinPart2.display();
   dustbinPart3.display();
   
	imageMode(CENTER);
  image(dustbinIMG, 900, 460, 200, 200);
  
	paperBall.display();
  Engine.update(engine);
  
}

function keyPressed() {
  if (keyCode === 38)
   {Matter.Body.applyForce(paperBall.body, paperBall.body.position, 
    {x: 0.2,y: -0.2
    });
	 }
}