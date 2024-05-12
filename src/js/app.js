const colors = [];
const typedColors = [];
let level = 1;
let gameOver = false;

addButtonsSound()
aClick()

document.addEventListener("keydown", function (event) {
    console.log(event.key);

    if (event.key === "a") {
        startLevel();
        game();
    }
});

document.addEventListener("keydown", function () {
    restartGame();
});


function game() {
    const buttons = document.querySelectorAll(".btn");

    initializeNextLevel()

    for (let button of buttons) {
        button.addEventListener("click", function () {

            if (!gameOver) {
                let buttonColor = button.getAttribute("id");

                handleButtonClick(buttonColor)

                
            }
        });
    }
}

function handleButtonClick(color){

    addTypedColor(color)
    console.log(typedColors);

    let result = checkColorsMatch();

    if (result) {
        if (colors.length === typedColors.length) {
            console.log(result);

            resetPlayerInput();

            increaseLevel();

            initializeNextLevel();
        }
    } else {
        console.log(result);

        handleGameOver();
    }
}

function checkColorsMatch(){
    for (let i = 0; i < typedColors.length; i++) {
        if (colors[i] !== typedColors[i]) {
            return false
        }
    }

    return true
}

function animateButton(color) {
    document.getElementById(color).classList.toggle("opacity-0");

    setTimeout(function () {
        document.getElementById(color).classList.remove("opacity-0");
    }, 200);
}

function makeSound(color) {
    switch (color) {
        case "green":
            let audio1 = new Audio("src/assets/sounds/green.mp3");
            audio1.play();
            break;

        case "red":
            let audio2 = new Audio("src/assets/sounds/red.mp3");
            audio2.play();
            break;

        case "yellow":
            let audio3 = new Audio("src/assets/sounds/yellow.mp3");
            audio3.play();
            break;

        case "blue":
            let audio4 = new Audio("src/assets/sounds/blue.mp3");
            audio4.play();
            break;

        default:
            break;
    }
}

function randomColor() {
    const colors = ["green", "red", "yellow", "blue"];

    let randomIndex = Math.floor(Math.random() * 4);

    const color = colors[randomIndex];

    return color;
}

function increaseLevel() {
    level++;
    document.querySelector("h1").textContent = "Level " + level;
}

function restartLevel() {
    level = 1;
    document.querySelector("h1").textContent = "Level " + level;
}

function startLevel() {
    document.querySelector("h1").textContent = "Level " + level;
}

function redScreen() {
    document.querySelector("body").classList.remove("bg-sky-950");
    document.querySelector("body").classList.add("bg-red-600");
    document.querySelector("body").classList.add("opacity-80");

    setTimeout(function () {
        document.querySelector("body").classList.remove("bg-red-600");
        document.querySelector("body").classList.add("bg-sky-950");
        document.querySelector("body").classList.remove("opacity-80");
    }, 200);
}

function addNewColor() {
    colors.push(randomColor());
}

function getLastColor(colors) {
    return colors.at(-1);
}

function handleGameOver() {
    redScreen();

    playGameOverSound()

    displayGameOverMessage()

    gameOverState(true)

    resetGameState();
}

function restartGame() {
    if (!gameOver) return;

    restartLevel();

    nextLevel()

    gameOverState(false)
}

function nextLevel() {
    addNewColor();
    animateButton(getLastColor(colors));
    makeSound(getLastColor(colors));
    console.log(colors); // This line can be removed or commented out for the final game
}

function resetPlayerInput() {
    typedColors.length = 0;
}

function resetGameColors() {
    colors.length = 0;
}

function resetGameState() {
    resetPlayerInput();
    resetGameColors();
}


function initializeNextLevel() {
    setTimeout(nextLevel, 500);
}


function displayGameOverMessage() {
    document.querySelector("h1").textContent =
        "Game Over, Press Any Key to Restart";
}

function gameOverState(state){
    gameOver = state
}


function addButtonsSound(){
    const buttons = document.querySelectorAll(".btn");
    for (let button of buttons){
        button.addEventListener("click", function(){
            makeSound(button.getAttribute("id"));
        })
    }
}

function playGameOverSound(){
    let audio = new Audio("src/assets/sounds/wrong.mp3");
    audio.play();
        
}

function addTypedColor(color) {
    typedColors.push(color);
}

function aClick(){
    const a = document.querySelector("#a");
    a.addEventListener("click", ()=>{
        startLevel();
        game();
    })
}
