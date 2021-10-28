const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer1;
var iron, stone, borracha1, borracha2;

var canvasX = 1200, canvasY = 600;
function setup(){
    
    var canvas = createCanvas(canvasX,canvasY);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer1 = new Hammer1(20,100);
    borracha1 = new Borracha(200,100,40);
    borracha2 = new Borracha(500,100,80);
    stone = new Stone(800,100);
    iron = new Iron(1100,100);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    plane.display();
    hammer1.display(); 
    borracha1.display();
    borracha2.display();
    stone.display();
    iron.display();
}