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
// equivalent to document.create element image()


let sun = new Image();
let moon = new Image();
let earth = new Image();

//this funciton will serve us to initiate the program
let initialize = () => {
    sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
    moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
    earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
window.requestAnimationFrame(createSystem);
}

let createSystem = () =>{
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ///Operation to apply when drawing new shapes.
    ctx.globalCompositeOperation = 'destination-over'


    ctx.clearRect(0,0,600,600);

    ctx.save();

    ctx.translate(150,150);

    //Earth Center
    let time = new Date();
    //void ctx.rotate(angle);
    // where to put it on the screen
    ctx.translate(200,180) 
    ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
    //void ctx.translate(x, y);

    //void ctx.fillRect(x, y, width, height);
    
    //void ctx.drawImage(image, dx, dy);
    //void ctx.drawImage(image, dx, dy, dWidth, dHeight);
    //void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

    //BIG CENTER CLACK WHOLE

    ctx.fillStyle = 'black'; // you need to fill up the image
    ctx.beginPath(); //start the path
    ctx.ellipse(-5,-5, 20 , 20, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated
    ctx.drawImage(earth, -20, -20, 40, 40); //here I modifiy the orbit //BIG CENTER EARTH
    ctx.save();

    //Earth rotates
    // this will be useful to modify the speed of the object
    // it has to modify 0.6 or 600 //
    ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
    //void ctx.translate(x, y);
    //ctx.translate(0,0);
    //void ctx.fillRect(x, y, width, height);
    ctx.translate(200,0) //WE DRAW HOW FAR THE OBJECT 
    ctx.drawImage(earth, -10,-10, 20 , 20); //earth rotates
    ctx.save()
    
    //Earth moon
    //ctx.restore();
//Moon 1
    ctx.rotate(((2 * Math.PI) / 600) * time.getSeconds() + ((2 * Math.PI) / 600000) * time.getMilliseconds());
    ctx.translate(50,0) //ORBIT OF THE MOON
    
    //ctx.drawImage(earth, -5,-5 , 10 , 10);
    ctx.fillStyle = 'red'; // you need to fill up the image
    ctx.beginPath(); //start the path
    ctx.ellipse(-5,-5, 20 , 20, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated

    ctx.save()
    ctx.restore() // eliminate the save level
    ctx.restore() // we go back to the previous reference
    ctx.rotate(((2 * Math.PI) / 6000) * time.getSeconds() + ((2 * Math.PI) / 6000000) * time.getMilliseconds());
    ctx.translate(20,0)
    ctx.drawImage(earth, -5,-5 , 10 , 10);


    ctx.save()

    //ctx.restore()
    //ctx.restore()
    //ctx.restore()

//Planet 2

    
//Planet 3
    //void ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    
    ctx.ellipse(-33.5,-33.5, 300,300, 1 , 20 , 40);
    ctx.fillStyle = 'green';
    ctx.save()
    
//Planet 4

    
//Planet 5

    
//Planet 6

    
//Planet 7

    
//Planet 8

    //ctx.restore();
    
    //ctx.restore();
    
    ctx.beginPath();//create distinct paths
    
    ctx.beginPath();
// SUN
    //ctx.arc(150,150,105, 0, Math.PI *2, false);
    ctx.stroke();
// animations are not according to the position of the sun
//void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    //ctx.drawImage(sun, 200, 200, 300, 300);

    window.requestAnimationFrame(createSystem);

}

initialize();