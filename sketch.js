const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);

  rope = new Rope(hero.body, { x: 500, y: 50 });

  monster = new Monster(1100+20,550,300);

  box1 = new Box(690, 100, 70, 70);
  box1a = new Box(690, 100+70, 70, 70);
  box1b = new Box(690, 100+70+70, 70, 70);
  box1c = new Box(690, 100+70+70+70, 70, 70);
  box1d = new Box(690, 100+70+70+70+70, 70, 70);
  box1e = new Box(690, 100+70+70+70+70+70+70, 70, 70);

  box2 = new Box(760, 100, 70, 70);
  box2a = new Box(760, 100+70, 70, 70);
  box2b = new Box(760, 100+70+70, 70, 70);
  box2c = new Box(760, 100+70+70+70, 70, 70);
  box2d = new Box(760, 100+70+70+70+70, 70, 70);
  box2e = new Box(760, 100+70+70+70+70+70+70, 70, 70);


  box3 = new Box(900, 100, 70, 70);
  box3a = new Box(900, 100+70, 70, 70);
  box3b = new Box(900, 100+70+70, 70, 70);
  box3c = new Box(900, 100+70+70+70, 70, 70);
  box3d = new Box(900, 100+70+70+70+70, 70, 70);
  box3e = new Box(900, 100+70+70+70+70+70+70, 70, 70);



  box5 = new Box(830, 100, 70, 70);
  box5a = new Box(830, 100+70, 70, 70);
  box5b = new Box(830, 100+70+70, 70, 70);
  box5c = new Box(830, 100+70+70+70, 70, 70);
  box5d = new Box(830, 100+70+70+70+70, 70, 70);
  box5e = new Box(830, 100+70+70+70+70+70+70, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

  box1.display();
  box1a.display();
  box1b.display();
  box1c.display();
  box1d.display();
  box1e.display();

  box2.display();
  box2a.display();
  box2b.display();
  box2c.display();
  box2d.display();
  box2e.display();

  box3.display();
  box3a.display();
  box3b.display();
  box3c.display();
  box3d.display();
  box3e.display();

  box5.display();
  box5a.display();
  box5b.display();
  box5c.display();
  box5d.display();
  box5e.display();

  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
Matter.Body.setPosition(hero.body,{x:mouseX , y:mouseY})
}