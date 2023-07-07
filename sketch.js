let board;
let cena = -1;
let currentPlayer = 1;
let posicoesVazias = [];
let quemGanhou;
let language = 1; //pt = 1 en=2
let btn1 = {
      x: 150,
      y: 150,
      width: 100,
      height: 30
}

let btn2 = {
  x: 150,
  y: 180,
  width: 100,
  height: 30
}


let languageBtn1 = {
  x: 150,
  y: 189,
  width: 30,
  height: 30
}

let languageBtn2 = {
  x: 220,
  y: 189,
  width: 30,
  height: 30

}

let animationX = 100
let animationY = 300

function drawButton (btn){
  fill(228,230,242);
  strokeWeight(1.5)
  rect(btn.x, btn.y, btn.width, btn.height,5)
}

function setup() {
  createCanvas(3900,390);
  
 //0 para vazio, 1 para jogada humana e 2 para a do computador
  board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ];

}

//funcao animacao das cenas 1, 2 e 3 
function animation(){
  animationX++;
  animationY--;

  if (animationX > 480){
    animationX = 0
    animationY = 400
  }

  fill(animationY,animationX-200,animationX+100)

 textSize(30)
 text('#', animationX,animationY)
 text('#', animationX -100, -animationY + 200)
 text('#', animationX / 2,animationY / 1.5 + 20)
 text('#', animationX * 1.2,- animationY + 210)
 text('#', animationX - 210,animationY + 10)
 text('#', animationX - 210,animationY + 350)
}

//funcao draw
function draw() {
  let vencedor = verificarResultado();
  

  if (vencedor === 1 ){
    setTimeout(function(){
      cena = 1;
    },100)
  } else if( vencedor === 2){
    setTimeout(function(){
      cena = 2;
    },100)
  }

  if(cena === -1){
    //if(true){
      let x = 200;

      background(228,230,242)
      fill(0);
      textSize(40);
      text('#',x,70)
      fill(animationY,animationX-200,animationX+100)
      animation();
      drawButton(btn1);
      drawButton(languageBtn1);
      drawButton(languageBtn2);

      if(language === 1){
      fill(255,50,0);
      textAlign(CENTER, TOP);
      textSize(20);
      text('INICIAR',x,157);
      text('Pt',x-35,197);
      text('En',x+35,197);
      textSize(17);
      fill(0,0,0);
      text('É o jogo classico da velha, você joga primeiro',x,250)
      text('e é marcado um X, depois, o computador',x,270)
      text('escolhe uma casa vazia aleatoriamente e macra O.',x,290)
      }

      if(language === 2){
        fill(255,50,0);
        textAlign(CENTER, TOP);
        textSize(20);
        text('START',x,157);
        text('Pt',x-35,197);
        text('En',x+35,197);
        textSize(17);
        fill(0,0,0);
        text('Its the classic: Tic-Tac-Toe, you play first ',x,250)
        text('a X is setted up , later, the computer',x,270)
        text('choises a random place to put the O.',x,290)
        }

  }

  if(cena === 0 ){
      background(228);
      fill(135);
      strokeWeight(4)
      line(133,390,133,10);
      line(266,390,266,10);
      line(10,277,390,277);
      line(10,133,390,133);


      for(let linha = 0; linha < 3; linha++){
        for(let coluna = 0; coluna < 3; coluna++){
          let marca = board[linha][coluna]
          let Xposition = linha * 133  ;
          let Yposition = coluna * 133 ;

          if (marca === 1){
            line( Xposition + 20, Yposition + 20, Xposition + 113, Yposition + 113);
            line(Xposition + 113, Yposition + 20, Xposition + 20, Yposition + 113);
          } else 
          if (marca === 2){
            const centerX = Xposition + 61.5;
            const centerY = Yposition + 61.5;
            let radius = 81.5;
            fill(228)
            ellipse(centerX,centerY,radius,radius);
          }
          
        }
      }
  }

  if( cena === 1){
   // if( true){
    let x = 200;

    background(228,230,242)
    fill(228,230,242)
    drawButton(btn1);
    animation();

    if(language === 1){
    fill(255,0,0);
    textAlign(CENTER, TOP);
    textSize(30);
    text('VOCÊ VENCEU!', x,100);
    textSize(20);
    text('DE NOVO',x,158)
    text('Mas foi fácil demais', x,270);
    text('porque o computador estava no aleatório', x,300);
    textSize(17);
    fill(25,100,200);
    text('A fase com IA está em desenvolvimento, aguarde', x,350)
    }

    if(language === 2){
      fill(255,0,0);
      textAlign(CENTER, TOP);
      textSize(30);
      text('YOU WIN!!', x,100);
      textSize(20);
      text('AGAIN',x,158)
      text('It was soo easy', x,270);
      text('the computer was in random mode', x,300);
      textSize(17);
      fill(25,100,200);
      text('The IA version is comming, wait', x,350)
    }

  }

  if(cena === 2){
    //if(true){
    let x = 200;
    background(228,230,242)
    animation();
    drawButton(btn2); 

    
    if(language === 1){
      fill(255,0,0);
      textAlign(CENTER, TOP);
      textSize(30);
      text('VOCÊ PERDEU!', x,100);
      textSize(20);
      text('DE NOVO',x,188); 
      text('Tete mais uma vez', x,150);
      text('O que achou do jogo?', x,310);
      textSize(17);
      fill(25,100,200);
      text('A fase com IA está em desenvolvimento, aguarde', x,350);
      }
    
      if(language === 2){
        fill(255,0,0);
        textAlign(CENTER, TOP);
        textSize(30);
        text('YOU LOSE!', x,100);
        textSize(20);
        text('AGAIN',x,188); 
        text('Tery one more time', x,150);
        text('Are you enjoying ?', x,310);
        textSize(17);
        fill(25,100,200);
        text('The IA version is comming, wait', x,350);
        }
  }

  if(cena === 3){
    let x = 200;

    background(228,230,242)
    animation();
    drawButton(btn2);

    if(language === 1){
    fill(255,0,0);
    textAlign(CENTER, TOP);
    textSize(30);
    text('DEU VELHA !', x,100);
    textSize(20);
    text('DE NOVO',x,188)
    text('Uma vez mais?', x,150);
    textSize(17);
    fill(25,100,200);
    text('A fase com IA está em desenvolvimento, aguarde', x,350);
    }

    if(language === 2){
      fill(255,0,0);
      textAlign(CENTER, TOP);
      textSize(30);
      text('TIE!', x,100);
      textSize(20);
      text('AGAIN',x,188)
      text('One more time?', x,150);
      textSize(17);
      fill(25,100,200);
      text('The IA version is comming, wait', x,350);
      }
  }

}

