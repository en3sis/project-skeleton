let testpin = new MapPin(700, 400, 20, 30)
// let car = new Car(570, 380, 40)

/* ==========================================
*   Preload
* ========================================== */
function preload() {
  map = loadImage('../img/city.png')
  carImg = loadImage('../img/car.png')
  mapPin = loadImage('../img/pin.png')
}


/* ==========================================
*   => SETUP FUNCTION
* ========================================== */
function setup() {
  createCanvas(1000, 1000)

  // displayGrid()
}

/* ==========================================
*   => DRAW FUNCTION
* ========================================== */
function draw() {
  image(map, 0, 0)
  testpin.show()
  testpin.animate()
}


/*   => Mouse Press event.
* ------------------------------------------- */
function mousePressed() {
  testpin.clicked()
}

/*   => Display grid function
* ------------------------------------------- */
function displayGrid() {
  const gridCol = 4
  const gridRow = 4

  for(var i = 0; i < gridCol; i++ ) {
    for(var j = 0; j < gridRow; j++ ) {
      let x = i * 250
      let y = j * 250
      rect(x, y, 250, 250)
      noFill()
    }
  }
}

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})