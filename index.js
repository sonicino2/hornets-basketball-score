// Grab the score elements
const myScore1 = document.querySelector('.myscore1');
const myScore2 = document.querySelector('.myscore2');

// Grab the buttons for the home team
const homeTeamButtons = document.querySelectorAll('.hometeam .pointadder button');

// Grab the buttons for the guest team
const guestTeamButtons = document.querySelectorAll('.guestteam .pointadder button');

function updateScore(scoreElement, pointsToAdd) {
    // Get the current score and convert it to a number
    let currentScore = parseInt(scoreElement.textContent);
    
    // Add the points
    currentScore += pointsToAdd;
  
    // Update the score on the page
    scoreElement.textContent = currentScore;
  }

// Loop through the buttons and add event listeners
homeTeamButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const pointsToAdd = parseInt(button.textContent.replace(/\D/g, ''));
      updateScore(myScore1, pointsToAdd);
    });
  });
  
  guestTeamButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const pointsToAdd = parseInt(button.textContent.replace(/\D/g, ''));
      updateScore(myScore2, pointsToAdd);
    });
  });  

  let timerInterval; // This will hold the interval ID
  let seconds = 0;
  
  document.getElementById('startButton').addEventListener('click', function() {
    // Clear any existing intervals
    clearInterval(timerInterval);
  
    // Start the timer
    timerInterval = setInterval(() => {
      seconds++;
      let mins = Math.floor(seconds / 60);
      let secs = seconds % 60;
      document.getElementById('timer').textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
  });
  
  document.getElementById('stopButton').addEventListener('click', function() {
    clearInterval(timerInterval); // Stop the timer
  });