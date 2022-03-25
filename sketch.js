var bg,bgImg;
var player, shooterImg, shooter_shooting;
var isMobile;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");

  bgImg = loadImage("assets/bg.jpeg");

}

function setup() {

//tamaños de canvas
  isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(isMobile){
    canW = displayWidth; 
    canH = displayHeight; 
    createCanvas(displayWidth+80, displayHeight);    
  } 
  else {
    canW = windowWidth; 
    canH = windowHeight; 
    createCanvas(windowWidth, windowHeight);
  }
  
 //creando sprite invisible
 arriba = createSprite(220, 348, 50,5);
 arriba.debug = false;
 // arriba.visible = false;
 
 abajo = createSprite(displayWidth-1150, 648, 50,5);
 abajo.debug = false;
 // abajo.visible = false;
 
 //creando el sprite del jugador 
 player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(shooterImg)
    player.scale = 0.3
    player.debug = true
    player.setCollider("rectangle",0,0,300,230);

}

function draw() {
  background(0); 
  image(bgImg,0,0,displayWidth+80,displayHeight);  
  imageMode(CENTER);




  //mover al jugador hacia arriba y hacia abajo y hacer que el juego sea compatible con dispositivos móviles usando toques
if(keyDown("UP_ARROW") || player.collide(abajo)){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW") || player.collide(arriba)){
 player.y = player.y+30
}


//libera balas y cambia la imagen del tirador a la posición de disparo cuando se presiona el espacio
if(keyWentDown("space")){
  player.addImage(shooter_shooting); 
}

//el jugador vuelve a la imagen de pie original una vez que dejamos de presionar la barra espaciadora
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}


if(isMobile){
  arriba.x = 70;
  arriba.y = 248;

  abajo.x = 70;
  abajo.y = 483;

  player.x = 70;
  //player.y = 348;
  player.scale = 0.2;
  if(player.y < 468 && keyDown("DOWN_ARROW")){//abajo
    // player.x = 70;
    player.y = 483;
    player.y = player.y-15
  } 
  if(player.y > 248 && keyDown("UP_ARROW")){//arriba
    // player.x = 70;
    player.y = 248;
    player.y = player.y+15  
    
  }
  console.log(player.y) 
}

drawSprites();

}
