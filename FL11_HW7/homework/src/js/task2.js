let startGame = confirm('Do you want to play a game?');

if (startGame) {
    let increasePrize = 1;
    let increaseMaxRandom = 4;
    let maxRandomStart = 8;
    let maxRandom = maxRandomStart;
    let userPrize = 0;
    let firstPrize = 100;
    let secondPrize = 50;
    let thirdPrize = 25;
    let prizeArray = [firstPrize, secondPrize, thirdPrize];
    let rounds = 3;
    let continueGame = false;
    let showEndGameMessage = false;

    do {
        let randomNumber = Math.floor(Math.random() * maxRandom + 1);
        for (let index = 1; index <= rounds; index++) {
            const messageStartGame = `Choose a roulette pocket number from 0 to ${maxRandom} 
Attempts left:  ${index}
Total prize: ${userPrize} $
Possibile prize on current attempt: ${prizeArray[index - 1]*increasePrize} $`;
            let userNumber = +prompt(messageStartGame);
            if (userNumber === randomNumber) {
                userPrize = userPrize + prizeArray[index - 1] * increasePrize;
                const messageWin = `Congratulation, you won!   
Your prize is: ${userPrize} $. 
Do you want to continue?`;
                continueGame = confirm(messageWin);
                if (!continueGame) {
                    showEndGameMessage = true;
                }
                break;
            } else if (!userNumber || index === rounds) {
                showEndGameMessage = true;
                continueGame = false;
                break;
            }
        }
        increasePrize++;
        maxRandom = maxRandom + increaseMaxRandom;
        if (showEndGameMessage) {
            const messageEndGame = `Thank you for your participation. Your prize is: ${userPrize} $`;
            alert(messageEndGame);
            const messagePlayAgainGame = `Do you want to play again?`;
            continueGame = confirm(messagePlayAgainGame);
            if (continueGame) {
                increasePrize = 1;
                maxRandom = maxRandomStart;
                userPrize = 0;
                showEndGameMessage = false;
            }
        }
    } while (continueGame);

} else {
    alert('You did not become a billionaire, but can.');
}