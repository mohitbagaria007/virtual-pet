//Create variables here
var dog,hdog,foods,foodstock,database,dog1 
function preload() 
{ 
  dog1=loadImage("images/dogImg.png") 
  hdog=loadImage("images/dogImg1.png")
	//load images here
}

function setup() { 
  database= firebase.database();
	createCanvas(800,700); 
  dog= createSprite(400,350,100,100);
   dog.addImage(dog1); 
   foodstock = database.ref('food').on("value",readstock)

  
}


function draw() {  
  background(46,130,74)
  if (keyDown("up")){ 
    writeStock(foods) 
    dog.addImage(hdog)
  }
  drawSprites();
  //add styles here
text("Food Remaing"+foods,150,200)
} 

function readstock (data){ 
  foods = data.val()
}
function writeStock (x) { 
  if (x<=0){ 
    x=0
  } 
  else { 
    x=x-1
  } 
  database.ref('/').update({
    food:x
  })
}


