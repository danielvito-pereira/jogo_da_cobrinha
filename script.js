let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");/*desnha o deenho dentro do canvas colocando ele em 2d */
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

function criarBG() {/*desenha e define plano*/
    context.fillStyle = "lightgreen";/*define a cor */
    context.fillRect(0, 0, 16 * box, 16 * box);/*desenha o retangulo onde acontece o jogo */
}

function criarCobrinha() {
    for(i=0; i< snake.length; i++){
        context.fillStyle="green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}


document.addEventListener('keydown', update);/*captura o movimento da seta é chama a função update *//*também passa como argumento o evento */


function update (event) {/* o evento é o movimento de tela */
   if(event.keyCode == 37 && direction != "right") direction = "left";
   if(event.keyCode == 38 && direction != "down") direction = "up";
   if(event.keyCode == 39 && direction != "left") direction = "right";
   if(event.keyCode == 40 && direction != "up") direction = "down";
}


function iniciarJogo() {
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;/*faz a cobrinha aparecer no outro lado da tela  */
    if (snake[0].x < 0  && direction == "left") snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0  && direction == "up") snake[0].y = 16 * box;
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box; 
    if(direction == "down") snakeY +=box;  
    
    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}


let jogo = setInterval(iniciarJogo, 100);
