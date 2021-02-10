
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImg
var ground,stand
var box,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box14,box15,box16
var polygon
var slingshot
var score=0
var bg

function preload()
{
  backgroundImg = loadImage("bg.png");

  findTime()
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stand = new Ground(1210,642,300,30)
ground= new Ground(800,750,1600,30)
polygon = new Polygon(50,200,50)
slingshot = new Slingshot(polygon.body,{x:200,y:500});

box= new Box(1105,605,30,40)
box2= new Box(1135,605,30,40)
box3= new Box(1165,605,30,40)
box4= new Box(1195,605,30,40)
box5= new Box(1225,605,30,40)
box6= new Box(1255,605,30,40)
box7= new Box(1285,605,30,40)
box8= new Box(1250,565,30,40)
box9= new Box(1160,565,30,40)
box10= new Box(1190,565,30,40)
box11= new Box(1220,565,30,40)
box12= new Box(1130,565,30,40)
box13= new Box(1160,525,30,40)
box14= new Box(1190,525,30,40)
box15= new Box(1220,525,30,40)
box16= new Box(1190,485,30,40)

	Engine.run(engine);
  
}


function draw() {
  if( background(backgroundImg))


  rectMode(CENTER);
  
  
text("score:"+score,750,40)
box.Score()
  box2.Score()
  box3.Score()
  box4.Score() 
  box5.Score() 
  box6.Score()
  box7.Score()
  box8.Score()
  box9.Score()
  box10.Score()
  box11.Score()
  box12.Score()
  box13.Score()
  box14.Score()
  box15.Score()
  box16.Score()

  stand.display()
  ground.display()
  polygon.display()
  slingshot.display()

  box.display()
  box2.display()
  box3.display()
  box4.display() 
  box5.display() 
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
 
  drawSprites();
 
}

function mouseDragged(){
  
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingshot.fly();
  
}

function keyPressed(){
  if(keyCode===32){
  slingshot.attach(polygon.body)
  }
  }

  async function findTime(){
    var response=await fetch ("http://worldtimeapi.org/api/timezone/Europe/London")
    var format=await response.json()
    console.log(format)
    
    var dt=format.datetime
    console.log(dt)
    
    var hour=dt.slice(11,13)
    console.log(hour)
    
    
    if(hour>7&&hour<13){
        bg="bg.png"
    }
    else{
        bg="bg2.jpg"
    }
    backgroundImg=loadImage(bg)
    
    }