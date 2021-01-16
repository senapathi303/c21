var obj1,movingb;


function setup() {
  createCanvas(800,400);
  
  obj1 = createSprite(100,200,50,50);
  obj2 = createSprite(200,200,50,50);
  obj3 = createSprite(300,200,50,50);
  obj4 = createSprite(400,200,50,50);

  obj1.shapeColor = "green"
  obj2.shapeColor = "green"
  obj3.shapeColor = "green"
  obj4.shapeColor = "green"
 movingb = createSprite(400, 200, 50, 50);
 movingb.shapeColor = "green";
}

function draw() {
  background(255,255,255);
  movingb.x = World.mouseX;
  movingb.y = World.mouseY;  
  
  if (istouching(movingb,obj1)){
    movingb.shapeColor = "blue"
    obj1.shapeColor = "blue"
  }
  else{
    movingb.shapeColor = "green";
    obj1.shapeColor = "green";
  }
  if (istouching(movingb,obj2)){
    movingb.shapeColor = "blue"
    obj2.shapeColor = "blue"
  }
  else{
    movingb.shapeColor = "green";
    obj2.shapeColor = "green";
  }
  if (istouching(movingb,obj3)){
    movingb.shapeColor = "blue"
    obj3.shapeColor = "blue"
  }
  else{
    movingb.shapeColor = "green";
    obj3.shapeColor = "green";
  }
  if (istouching(movingb,obj4)){
    movingb.shapeColor = "blue"
    obj4.shapeColor = "blue"
  }
  else{
    movingb.shapeColor = "green";
    obj4.shapeColor = "green";
  }


  drawSprites();
}
