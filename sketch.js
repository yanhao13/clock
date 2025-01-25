// Track last minute value for console logging
let lastMinute = -1;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(0, 0, 15);
  translate(width/2, height/2);

  // Get current time
  let h = hour() % 12;
  let m = minute();
  let s = second();

  // Log minute changes
  if (m !== lastMinute) {
    console.log("Current minute:", m);
    lastMinute = m;
  }

  // Draw hour circle
  noFill();
  let hourHue = map(h, 0, 11, 0, 360);
  let hourSize = map(h, 0, 11, 300, 700);
  stroke(hourHue, 80, 90);
  strokeWeight(15);
  circle(0, 0, hourSize);

  // Draw minute circles in spiral
  strokeWeight(4);
  for (let i = 0; i < m; i++) {
    let angle = map(i, 0, 59, 0, 360);
    let radius = map(i, 0, 59, 50, 250);
    let x = cos(angle) * radius;
    let y = sin(angle) * radius;
    let minHue = map(i, 0, 59, hourHue, (hourHue + 120) % 360);
    stroke(minHue, 80, 90);
    circle(x, y, 20);
  }

  // Draw seconds hand
  let secondAngle = map(s, 0, 59, 0, 360) - 90;
  stroke(hourHue, 30, 90);
  strokeWeight(3);
  let secondLength = 200;
  line(0, 0, 
    cos(secondAngle) * secondLength,
    sin(secondAngle) * secondLength
  );
}