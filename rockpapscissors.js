const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') 
      return userInput;
      
  else {
        console.log('wrong Input');
       }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random()*3);
  switch ( randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    }
};

const determineWinner = (userChoice,computerChoice) => {
  if (userChoice === computerChoice) {
    return 'this is a tie'};
  
  if (userChoice === 'bomb') {
    return 'Oh no issa BOMB!';
  }
  
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors')
      return 'you won!';
    else 
      return 'I won won!';
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors')
      return 'I win!';
    else
      return 'You win!';
  }
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock')
      return 'I win!';
    else
      return 'You win!';
  }
  
};

const playGame = () => {
 const userChoice = getUserChoice('rock'||'paper'||'scissors');
  
  const computerChoice = getComputerChoice();
  console.log('You threw: '+ userChoice);
  console.log('I threw: '+ computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();


