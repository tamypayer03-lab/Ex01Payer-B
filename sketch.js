function setup() {
  createCanvas(800, 800)
}

function draw() {
  background(239, 239, 239);

  // RETTANGOLI COLORATI
  noStroke();

  // Rosso
  fill(224, 31, 38);
  rect(0, 0, 350, 300);

  // Giallo
  fill(247, 230, 70);
  rect(0, 450, 90, 350);

  // Blu
  fill(15, 71, 140);
  rect(350, 450, 300, 300);

  // LINEE NERE FERME
  stroke(0);
  strokeWeight(11);

  line(0, 300, 800, 300);
  line(0, 450, 800, 450);
  line(90, 450, 90, 800);
  line(650, 450, 650, 800);
  line(350, 750, 650, 750);

  // Bordi esterni
  line(0, 0, 350, 0);
  line(0, 0, 0, 300);
  line(0, 450, 0, 800);

  // LINEA VERTICALE CHE VIBRA
  let vibrazione = sin(frameCount * 0.7) * 5;

  line(
    350 + vibrazione, 0,
    350 + vibrazione, 800
  );
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
