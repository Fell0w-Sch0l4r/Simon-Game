const colors = [];
const typedColors = [];
let level = 1;

document.addEventListener("keydown", function (event) {
    console.log(event.key);

    if (event.key === "a") {
        startLevel();
        game();
    }
});

function game() {
    const buttons = document.querySelectorAll(".btn");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            makeSound(button.getAttribute("id"));
        });
    }

    colors.push(randomColor());

    console.log(colors);
    animateButton(colors.at(-1));

    for (let button of buttons) {
        button.addEventListener("click", function () {

            
            let buttonColor = button.getAttribute("id");
            typedColors.push(buttonColor);
            console.log(typedColors);

            let result = true;

            for (let i = 0; i < typedColors.length; i++) {
                if (colors[i] !== typedColors[i]) {
                    result = false;
                    break;
                }
            }

            if (result) {
                if (colors.length === typedColors.length) {
                    console.log(result);
                    typedColors.length = 0;

                    increaseLevel();

                    colors.push(randomColor());
                    animateButton(colors.at(-1));
                    console.log(colors);
                }
            } else {
                console.log(result);
                typedColors.length = 0;
                colors.length = 0;

                colors.push(randomColor());
                animateButton(colors.at(-1));
                console.log(colors);

                redScreen();
                restartLevel();
            }
        });
    }
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


function restartGame(){
    redScreen()
    
    document.querySelector("h1").textContent = "Game Over, Press Any Key to Restart";

    document.addEventListener.apply("keydown", function(){
        restartLevel()

        
    })


}
