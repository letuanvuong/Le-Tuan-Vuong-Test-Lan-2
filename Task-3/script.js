const canvas = document.getElementById('snake')
let context = canvas.getContext('2d')

let grid = 16

// khoi tao ran
let snake = {
  //vi tri cua snake theo huong x,y
  x: 160,
  y: 160,
  //huong di chuyen cua snake theo phuong x hoac y khi start game
  dx: grid,
  dy: 0,
  cells: [],
  maxCells: 1
}

let count = 0
//khoi tao con moi
let prey = {
  x: 80,
  y: 80
}

//random vi tri cua prey
function randomPrey (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

// set time out
function timeOut () {
  requestAnimationFrame(timeOut)
  //xet time di chuyen cua snake
  if (++count < 10) return
  //mỗi time out rắn sẽ di chuyển thêm 1dx đơn vị
  count = 0

  // bat event su dung ban phim
  function eventKeydown (e) {
    //left
    if (e.which === 37 && snake.dx === 0) {
      snake.dx = -grid
      snake.dy = 0
    }
    //up
    else if (e.which === 38 && snake.dy === 0) {
      snake.dy = -grid
      snake.dx = 0
    }
    //right
    else if (e.which === 39 && snake.dx === 0) {
      snake.dx = grid
      snake.dy = 0
    }
    // down
    else if (e.which === 40 && snake.dy === 0) {
      snake.dy = grid
      snake.dx = 0
    }
  }
  //xoa toan bo vung canvas
  context.clearRect(0, 0, canvas.width, canvas.height)
  snake.x += snake.dx
  snake.y += snake.dy

  //check khi snake dung tuong => xuat hien o phia doi dien
  if (snake.x < 0) {
    snake.x = canvas.width - grid
  } else if (snake.x >= canvas.width) {
    snake.x = 0
  }
  if (snake.y < 0) {
    snake.y = canvas.height - grid
  } else if (snake.y >= canvas.height) {
    snake.y = 0
  }

  // su dung phuong thuc unshift de them phan tu moi vao dau mang
  snake.cells.unshift({
    x: snake.x,
    y: snake.y
  })
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop()
  }

  //style cho con moi
  context.fillStyle = 'black'

  //ve hinh chu nhat
  context.fillRect(prey.x, prey.y, grid - 1, grid - 1)
  //style cho snake
  context.fillStyle = 'green'

  snake.cells.forEach(function (cell, index) {
    context.fillRect(cell.x, cell.y, grid - 1, grid - 1)
    if (cell.x === prey.x && cell.y === prey.y) {
      snake.maxCells++
      prey.x = randomPrey(0, 25) * grid
      prey.y = randomPrey(0, 25) * grid
    }
    //check va cham khi ran de len nhau => reset ve vi tri ban dau
    for (var i = index + 1; i < snake.cells.length; i++) {
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        snake.x = 160
        snake.y = 160
        snake.cells = []
        snake.maxCells = 1
        snake.dx = grid
        snake.dy = 0
        prey.x = randomPrey(0, 25) * grid
        prey.y = randomPrey(0, 25) * grid
      }
    }
  })

  document.addEventListener('keydown', eventKeydown)
}
requestAnimationFrame(timeOut)