
// Função que busca as imagens no github apenas pelo nome
function PegaImagem(a){
  //deprecated github e mudamos para o s3
  return 'https://raw.githubusercontent.com/fabiojavaroni/imagens/master/'+a+'.png';
 // return 'https://codigosinventor.s3-sa-east-1.amazonaws.com/imagens/'+a+'.png'
  

}


// Função para arrastar o Sprite de forma rápida (O sprite esta seguindo a posição X e Y do mouse)
function arrastarRapido(nome) {
  nome.position.x = mouseX;
  nome.position.y = mouseY;
}

// Função para arrastar o Sprite de forma lenta (Está sendo alterada a velocidade do sprite nos eixos X e Y)
function arrastarLento(nome) {
    nome.velocity.x = (mouseX-nome.position.x)/10;
    nome.velocity.y = (mouseY-nome.position.y)/10;;
}


// Tradução das funções
function criaCanvas(){
        createCanvas(550,550);
}
function naoRepetir(){
      	noLoop();
}
function tamanhoLinha(){
        strokeWeight(2);
}

function elipse(...args) {
	return ellipse(...args);
}

function retangulo(...args) {
	return rect(...args);
}
function circulo(...args) {
	return circle(...args);
}
function quadrado(...args) {
	return square(...args);
}
function triangulo(...args) {
	return triangle(...args);
}
function arco(...args) {
	return arc(...args);
}

function corDeFundo(...args){
  	background(...args);
}

function carregaAnimacao(...args){
  return loadAnimation(...args);
}
function animacao(...args){
  return animation(...args);
}
function configura(...args){
  return setup(...args);
}
function mudaFrame(...args){
  return changeFrame (...args);
}
function clona(...args){
  return clone(...args);
}
function desenhar(...args){
  return draw(...args);
}
function pegaFrame(...args){
  return getFrame(...args);
}
function pegaFrameImagem(...args){
  return getFrameImage(...args);
}
function pegaAltura(...args){
  return getHeight(...args);
}
function pegaImagemEm(...args){
  return getImageAt(...args);
}
function pegaUltimoFrame(...args){
  return getLastFrame(...args);
}
function pegaLargura(...args){
  return getWidth(...args);
}
function vaParaFrame(...args){
  return goToFrame(...args);
}
function proximoFrame(...args){
  return nextFrame(...args);
}
function frameAnterior(...args){
  return previousFrame(...args);
}
function recomecar(...args){
  return rewind(...args);
}
function parar(...args){
  return stop(...args);
}
function criaSprite(...args){
  return createSprite(...args);
}
function desenhaSprite(...args){
  return drawSprite(...args);
}
function desenhaSprites(...args){
  return drawSprites(...args);
}
function pegaSprites(...args){
  return getSprites(...args);
}
function teclaApertada(...args){
  return keyDown(...args);
}
function tecladFoiApertada(...args){
  return keyWentDown(...args);
}
function teclaFoiSolta(...args){
  return keyWentUp(...args);
}
function carregaListaSprites(...args){
  return loadSpriteSheet(...args);
}
function apertouBotaoMouse(...args){
  return mouseDown(...args);
}
function soltouBotaoMouse(...args){
  return mouseUp(...args);
}
function mouseFoiApertado(...args){
  return mouseWentDown(...args);
}
function mouseFoiSolto(...args){
  return mouseWentUp(...args);
}
function atualizaSprites(...args){
  return updateSprites (...args);
}
function adicionaAnimacao(nome,grupo,imagem1,imagem2){
  return nome.addAnimation(grupo,imagem1,imagem2);
}
function adicionaImagem(...args){
  return addImage(...args);
}
function adicionaVelocidade(...args){
  return addSpeed(...args);
}
function adicionaAoGrupo(...args){
  return addToGroup(...args);
}
function vaPara(nome,velocidade,x,y){
  nome.attractionPoint(velocidade,x,y);
}
function pulo(...args){
  return bounce(...args);
}