//funcao mouseclicekd
function mouseClicked(){

  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      let x = i * 132;
      let y = j * 131

          if(mouseX > x && mouseX < x + 132 &&
            mouseY > y && mouseY < y + 131 &&
            currentPlayer === 1 && board[i][j] === 0){
              board[i][j] = 1;
              currentPlayer = 2;

              let ganhou = verificarResultado();
              if(ganhou === null){
                computadorJoga();
              }
             
            }      
    }
  }

  let btn1 = {
    x: 150,
    y: 150,
    width: 100,
    height: 30
  }

    
  let btn2 = {
    x: 150,
    y: 180,
    width: 100,
    height: 30
  }

  
let languageBtn1 = {
  x: 150,
  y: 189,
  width: 30,
  height: 30
}

let languageBtn2 = {
  x: 220,
  y: 189,
  width: 30,
  height: 30

}

  if( cena === -1 ){
    if(mouseX > btn1.x && mouseX < btn1.x + btn1.width &&
    mouseY> btn1.y && mouseY < btn1.y + btn1.height){
      console.log('clicou em iniciar')
      reiniciarJogo();

    }
  }

  if( cena === 1 ){
    if(mouseX > btn1.x && mouseX < btn1.x + btn1.width &&
    mouseY> btn1.y && mouseY < btn1.y + btn1.height){
      console.log('clicou em reiniciar')
      console.log(board)
      reiniciarJogo();
    }
  }

  if( cena === 2 || cena == 3){
    if(mouseX > btn2.x && mouseX < btn2.x + btn2.width &&
    mouseY> btn2.y && mouseY < btn2.y + btn2.height){
      console.log('clicou em reiniciar')
      console.log(board)
      reiniciarJogo();
    }
  }

  if( cena === -1 ){
    if(mouseX > languageBtn1.x && mouseX < languageBtn1.x + languageBtn1.width &&
    mouseY> languageBtn1.y && mouseY < languageBtn1.y + languageBtn1.height){
      language = 1;
    }
  }

  if( cena === -1 ){
    if(mouseX > languageBtn2.x && mouseX < languageBtn2.x + languageBtn2.width &&
    mouseY> languageBtn2.y && mouseY < languageBtn2.y + languageBtn2.height){
      language = 2;
    }
  }
  

}

//computador faz uma lista de quadros vazios, escolhe aleatoriamente e atualiza o espaço do board para 2.
function computadorJoga (vencedor){
  let posicoesVazias = [];


  if(currentPlayer === 2 || vencedor === null){
    for(let a = 0; a < 3; a++){
      for(let b = 0; b < 3; b++){
        if(board[a][b] === 0 ){
          posicoesVazias.push({a,b});
        }
      } 
    }
  }
  
  
 if(posicoesVazias.length === 0){
    cena = 3;
  }

  //escolhe aleatoriamente uma posição vazia
  let randomIndex = floor(random(posicoesVazias.length));
  let posicaoEscolhida = posicoesVazias[randomIndex];

  let {a,b} = posicaoEscolhida;
  board[a][b] = 2;

  currentPlayer = 1;

  draw();
  

}

function verificarResultado () {
 
  let vencedor = null;

// console.log(vencedor)
  //vitória na horinzontal
  for(let linha = 0; linha < 3; linha++){

    if(board[linha][0] !==0 &&
      board[linha][0] === board[linha][1] &&
      board[linha][0] === board[linha][2]
      ){
        vencedor = board[linha][0];
      }

  }

  //vitória na vertical
  for(let coluna = 0; coluna < 3; coluna++){

    if(board[0][coluna] !== 0 &&
       board[0][coluna] === board[1][coluna] &&
       board[0][coluna] === board[2][coluna]
      ){
        vencedor = board[0][coluna];
      }
  }

  //vitoria na diagonal
  if(board[0][0] !== 0 &&
     board[0][0] === board[1][1] &&
     board[0][0] === board[2][2]
     ){
        vencedor = board[0][0];
     }

     if(board[2][0] !== 0 &&
      board[2][0] === board[1][1] &&
      board[2][0] === board[0][2]
      ){
         vencedor = board[2][0];
      }   

       return vencedor;

}

function reiniciarJogo(){
  for (let g = 0; g < 3; g++){
    for(let h = 0; h < 3; h++){
      board[h][g] = 0;

    }
  }

  cena = 0; 
  vencedor = null;
  currentPlayer = 1;
  posicoesVazias = 9; 
}





