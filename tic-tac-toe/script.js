const xClass = 'x';
const oClass = 'o';
const dataCell = document.querySelectorAll('[data-cell]')
const table = document.getElementById('table')
const winngMessage = document.getElementById('message-text')
const restartButton = document.getElementById('restartButton')
const winningMessageShow = document.getElementById('message')
//objects 
const car = {type:"vauxhall", colour:"blue", year:"2019"};
console.log('my car is a ' + car.type +' and it is the colour ' + car.colour);

const winningAnswer = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

let oTurn

startGame()

function startGame () {
    oTurn = false
    dataCell.forEach(cell=> {
        cell.classList.remove(xClass)
        cell.classList.remove(oClass)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, { once: true}) //only fire event once when it is clicked
    })
   winngMessage.classList.remove('show')
}

function hoverClass () {
    table.classList.remove(xClass)
    table.classList.remove(oClass)
    if (oTurn) {
        table.classList.add(oClass)
    } else {
        table.classList.add(xClass)
    }
}

function changeTurns() {
    oTurn = !oTurn
}

function handleClick(e) {
    const cell = e.target
    const currentClass = oTurn ? oClass : xClass //? = then : = otherwise
    //PLACE MARK - if oTurn is ture - it is circle's turn
    placeMark (cell, currentClass)
    //CHECK FOR WIN
    if (hasWon(currentClass)) {
        /*console.log ('winner');*/
        endGame(false) //whether it is a draw or not
    } else if (hasDrawn) { //function defined below hasDrawn
        endGame(true)
    } else {
        changeTurns()
        hoverClass()
    }
    //CHECK FOR DRAW
    //SWITCH TURNS 
    changeTurns() 
    hoverClass()
}



function hasDrawn () {
    return[ dataCell.every](cell => { //[] the array allows the elemet to be destructed so that it can have a method of every 
        return cell.classList.contains(xClass) || 
        cell.classList.contains(oClass) //|| = OR
    }) //if every single data cell has an x or o class, then we want to return a draw
}
function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}



function hasWon(currentClass) {
    return winningAnswer.some(combination => {
        return combination.every(index => {
            return dataCell[index].classList.contains(currentClass)
        })
    })
}

function endGame(draw) {
    if (draw) {
        winngMessage.innerText = "It's a Draw"
    } else { //if it is not a draw - display this winng message
        winngMessage.innerText = oTurn ? "O is the winner!" : "X is the winner!" 
    } 
    winningMessageShow.classList.add('show') 
}

restartButton.addEventListener('click', startGame)