if (confirm(`Do you want to play a game?`)) {
  const initialPocketsNumber = 9;
  const extraPocketsPerLevel = 4;
  const attemptPrizeFactor = 0.5;
  let level;
  let initialPrizePool = 100;
  let prizePool;
  let totalPrize;
  let currentPocketsNumber;
  let currentAttemptPrize;
  let winningPocket;
  let selectedPocket;
  let playerGuessed;
  let nextLevel;
  let newGame = true;
  do {
    if (newGame) {
      totalPrize = 0;
      prizePool = initialPrizePool;
      level = 0;
    }
    playerGuessed = false;
    nextLevel = false;
    newGame = false;
    let attempt = 3;
    currentPocketsNumber = initialPocketsNumber + extraPocketsPerLevel * level;
    winningPocket = Math.floor(Math.random() * currentPocketsNumber);
    currentAttemptPrize = prizePool;
    while (attempt > 0 && !playerGuessed) {
      selectedPocket = parseInt(prompt(`Choose a roulette pocket number from 0 to ${currentPocketsNumber - 1}
Attempts left: ${attempt}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${currentAttemptPrize}$`));
      if (selectedPocket === winningPocket) {
        playerGuessed = true;
        totalPrize += currentAttemptPrize;
        if (confirm(`Congratulation, you won!
Your prize is: ${totalPrize}$.
Do you want to continue?`)) {
          nextLevel = true;
          level++;
          prizePool += prizePool;
        } else {
          alert(`Thank you for your participation.
Your prize is: ${totalPrize}$.`);
          nextLevel = false;
          if (confirm(`Do you want to play again?`)) {
            newGame = true;
          } else {
            newGame = false;
          }
        }
      } else {
        playerGuessed = false;
        nextLevel = false;
        currentAttemptPrize *= attemptPrizeFactor;
        attempt--;
        if (attempt === 0) {
          alert(`Thank you for your participation.
Your prize is: ${totalPrize}$.`);
          if (confirm(`Do you want to play again?`)) {
            newGame = true;
          } else {
            newGame = false;
          }
        }
      }
    }
  } while (nextLevel || newGame);
} else {
  alert(`You did not become a billionaire, but can.`);
}