function mudaAnimacao(...args){
  return changeAnimation(...args);
}
function mudaImagem(...args){
  return changeImage(...args);
}

function cor(...args){
  return fill(...args);
}

function tamanhoTexto(...args){
  return textSize(...args);
}

function alinharTexto(...args){
  return textAlign(...args);
}

function texto(...args){
  return text(...args);
}

function tamanhoDaBorda(...args){
  return strokeWeight(...args);
}

/*function borda(...args){
  return stroket(...args);
}*/

function borda(...args){
  return stroke(...args);
}

// Controlar o Sprite com as teclas do teclado
function setasTeclado(nome, v) {
  if (keyCode == RIGHT_ARROW) {
    nome.setSpeed(v, 0);
  }
  else if (keyCode == DOWN_ARROW) {
    nome.setSpeed(v, 90);
  }
  else if (keyCode == LEFT_ARROW) {
    nome.setSpeed(v, 180);
  }
  else if (keyCode == UP_ARROW) {
    nome.setSpeed(v, 270);
   }
  return false;
}

// Controlar o Sprite com as teclas do teclado somente para a esquerda e direita
function esquerdaEdireita(nome, v) {
    if (keyDown(RIGHT_ARROW) && nome.position.x < (width - (nome.width / 2))) {
      nome.position.x += v;
    }
    if (keyDown(LEFT_ARROW) && nome.position.x > (nome.width / 2)) {
      nome.position.x -= v;
    }
}

function posicionar(nome, x, y){
  nome.position.x = x;
  nome.position.y = y;
}

function mudeYpor(nome, j) {
  nome.position.y = nome.position.y + j;  
}

function mudeXpor(nome, j) {
  nome.position.x = nome.position.x + j;  
}

function mudeYpara(nome, j) {
  nome.position.y = j;  
}

function mudeXpara(nome, j) {
  nome.position.x = j;  
}

function aponteParaDireção(nome, j) {
  nome.rotation = j;
}

function girando(nome, j) {
  nome.rotation += j;
}

function velocidadeGirar(nome, j) {
  nome.rotationSpeed = j;
}

function posiçãoX(nome) {
  return nome.position.x;
}

function posiçãoY(nome) {
  return nome.position.y;
}

function encostando(nome1, nome2, função) {
  return nome1.overlap(nome2,função)  
}

function removerSprite(nome) {
  nome.remove();
}

function balançar(nome) {
  nome.mouseActive = true;
  if (nome.mouseIsOver){
    nome.rotation = random(-20, 20);
  } else {
    nome.rotation = 0
  }
}

//modificaoes leo

let noise;
let fft;
let filter, filterFreq, filterWidth;

function corDoSom(color){
  //createCanvas(710, 256);
    cor(color);
  //fill(255, 40, 255);

  filter = new p5.BandPass();

  noise = new p5.Noise();

  noise.disconnect(); // Disconnect soundfile from master output...
  filter.process(noise); // ...and connect to filter so we'll only hear BandPass.
  noise.start();

  fft = new p5.FFT();
  
}

function mostraSom() {
  //background(30);

  // Map mouseX to a bandpass freq from the FFT spectrum range: 10Hz - 22050Hz
  filterFreq = map(mouseX, 0, width, 10, 22050);
  // Map mouseY to resonance/width
  filterWidth = map(mouseY, 0, height, 0, 90);
  // set filter parameters
  filter.set(filterFreq, filterWidth);

  // Draw every value in the FFT spectrum analysis where
  // x = lowest (10Hz) to highest (22050Hz) frequencies,
  // h = energy / amplitude at that frequency
  let spectrum = fft.analyze();
  noStroke();
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h);
  }
}

  function mudeVelocidadePara(nome,velocidade,direcao) {
    nome.setSpeed(velocidade, direcao);
  } 

