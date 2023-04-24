var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg = loadImage("assets/zombie.png")
  bgImg = loadImage("assets/bg.jpeg")
  balaImg = loadImage("bala.png")

  somFim = loadSound("assets/lose.mp3");
  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
  

//criando o sprite do jogador
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(shooterImg)
  player.scale = 0.3
 
  player.debug = true
  //player.debug = false
  //player.Debug =false
  //Player.debug = true

  //player.Collider("rectagle",0,0,300,300)
  //player.setcollider("rectangle",0,0)
  player.setCollider("rectangle",0,0,300,300)
  //player.Setcollider("rectangle",0,0,300,300)
grupoZombies = new Group();
grupoBala = new Group();
}
var gameState = 0
function draw() {
  background(0); 
  if(player.isTouching(grupoZombies)){
    player.destroy()
    gameState = 1
    
    

  }
  if(grupoBala.isTouching(grupoZombies)){
    grupoZombies.destroyEach();

  }
  if(grupoZombies.isTouching(grupoBala)){
    for(var i=0;i<grupoZombie.length;i++){
      if(zombieGroup[i].isTouching(grupoBala)){
        grupoZombie[i].destroy()
        grupoBala.destroyEach()
      }
    }
  }



  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando touches (toques)
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
  }

  if(keyDown("DOWN_ARROW")||touches.length>0){
  player.y = player.y+30
  }


//libere as balas e mude a imagem do personagem para a posição de tiro quando a tecla espaço for pressionada
  if(keyWentDown("space")){
    bala = createSprite(player.x,player.y-30,20,10)
    player.depth = bala.depth + 2
    bala.velocityX = 20;
    grupoBala.add(bala)
    player.addImage(shooter_shooting)
    bala.addImage(balaImg);
    bala.scale = 0.2

  
    
  
  }

//player goes back to original standing image once we stop pressing the space bar
  else if(keyDown("space")){
  //player.addImage( shooter_shooting )
  //player.addImage()
  player.addImage(shooterImg)
  //player.addImage(shooter_1.png)
  }
  gerarZombies();

drawSprites();
if(gameState == 1){
  textSize(25)
  fill("white");
  text ("Você\n foi\n devorado!", 850, 200)
}

}
function gerarZombies(){
  if(frameCount % 50 == 0){
aleatorio = Math.round(random(0,0));
zombieSprite = createSprite(displayWidth, displayHeight-300, 50, 50);
grupoZombies.add(zombieSprite)
zombieSprite.addImage(zombieImg);
zombieSprite.scale = 0.1
zombieSprite.velocityX = -2
};

}
function gerarBalas(){

}