let n = document.querySelector('input.rows')
let content = document.querySelector(".grid-container")
let playerX = 'X'
let playerO = 'O'
const reset = document.querySelector('.reset')

let currentTurn = 1
let movesMade = 0

let valN = parseInt(n.value)
let mt = []
for (let i = 0; i < valN; i++) {
  mt.push(new Array(valN).fill(0))
}

function beginStart () {
  content.innerHTML = ""
  for (let i = 0; i < valN; i++) {
    const hang = []
    for (let j = 0; j < valN; j++) {
      let rowColumn = `<div data-i="${i}" data-j="${j}" class="item${i}${j} cell"></div>`
      content.innerHTML += `${rowColumn}`
    }
  }
  content.style.gridTemplateColumns = `repeat(${valN}, auto)`
}

beginStart()

function clickCurrent (event) {
  if (event.target.innerHTML) return
  movesMade++
  if (currentTurn % 2 === 1) {
    event.target.innerHTML = playerX
    event.target.style.color = "red"
    currentTurn++
  } else {
    event.target.innerHTML = playerO
    event.target.style.color = "green"
    currentTurn--
  }
  const i = event.target.getAttribute('data-i')
  const j = event.target.getAttribute('data-j')

  const text = event.target.innerHTML
  // mt[i][j] = text === playerX ? 1 : 2
  // console.log(mt[i][j] = text)
  mt[i][j] = text
  const result = checkWin(mt, valN)
  if (result === 1) {
    alert("X thang")
  } else if (result === 2) {
    alert("O thang")
  }

}

//get value khi thay doi input
function getVal () {
  valN = n.value
  beginStart()
  currentTurn = 1
  const cells = document.querySelectorAll('.cell')
  cells.forEach(cell => cell.addEventListener('click', clickCurrent))
  let mtran = []
  for (let i = 0; i < valN; i++) {
    mtran.push(new Array(valN).fill(0))
  }
  mt = mtran
}

n.addEventListener('change', getVal)
const cells = document.querySelectorAll('.cell')
cells.forEach(cell => cell.addEventListener('click', clickCurrent))

//check win
function checkWin (a, n) {
  let i, j, s = -1
  if (n == 3) {
    for (i = 0; i < n; i++) {
      if (a[i][0] == a[i][1] && a[i][1] == a[i][2] && a[i][2] === playerX) s = 1
      if (a[i][0] == a[i][1] && a[i][1] == a[i][2] && a[i][2] === playerO) s = 2
    }
    for (i = 0; i < n; i++) {
      if (a[0][i] == a[1][i] && a[1][i] == a[2][i] && a[2][i] === playerX) s = 1
      if (a[0][i] == a[1][i] && a[1][i] == a[2][i] && a[2][i] === playerO) s = 2
    }
    if (a[0][0] == a[1][1] && a[1][1] == a[2][2] && a[2][2] === playerX) s = 1
    if (a[0][2] == a[1][1] && a[1][1] == a[2][0] && a[2][0] === playerX) s = 1
    if (a[0][0] == a[1][1] && a[1][1] == a[2][2] && a[2][2] === playerO) s = 2
    if (a[0][2] == a[1][1] && a[1][1] == a[2][0] && a[2][0] === playerO) s = 2
  } 
   if (n == 4) {
    for (i = 0; i < n; i++) {
      if (a[i][0] == a[i][1] && a[i][1] == a[i][2] && a[i][2] == a[i][3] && a[i][3] === playerX) s = 1
      if (a[i][0] == a[i][1] && a[i][1] == a[i][2] && a[i][2] == a[i][3] && a[i][3] === playerO) s = 2
    }
    for (i = 0; i < n; i++) {
      if (a[0][i] == a[1][i] && a[1][i] == a[2][i] && a[2][i] == a[3][i] && a[3][i] === playerX) s = 1
      if (a[0][i] == a[1][i] && a[1][i] == a[2][i] && a[2][i] == a[3][i] && a[3][i] === playerO) s = 2
    }
    if (a[0][0] == a[1][1] && a[1][1] == a[2][2] && a[2][2] == a[3][3] && a[3][3] === playerX) s = 1
    if (a[0][3] == a[1][2] && a[1][2] == a[2][1] && a[2][1] == a[3][0] && a[3][0] === playerX) s = 1
    if (a[0][0] == a[1][1] && a[1][1] == a[2][2] && a[2][2] == a[3][3] && a[3][3] === playerO) s = 2
    if (a[0][3] == a[1][2] && a[1][2] == a[2][1] && a[2][1] == a[3][0] && a[3][0] === playerO) s = 2
  } else if (n == 5) {
    for (i = 0; i < n; i++) {
      if (a[i][0] == a[i][1] && a[i][1] == a[i][2] && a[i][2] == a[i][3] && a[i][3] == a[i][4] && a[i][4] === playerX) s = 1
      if (a[i][0] == a[i][1] && a[i][1] == a[i][2] && a[i][2] == a[i][3] && a[i][3] == a[i][4] && a[i][4] === playerO) s = 2
    }
    for (i = 0; i < n; i++) {
      if (a[0][i] == a[1][i] && a[1][i] == a[2][i] && a[2][i] == a[3][i] && a[3][i] == a[4][i] && a[4][i] === playerX) s = 1
      if (a[0][i] == a[1][i] && a[1][i] == a[2][i] && a[2][i] == a[3][i] && a[3][i] == a[4][i] && a[4][i] === playerO) s = 2
    }
    if (a[0][0] == a[1][1] && a[1][1] == a[2][2] && a[2][2] == a[3][3] && a[3][3] == a[4][4] && a[4][4] === playerX) s = 1
    if (a[0][4] == a[1][3] && a[1][3] == a[2][2] && a[2][2] == a[3][1] && a[3][1] == a[4][0] && a[4][0] === playerX) s = 1
    if (a[0][0] == a[1][1] && a[1][1] == a[2][2] && a[2][2] == a[3][3] && a[3][3] == a[4][4] && a[4][4] === playerO) s = 2
    if (a[0][4] == a[1][3] && a[1][3] == a[2][2] && a[2][2] == a[3][1] && a[3][1] == a[4][0] && a[4][0] === playerO) s = 2
  }

  return s
}

//reset ve lai nhu ban dau
function resetAll (e) {
  let sqr = document.querySelectorAll('.cell')

  var moves = Array.prototype.slice.call(sqr)
  moves.map((m) => {
    m.innerHTML = ''
  })
  currentTurn = 1
  
  clickCurrent()
}

reset.addEventListener('click', resetAll)
