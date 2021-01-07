const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

let Divison = [];
var Plinko = [];
var Particles = [];

var DivisonHeight = 300;

var margin1,margin2,margin3,margin4;

function setup() {
  createCanvas(487,windowHeight);
  
  engine = Engine.create();
  world = engine.world;
  
  for(var i = 10; i <= width; i = i+77.6){
    Divison.push(new Divisons(i,DivisonHeight*1.9,10,DivisonHeight));
  }
  
  margin1 = new Ground(245,3,490,7);
  margin2 = new Ground(3,362,7,724);
  margin3 = new Ground(245,719,724,7);
  margin4 = new Ground(484,362,7,724);

  ground = new Ground(243.9,711,472.7,10);

  for(var a = 60; a <= width-50; a=a+50){
    Plinko.push(new Plinkos(a,70));
  }

  for(var b = 35; b <= width-35; b=b+50){
    Plinko.push(new Plinkos(b,140));
  }

  for(var c = 60; c <= width-50; c=c+50){
    Plinko.push(new Plinkos(c,210));
  }

  for(var d = 35; d <= width-35; d=d+50){
    Plinko.push(new Plinkos(d,280));
  }

  for(var e = 60; e <= width-50; e=e+50){
    Plinko.push(new Plinkos(e,350));
  }

}

function draw() {
  background(0);
  Engine.update(engine);

  if(frameCount%30 === 0){
    var p = new particles(random(240,250),30);
    Particles.push(p);
  }

  for(var i = 0; i < Divison.length; i++){
    Divison[i].display();
  }

  
  margin1.display("brown");
  margin2.display("brown");
  margin3.display("brown");
  margin4.display("brown");

  ground.display("White");

  for(var i = 0; i < Plinko.length; i++){
    Plinko[i].display();
  }

  /*for(var b = 0; b <= Plinko.length; b++){
    plinko[b].Display();
  }

  /*for(var c = 0; c <= Plinko.length; c++){
    Plinko[c].display();
  }

  for(var d = 0; d <= Plinko.length; d++){
    Plinko[d].display();
  }*/

  
  
  for(var m = 0; m < Particles.length; m++){
    Particles[m].display();
  }
  

  drawSprites();
}