let nums = [100, 25, 46, 72];

let num = 23;

function setup() {
  let canvas = createCanvas(500,400);
  canvas.parent("game");
}

function draw() {
  background(0);

  for (let i = 0; i < 4; i++) {
    noFill();
    stroke(255);
    ellipse(i*100 + 100, 200, nums[i], nums[i]);
  }

  // ellipse(100, 200, nums[0], nums[0]);
  // ellipse(200, 200, nums[1], nums[1]);
  // ellipse(300, 200, nums[2], nums[2]);
  // ellipse(400, 200, nums[3], nums[3]);
}
