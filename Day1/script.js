const sketchName = '100DaysSketch';
let c;

function setup() {
  c = createCanvas(960, 540);
  colorMode(HSB, 360, 100, 100, 10);
  noLoop();
}

function draw() {
  background(0);
}

function keyPressed() {
  if(key === 'S' || key === 's') {
    let date = new Date();
    saveCanvas(c, sketchName + '_' + 1+date.getMonth() + '_' + date.getDate() + '_' + date.getHours() + '_' + date.getMinutes() + '_' + date.getSeconds(), 'jpg');
  }
}
