const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles=[];
this.divisions=[]
var plinkos=[];
var divisionHeight=300
function setup() {
  createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;
  ground= new Ground(width/2,700,480,20)
 
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 20; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 40; j <=width-5; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 20; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 40; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

}

function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    
  }
  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
  drawSprites();
}