function mudeVelocidadeX(nome,velocidade) {
  nome.velocity.x = velocidade;
} 

function mudeVelocidadeY(nome,velocidade) {
  nome.velocity.y = velocidade;
} 


/*
function pontoDeAtração(nome,f,pontoX,pontoY){
  nome.attractionPoint(f, pontoX, pontoY);
}
*/
function velocidadeMaxima(nome,velocidade){
  nome.maxSpeed = velocidade;
}

function colidir(nome,objeto){
  nome.collide(objeto);
}

function paredes(q){
  //	walls = new Group();
	for (var i = 0; i < 7; i++){
		var skipY = Math.floor(random(0,7));
		//console.log(skipY);
		for (var j = 0; j < 7; j++){
			if (j === skipY){
				continue;
			}
			var wall = createSprite(width/8 + (width/8 * i),height/14 + (height/7 * j), 30, 100);
			wall.shapeColor = color(255 * i/7,50,50);
			q.add(wall);
		}
	}
}

function aleatorio(...args){
  return random(...args);
}
  //sorteiaInsetos vira chamaGrupo
  function chamaGrupo(j, q) {
    for(var i = 0; i<j; i++) {
        var coin = createSprite(random(100, width-100), random(100, height-100));
        coin.addAnimation("adiciona",PegaImagem('inseto1'));
        coin.addToGroup(q);
          }
  }

function empurrar(sprite,sprite2){
  sprite.displace(sprite2);
}

function limiteVelocidade(nome,velocidade){
  nome.limitSpeed(velocidade);
}

function chuvaAbelhas(){
  frameRate(30)
 Abelha = new Group();
for (var i = 0; i < numAbelhas; i++) {
 var b = createSprite(random(0, width), random(-800, 0));
 b.addImage(
   loadImage(
     "https://raw.githubusercontent.com/fabiojavaroni/imagens/master/abelha.png"
   )
 );
 Abelha.add(b);
}
}

function adicionarMao(){
 mao = createSprite(200, 200);
 mao.addImage(
   loadImage(
     "https://raw.githubusercontent.com/fabiojavaroni/imagens/master/mao.png"
   )
 );
}

function explosaoAbelhas(){
 explosao = createSprite(-50, -50);
 explosao.addImage(
   loadImage(
     "https://raw.githubusercontent.com/fabiojavaroni/imagens/master/explosao.png"
   )
 );
}

function Abelhas(){
 textSize(50);
 mao.position.x = mouseX;
 mao.position.y = mouseY;

 for (var j = 0; j < numAbelhas; j++) {    
     
   Abelha[j].velocity.y = random(1, 25);

   if (mao.overlap(Abelha[j]) && mouseIsPressed) {
     
     explosao.position.x = Abelha[j].position.x;
     explosao.position.y = Abelha[j].position.y;
    
     Abelha[j].position.x = -50;
     Abelha[j].position.y = -50;
     
     Abelha[j].visibility = false;
     
     placar++;
   } else {
   }
   
   if (Abelha[j].position.y > height) {
     Abelha[j].position.y = random(-500, 0);      
   }
 }

  if ( placar >= numAbelhas) {
       text("Você Venceu!!!",110,height/2);
       noLoop();   
  }

 drawSprites();
}

function falar(texto){
  var foo = new p5.Speech(); // speech synthesis object
  foo.speak(texto); // say something

}

function mouseFoiPressionado(){
  return mouseIsPressed;
}

function textoFonte(...args){
 return textFont(...args);
}

function limparTela(...args) {
	return clear(...args);
}

//code weslley

