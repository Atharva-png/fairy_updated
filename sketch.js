var starImg,bgImg;
var star, starBody;
var fairy,fairyMove,fairyVoice
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyMove=loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
	fairyVoice=loadSound("sound/JoyMusic.mp3")
	
	//load animation for fairy here
}

function setup() {
	createCanvas(windowWidth,windowHeight);

	
	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(width-650,height-30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairy=createSprite(width-650,height-300,50,50);
	fairy.addAnimation("fairyMoving",fairyMove);
	fairy.scale=0.2

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
	fairy.debug=false
	fairy.setCollider("circle",1,1,500)

}


function draw() {
  background(bgImg);
  fairyVoice.play();

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

 if(star.isTouching(fairy)) {
	Matter.Body.setStatic(starBody,true);
	
 }
	 	   

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	if(keyCode === LEFT_ARROW){
		fairy.x=fairy.x-60
	}

	if(keyCode === RIGHT_ARROW){
		fairy.x=fairy.x+60
	}
	//writw code to move fairy left and right
	
}
