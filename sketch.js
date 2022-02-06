var box;
var edges;


function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,50,50);
  edges = createEdgeSprites();
}

function draw() 
{
  background(30);

  box.collide(edges);

  if (keyDown(LEFT_ARROW)){
    box.x = box.x - 5
  }

  if (keyDown(RIGHT_ARROW)){
    box.x = box.x + 5
  }

  if (keyDown(UP_ARROW)){
    box.y = box.y - 5
  }

  if (keyDown(DOWN_ARROW)){
    box.y = box.y + 5
  }


  drawSprites();
}




