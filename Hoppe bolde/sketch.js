
  function setup() {
    createCanvas(600, 600);
}
let d = Math.floor(Math.random() * 101) + 51;
// let x = Math.floor(Math.random() * ((601 - d) - 1) + d / 2);
// let y = Math.floor(Math.random() * ((601 - d) - 1) + d / 2);
let xKoordinater = [400, 200]
let yKoordinater = [300, 450]
let xSpeed = [3, 5]
let ySpeed = [2, -4]
let rød = Math.floor(Math.random() * 256);
let grøn = Math.floor(Math.random() * 256);
let blå = Math.floor(Math.random() * 256);
let antalBolde = xKoordinater.length;
// var bold = ["bold1", "bold2", "bold3", "bold4"];
 
function draw() {
    background(220);
 
    for (let i = 0; i < antalBolde; i++) {
        if (xKoordinater[i] > width - d / 2 || xKoordinater[i] < 0 + d / 2) {
            xSpeed[i] = -xSpeed[i];
        }
        if (yKoordinater[i] > height - d / 2 || yKoordinater[i] < 0 + d / 2) {
            ySpeed[i] = -ySpeed[i];
        }
        xKoordinater[i] = xKoordinater[i] + xSpeed[i];
        yKoordinater[i] = yKoordinater[i] + ySpeed[i];
 
    }
    for (let i = 0; i < antalBolde; i++) {
        circle(xKoordinater[i], yKoordinater[i], d);
        fill(rød, grøn, blå);
 
    }
}

   
  