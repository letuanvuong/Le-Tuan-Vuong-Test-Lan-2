let row = document.querySelector('input.rows')
let col = document.querySelector('input.columns')
let content = document.querySelector(".grid-container")

let valRow = row.value, valCol = col.value
// let keyItems
//Start
function beginStart () {
  content.innerHTML = ""
  for (var i = 0; i < valRow; i++) {
    for (var j = 0; j < valCol; j++) {
      let hang = `<div class="item${i}${j} cell"></div>`
      content.innerHTML += `${hang}`
    }
  }

  //random Number
  let randomNum
  for (var i = 0; i < valRow; i++) {
    for (var j = 0; j < valCol; j++) {
      if (i === 0) {
        document.querySelector(`.item${i}${j}`).textContent = `${j + 1}`
        document.querySelector(`.item${i}${j}`).classList.add('keyItem')
      } else {
        randomNum = Math.floor(Math.random() * 1001)
        document.querySelector(`.item${i}${j}`).textContent = `${randomNum}`
      }
    }
  }
  content.style.gridTemplateColumns = `repeat(${valCol}, auto)`
  // keyItems = document.querySelectorAll('.keyItem')
}

beginStart()

//sắp xếp row khi click header
let header = document.querySelectorAll('.keyItem')
function sortCell () {
  console.log(123)
}

header.forEach(s => s.addEventListener('click', sortCell))
//get value khi thay doi
function getVal () {
  valRow = Number(row.value)
  valCol = Number(col.value)
  beginStart()
}

row.addEventListener('change', getVal)
col.addEventListener('change', getVal)