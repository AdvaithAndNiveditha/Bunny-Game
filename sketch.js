const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var backgroundImage;
var melonImage;
var rabbitImage;
var bunny;
var cutButton;

function preload(){
  backgroundImage=loadImage("background.png");
  melonImage=loadImage("melon.png");
  rabbitImage=loadImage("Rabbit-01.png");
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  bunny = createSprite(250,550,90,90);
  bunny.addImage(rabbitImage);
  bunny.scale = 0.25;

  button=createImg("scissors.png");
  button.position(245,25);
  button.size(50,50);
  button.mouseClicked(drop);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
}

function drop()
{
  fruit_con.detach();
  fruit_con=null;
  rope.break();
}

function draw() 
{
  background(51);
  image(backgroundImage,250,350,500,700);
  rope.show();
  image(melonImage,fruit.position.x,fruit.position.y,70,70);
  Engine.update(engine);
  ground.show();
  drawSprites();
  }
