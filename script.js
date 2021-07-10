let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");/*desnha o deenho dentro do canvas colocando ele em 2d */
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 +1) *box,/* o Math.floor retira parte fufante(a virgula depos do número) do  Math.random */
    y:Math.floor(Math.random() * 15 + 1) *box
}


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

function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
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


    for ( i = 1; i < snake.length; i++) {/*se a posição 0 se chocar com a posição 1 (que é o corpo ela vai parar o jogo e vai acionar o alert que define o fim do jogo) */
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {/* se a poseção snake[0].x for exatamente igual da nossa poseção i do corpinho e a poseção y for igual x mostramos o alerta de fim de jogo  */
            clearInterval(jogo);
            alert('Game Over :(');
        }
        
    }



    criarBG();
    criarCobrinha();
    drawFood();



    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box; 
    if(direction == "down") snakeY +=box;  
    
    if(snakeX != food.x || snakeY != food.y) {/* caso a posição da snakeX seja diferende de foodX e a posição da snakeY seja diferente da foodY ela retira  o ultimo elemento da cobrina, caso não ele aumenta e gera novas comidas*/
        snake.pop();
    } else{
        food.x = Math.floor(Math.random() * 15 + 1) *box;/* o Math.floor retira parte fufante(a virgula depos do número) do  Math.random */
        food.y = Math.floor(Math.random() * 15 + 1) *box;
    }



    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}


let jogo = setInterval(iniciarJogo, 100);
