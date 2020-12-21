


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

    // Create a radial gradient
    // The inner circle is at x=110, y=90, with radius=30
    // The outer circle is at x=100, y=100, with radius=70
    var gradientBH = ctx.createRadialGradient(40,40,5, 40,40,20);

    //COLOR DESIGN FOR BLACK HOLE
    gradientBH.addColorStop(.83, 'black');
    gradientBH.addColorStop(.85, 'orange');
    gradientBH.addColorStop(.87, 'black');
    gradientBH.addColorStop(.9, 'orange');
    gradientBH.addColorStop(.94, 'black');
    gradientBH.addColorStop(.98, 'yellow');

// COLOR DESIGN STAR
    var gradientStar = ctx.createRadialGradient(-40,-40,5, -40,-40,30);

    //COLOR DESIGN FOR BLACK STAR
    gradientStar.addColorStop(0, 'darkOrange');
    gradientStar.addColorStop(.87, 'red');
    gradientStar.addColorStop(.88, 'darkRed');
    gradientStar.addColorStop(.93, 'orange');
    gradientStar.addColorStop(.94, 'red');

// COLOR DESIGN HELL WORLD
    var gradientHW = ctx.createRadialGradient(0,0,4, 0,0,6.5);

    //COLOR DESIGN FOR BLACK STAR
    gradientHW.addColorStop(0, 'darkRed');
    gradientHW.addColorStop(.30, 'black');
    gradientHW.addColorStop(.88, 'red');
    gradientHW.addColorStop(.93, 'Brown');
    gradientHW.addColorStop(.94, 'red');


// BINARY SYSTEM CREATION

    // Set the fill style and draw a rectangle
    ctx.fillStyle = gradientBH;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(40, 40, 20, 20, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated


    //CREATE THE SUN
    ctx.fillStyle = gradientStar;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(-40, -40, 30, 30, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated
    ctx.save();

    //HELL ETERNUM PLANET

    //Earth rotates
    // this will be useful to modify the speed of the object
    // it has to modify 0.6 or 600 //
    ctx.rotate(((2 * Math.PI) / 3) * time.getSeconds() + ((2 * Math.PI) / 3000) * time.getMilliseconds());
    //void ctx.translate(x, y);
    //ctx.translate(0,0);
    //void ctx.fillRect(x, y, width, height);
    ctx.translate(100,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD

    ctx.fillStyle = gradientHW;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(0, 0, 6, 6, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated
    ctx.save();







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