function Cobrinha(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  
  this.eat = (pos) => {
    let d = dist(this.x, this.y, pos.x, pos.y);
    
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  this.dir = (x, y) => {
    this.xspeed = x;
    this.yspeed = y;
  }
  
  this.morre = () => {
    for (let i = 0; i < this.tail.length; i++) {
      let pos = this.tail[i],
          d = dist(this.x, this.y, pos.x, pos.y);
      
      if (d < 1) {
        this.total = 0;
        this.tail = [];
      }
    }
  }
  
  this.atualiza = () => {
    if (this.total === this.tail.length) {
      for (let i = 0; i < this.tail.length-1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
        
    this.tail[this.total-1] = createVector(this.x, this.y);
    
    this.x = this.x + this.xspeed * tamanho;
    this.y = this.y + this.yspeed * tamanho;
    
    this.x = constrain(this.x, 0, width - tamanho);
    this.y = constrain(this.y, 0, width - tamanho);
  }
  
  this.mostra = () => {
    fill(0,255,0);  
    
    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, tamanho, tamanho);
    }
      
    rect(this.x, this.y, tamanho, tamanho);
  }
}
/*
function keyPressed() {
  (keyCode === UP_ARROW) && snake.dir(0, -1);
  (keyCode === DOWN_ARROW) && snake.dir(0, 1);
  (keyCode === RIGHT_ARROW) && snake.dir(1, 0);
  (keyCode === LEFT_ARROW) && snake.dir(-1, 0);
}
*/
function navegarVetor(nome) {
  (keyCode === UP_ARROW) && nome.dir(0, -1);
  (keyCode === DOWN_ARROW) && nome.dir(0, 1);
  (keyCode === RIGHT_ARROW) && nome.dir(1, 0);
  (keyCode === LEFT_ARROW) && nome.dir(-1, 0);
}
/*
function localizacao() {
  let cols = floor(width/scl),
      rows = floor(height/scl);
  
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}
*/

//nao funciona :/
function esconder(nome){
  return nome.visible;

}

function arredondar(...args){
  return round(...args);
}

function caixaDeTexto(texto){
  return createInput(texto);
}

function resposta(nome,entrada){
  nome.input(entrada);
}

function pararArrastar(nome) {
  nome.position.x = nome.position.x;
  nome.position.y = nome.position.y;
}
 
var habilita = null;

function arrastarEsoltar(nome){

  nome.onMousePressed = function(){
    habilita = true;
    }
    nome.onMouseReleased = function(){
      habilita = false;
    }
    if(habilita == true){
      arrastar(nome);
    }
    if(habilita == false){
    pararArrastar(nome);
    }
  
}

function podegirar(nome){
  nome.rotateToDirection = true
}
function naoPodegirar(nome){
  nome.rotateToDirection = false
}

function valor(texto){
  return texto.value();
}

function SeTocarNaBordaVolte() {
  for(var i=0; i<allSprites.length; i++) {
    var s = allSprites[i];
    if(s.position.x<0) {
      s.position.x = 1;
      s.velocity.x = abs(s.velocity.x);
    }

    if(s.position.x>width) {
      s.position.x = width-1;
      s.velocity.x = -abs(s.velocity.x);
    }

    if(s.position.y<0) {
      s.position.y = 1;
      s.velocity.y = abs(s.velocity.y);
    }

    if(s.position.y>height) {
      s.position.y = height-1;
      s.velocity.y = -abs(s.velocity.y);
    }

}
}

function mudeTamanhoPara(nome, j) {
    nome.scale = j/100;  
  }
  
  
  function mudeTamanhoPor(nome, j) {
    nome.scale = nome.scale + j/100;  
  }

function mouseAtivado(nome){
    nome.mouseActive = true;
  }

  
function mouseDesativado(nome){
    nome.mouseActive = false;
  }

  function distancia(...args){
    return dist(...args);
  }

  function esperar(...args){
    return setInterval(...args);
  }

  function encostandoNoMouse(nome1, função) {
    return nome1.overlapPoint(mouseX, mouseY, função)  
  }
  
  function encostandoNoPonto(x, y, função) {
    return nome1.overlapPoint(x, y, função)  
  }

  function removerEm(nome, t) {
    return   nome.life = t  
  }