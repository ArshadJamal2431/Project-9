var box
function setup() {
  createCanvas(400,400);
  box = createSprite(200, 200, 30, 30);
}

function draw() 
{
  background("violet");
  if (keyIsDown(UP_ARROW)) {
  box.position.y = box.position.y-5
  background("indigo");
  }

  if(keyIsDown(DOWN_ARROW)) {
    box.position.y = box.position.y+5
    background("green");
  }

  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x+5
    background("teal");
  }

  if(keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x-5
    background("pink");
  }

drawSprites();

}