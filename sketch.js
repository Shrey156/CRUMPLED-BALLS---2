
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3,ground,paperOb;
var dustbinSprite;


function setup() {
	createCanvas(1360,621);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	ground = new Ground();
    dustbin1 = new Dustbin(900,480,150,30);
	dustbin2 = new Dustbin(830,418,30,155);
	dustbin3 = new Dustbin(970,418,30,155);
	paperOb = new Paper();
	dustbinSprite = new Dustbinimage();
	
}
function keyPressed(){

	if(keyCode === UP_ARROW){
	
	Body.applyForce(paperOb.body,paperOb.body.positon,{x:85,y:-85});
	
	}
	
	}

function draw() {
	background(786,89,854);
	Engine.update(engine); 
  
  
  //dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();
  ground.display();
  paperOb.display();
  dustbinSprite.display();
  
 
}





