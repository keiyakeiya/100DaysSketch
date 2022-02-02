let c;
let container = document.querySelector('#canvasContainer');

function setup() {
  c = createCanvas(960, 540);
  c.parent(container);
  colorMode(HSB, 360, 100, 100, 10);
  noLoop();
}

function draw() {
  background(0);
  let x = width/2;
  let y = height/2;
  stroke(100);
  point(x, y);
}
