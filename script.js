let currentPlayer = 1;
let diceRoll = 0;
let players = [[], [], [], []];  // Storing the positions of 4 players' pieces

// Function to roll dice
document.getElementById('rollDice').addEventListener('click', () => {
  diceRoll = Math.floor(Math.random() * 6) + 1;
  document.getElementById('turn').innerText = `Player ${currentPlayer}'s Turn (Rolled: ${diceRoll})`;
  
  // Move the piece based on dice roll
  movePiece(diceRoll);
});

// Function to move a piece based on dice roll
function movePiece(diceRoll) {
  let currentPlayerPieces = players[currentPlayer - 1];
  
  // Assume each player has 4 pieces and move the first available piece
  for (let i = 0; i < currentPlayerPieces.length; i++) {
    let piece = currentPlayerPieces[i];
    if (piece === 0) {  // Piece is at the start
      currentPlayerPieces[i] = diceRoll;
      break;
    }
  }
  
  // Update the board
  updateBoard();
}

// Function to update the game board with pieces
function updateBoard() {
  // Clear previous board
  const board = document.querySelector('.board');
  board.innerHTML = '';
  
  // Redraw the board with pieces
  for (let i = 0; i < 15 * 15; i++) {
    const cell = document.createElement('div');
    const playerPiece = getPieceAtPosition(i);
    if (playerPiece !== null) {
      const player = playerPiece[0];
      cell.innerText = `P${player + 1}`;
      cell.style.backgroundColor = getPlayerColor(player);
    }
    board.appendChild(cell);
  }
}

// Helper to get the color for each player
function getPlayerColor(player) {
  const colors = ['red', 'green', 'blue', 'yellow'];
  return colors[player];
}

// Helper to get the piece at a specific position
function getPieceAtPosition(position) {
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].length; j++) {
      if (players[i][j] === position) {
        return [i, j];  // return player index and piece index
      }
    }
  }
  return null;
}
