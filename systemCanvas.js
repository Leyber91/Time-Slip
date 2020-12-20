/*let planets = []
let sun
let numPlanets = 4
let G = 120
let destabilise = 0.15

function setup() {
  createCanvas(windowWidth,windowHeight)
  sun = new Body(50,createVector(0,0),createVector(0,0))

    // Initialise the planets
  for (let i = 0; i < numPlanets; i++) {
    let mass = random(5, 15)
    let radius = random(sun.d, min(windowWidth/2,windowHeight/2))
    let angle = random(0, TWO_PI)
    let planetPos = createVector(radius * cos(angle), radius * sin(angle))

    // Find direction of orbit and set velocity
    let planetVel = planetPos.copy()
    if (random(1) < 0.1) planetVel.rotate(-HALF_PI)
    else planetVel.rotate(HALF_PI)  // Direction of orbit
    planetVel.normalize()
    planetVel.mult( sqrt((G * sun.mass)/(radius)) ) // Circular orbit velocity
    planetVel.mult( random( 1-destabilise, 1+destabilise) ) // create elliptical orbit

    planets.push( new Body(mass, planetPos, planetVel) )
  }
}

function draw() {
  background(180)
  translate(width/2, height/2)
  for (let i = numPlanets-1; i >= 0; i--) {
    sun.attract(planets[i])
    planets[i].move()
    planets[i].show()
  }
  sun.show()
}


function Body(_mass, _pos, _vel){
  this.mass = _mass
  this.pos = _pos
  this.vel = _vel
  this.d = this.mass*2
  this.thetaInit = 0
  this.path = []
  this.pathLen = Infinity

  this.show = function() {
    stroke(0,50)
    for (let i = 0; i < this.path.length-2; i++) {
      line(this.path[i].x, this.path[i].y, this.path[i+1].x, this.path[i+1].y,)
    }
    fill(255); noStroke()
    ellipse(this.pos.x, this.pos.y, this.d, this.d)
  }


  this.move = function() {
    this.pos.x += this.vel.x
    this.pos.y += this.vel.y
    this.path.push(createVector(this.pos.x,this.pos.y))
    if (this.path.length > 200) this.path.splice(0,1)
  }

  this.applyForce = function(f) {
    this.vel.x += f.x / this.mass
    this.vel.y += f.y / this.mass
  }

  this.attract = function(child) {
    let r = dist(this.pos.x, this.pos.y, child.pos.x, child.pos.y)
    let f = (this.pos.copy()).sub(child.pos)
    f.setMag( (G * this.mass * child.mass)/(r * r) )
    child.applyForce(f)
  }

}

setup()*/

let sun = new Image();
let moon = new Image();
let earth = new Image();

//this funciton will serve us to initiate the program
let init = () => {
    sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
    moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
    earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
window.requestAnimationFrame(createSystem);
}

let createSystem = () =>{
    let ctx = document.getElementById('canvas').getContext('2d');

    ctx.globalCompositeOperation = 'destination-over'
    ctx.clearRect(0,0,400,300);

    ctx.fillStyle = 'rgba(white,0.5)';
    ctx.strokeStyle = 'rgba(blue,0.5)';

    ctx.save();

    ctx.translate(150,150);

    //Earth
    let time = new Date();

    ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
    ctx.translate(105,0)
    ctx.fillRect(0, -12,40,24); //shadow
    ctx.drawImage(earth, -12, -12);
    ctx.save();

    //Moon

    ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
    ctx.translate(0,28.5);
    ctx.fillRect(0, -12,40,24);
    ctx.drawImage(moon, -3.5,-3.5);
    ctx.restore();

    ctx.restore();
    ctx.beginPath();
    ctx.arc(150,150,105, 0, Math.PI *2, false);
    ctx.stroke();

    ctx.drawImage(sun, 0, 0, 300, 300);

    window.requestAnimationFrame(createSystem);

}

init();