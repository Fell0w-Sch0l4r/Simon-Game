const buttons = document.querySelectorAll(".btn");


for (let button of buttons) {

    button.addEventListener("click", function(){
        makeSound(button.getAttribute("id"))
    })
    
}




function chooseButton(color){
    document.getElementById(color).classList.toggle("opacity-0")

    setTimeout(function(){
        document.getElementById(color).classList.remove("opacity-0");
    }, 200)

}

function makeSound(color){
    
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


function randomColor(){
    const colors = ["green", "red", "yellow", "blue"]

    let randomIndex = Math.floor(Math.random() * 4)

    const color = colors[randomIndex]

    return color
}