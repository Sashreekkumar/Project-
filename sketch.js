
//Gameobjects
var particle = null;
var score =0;
var plinko = [];
var divisions = [];
var engine, world;
var divisionHeight = 300;

//Matter and p5s
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//scores and functions
var count;
var turn = 0;
var gameState;
var count = 0 ;

 
function setup(){
var canvas = createCanvas(490,800);
engine = Engine.create();
world = engine.world;
count = 0;

//ground
ground = new Ground(200,790,1200,20);

//divisions
for(var i = 0; i<= 600 ; i = i+80){
divisions.push(new Division(i, 800 - divisionHeight/2, 10,divisionHeight));   
}

//plinko 1
for (var j = 40; j <=480; j=j+50) 
{
plinko.push(new Plinko(j,100,10));
}

//plinko 2
for (var j = 30; j <=480; j=j+50) 
{
plinko.push(new Plinko(j,150,10));
}

//plinko 3
for (var j = 40; j <=480; j=j+50) 
{
plinko.push(new Plinko(j,200,10));
}

//plinko 4
for (var j = 30; j <=480; j=j+50) 
{
plinko.push(new Plinko(j,250,10));
}
}

//function draw
function draw(){
background("black");
Engine.update(engine);

ground.display();

//plinko display
for(var s=0 ; s<plinko.length ; s++ )
plinko[s].display();

//divisions display
for(var j=0 ; j<divisions.length ; j++ ){
divisions[j].display();
}

//particle display and score
if(particle!=null) {
particle.display();

if(particle.body.position.y > 710 )
{ 

//500(1) 
if(particle.body.position.x> 0 && particle.body.position.x < 80) {
score = score+500;  
if(count >= 5) gameState = "end";
}

//500(2) 
if(particle.body.position.x> 400 && particle.body.position.x < 490) {
  score = score+500;  
  if(count >= 5) gameState = "end";
  }

//200
if(particle.body.position.x > 160 && particle.body.position.x < 320) {
score = score+200;  
if(count >= 5) gameState = "end";
}

//300(1)
if(particle.body.position.x < 160 && particle.body.position.x > 80) {
  score = score+300;  
  if(count >= 5) gameState = "end";
  }
 
//300(2)  
if(particle.body.position.x > 320 && particle.body.position.x < 400) {
score = score+300;  
if(count >= 5) gameState = "end";
} 
  
particle = null;
} 
}

// text
text("SCORE:"+score,50,40);
textSize(20);
fill("white")

//gameState Changer
if(count >= 5){
text("GAMEOVER",200,400)
textSize(20);
fill("white")
} 

// lol text again
stroke("white")
stroke(0)
text("500",20,500);
text("300",100,500);
text("200",180,500);   
text("200",260,500);
text("300",340,500);
text("500",420,500);
text(mouseX +"," + mouseY, mouseX, mouseY)
}

//controls
function mousePressed()
{  
if(gameState !== "end" )
{
count = count +1 ;
console.log("Count mouse pressed :" + count);
particle = new Particles(mouseX , 10,10,10);
}
}

