var bullet,wall
var speed,weight,thickness


function setup() {
  createCanvas(1600,400);
  
  bullet=createSprite(50,200,50,10);
  wall=createSprite(1200,200,thickness,height/2)

  speed = random(223, 321)
  weight=random(32,52)
  thickness=random(10,200)

  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  
  
  
  if (hasCollided (bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed /(thickness *thickness *thickness)

  if(damage>10)
  {
     wall.shapeColor="green";
  }


  if(damage<10)
  {
     wall.shapeColor="red";
  }

}
  drawSprites();
}

function hasCollided (lbullet,lwall)
{
bulletRightEdge=lbullet.x +lbullet.width;
wallLeftEdge=lwall.x;

if (bulletRightEdge>=wallLeftEdge)

return true
else
return false;


}
