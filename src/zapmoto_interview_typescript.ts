import * as readline from 'readline';
import * as readlineSync from 'readline-sync';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const origianlBoard: string[][] = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
  ];

function displayBoard(board: string[][]) {
    console.log('\n', board[0][0], ' ', board[1][0], ' ', board[2][0], '\n', board[0][1], ' ', board[1][1], ' ', board[2][1],'\n', board[0][2], ' ', board[1][2], ' ', board[2][2])
}

function countTurn (count: number) {
    if (count == 1) 
        return count = 0
    return count = 1
}

function playerTurn(player: number){
    if (player == 1) {
        return 'O'
    }
    return 'X'
}

function playerChoice (userInput: number, game: string[][], playerTurn: string) {
    if (userInput == 1) {
        if (game[0][0] == '-'){
            game[0][0] = playerTurn
        } 
        else {
            return "Space is already in use"
        }
    }
    if (userInput == 2) {
        if (game[1][0] == '-'){
            game[1][0] = playerTurn
        } 
        else {
            return "Space is already in use"
        }
    }  
    if (userInput == 3) {
        if (game[2][0] == '-'){
            game[2][0] = playerTurn
        } 
        else {
            return "Space is already in use"
        }
    }  
    if (userInput == 4) {
        if (game[0][1] == '-'){
            game[0][1] = playerTurn
        } 
        else {
            return "Space is already in use"
        }
    }
    if (userInput == 5) {
        if (game[1][1] == '-'){
            game[1][1] = playerTurn
        } 
        else {
            return "Space is already in use"
        }
    }
    if (userInput == 6) {
        if (game[2][1] == '-'){
            game[2][1] = playerTurn
        } 
        else {
            return "Space is already in use"
        }
    }
    if (userInput == 7) {
        if (game[0][2] == '-'){
            game[0][2] = playerTurn
        } 
        else {
            return "Space is already in use"
        }
    }
    if (userInput == 8) {
        if (game[1][2] == '-'){
            game[1][2] = playerTurn
        } 
        else {
            return "Space is already in use"
        }
    }
    if (userInput == 9) {
        if (game[2][2] == '-'){
            game[2][2] = playerTurn
        } 
        else {
            return "Space is already in use"
        }
    }
}

function isPlayerWinner(game: string[][] ) {
    let isWinner = false
    // Checking Vertically
    if (game[0][0] != '-' && (game[0][0] == game[0][1] && game[0][1] == game[0][2]))
        return isWinner = true
    if (game[1][0] != '-' && (game[1][0] == game[1][1] && game[1][1] == game[1][2]))
        return isWinner = true

    if (game[2][0] != '-' && (game[2][0] == game[2][1] && game[2][1] == game[2][2]))
        return isWinner = true
    
    // Checking Horizontally
    if (game[0][0] != '-' && (game[0][0] == game[0][1] && game[0][1] == game[0][2]))
        return isWinner = true

    // Checking Diagonaly
    if (game[0][0] != '-' && (game[0][0] == game[1][1] && game[1][1] == game[2][2]))
        return isWinner = true
    
    if (game[0][2] != '-' && (game[0][2] == game[1][1] && game[1][1] == game[2][0]))
        return isWinner = true

    return isWinner
  }

  function isPlay(): boolean {
    const answer = readlineSync.question("Do you want to play Tic Tac Toe?\nYes or No? ");
    return answer.toLowerCase() === 'yes';
  }

function askMove(): number {
    const answer = readlineSync.question('Enter your move (1-9): ');
    return parseInt(answer, 10);
}

function clearBoard() {
    return [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
      ]
}

function playGame() {
    let move = 0
    let play = isPlay()
    let board = origianlBoard
    while (play) {
        
        displayBoard(board)
        let userInput = askMove()
        let playerValue = playerTurn(move)
        playerChoice(userInput, board, playerValue)
        
        if (isPlayerWinner(board)) {
            displayBoard(board)
            console.log("Player: " + playerTurn(move), 'you are the Winner!!!')
            board = clearBoard()
            move = countTurn(move)

            play = isPlay()

        }
        move = countTurn(move)
    }
}

playGame();