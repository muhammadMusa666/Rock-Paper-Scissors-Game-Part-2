let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const userScoreP = document.querySelector(".user-score");
const BotScoreP = document.querySelector(".bot-score");

const genBotChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const ranIDX = Math.floor(Math.random() * 3);
    return options[ranIDX]
};

const drawg = () => {
    msg.innerText = "Game was a Draw..."
    msg.style.backgroundColor = "#000042"
}

const showW = (userW, userch, BotChoice) => {
    if(userW) {
        userScore++;
        userScoreP.innerText = botScore;
        msg.innerText = `You Win! Your ${userch} beats ${BotChoice}`;
        msg.style.backgroundColor = "green"
    } else {
        botScore++;
        BotScoreP.innerText = userScore;
        console.log("you lose...");
        msg.innerText = `you lose... ${BotChoice} beats Your ${userch}`;
        msg.style.backgroundColor = "red"
    }
}

const playg = (userch) => {
    const BotChoice = genBotChoice();

    if(userch === BotChoice) {
        drawg();
    } else {
        let userW = true;
        if(userch === "rock") {
            userW = BotChoice === "paper" ? false : true;
        } else if (userch === "paper") {
            userW = BotChoice === "scissors" ? false : true;
        } else {
            userW = BotChoice === "rock" ? false : true;
        }
        showW(userW, userch, BotChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userch = choice.getAttribute("class")
        playg(userch)
    });
});