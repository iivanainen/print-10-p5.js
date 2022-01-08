function setup() {
  createCanvas(800, 800);
  
  background(2, 0, 60);
  stroke(255);
  strokeWeight(2);
  
  let spacing = 20;
  
    for (var y = 0; y < height / spacing; y++) {
    
      for (var x = 0; x < width / spacing; x++) {
        
        let mycolourX = map(x, 0, width / spacing, 0, 255);
        let mycolourY = map(y, 0, height / spacing, 0, 255);
        let mycolour = color(255 - mycolourY, map(mycolourY, 0, 255, 10, 50), map(mycolourY, 0, 255, 120, 255));
        
        stroke(mycolour);
        fill(mycolour);

        if (random(1) < 0.5) {
          line(spacing * x, spacing * y, spacing * x + spacing, spacing * y + spacing);
          //ellipse(spacing * x + spacing * 0.5, spacing * y + spacing * 0.5, spacing - 3);
        }
        else {
          //line(spacing * x, spacing * y, spacing * x + spacing, spacing * y + spacing);
          line(spacing * x, spacing * y + spacing, spacing * x + spacing, spacing * y);
        }
     
    } 
  }
}

function draw() {


}
