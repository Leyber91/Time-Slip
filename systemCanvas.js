
const speedController = 60;

//this funciton will serve us to initiate the program
let initialize = () => {
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
    ctx.rotate(((2 * Math.PI) / speedController) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*1000)) * time.getMilliseconds());
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
    var gradientHW = ctx.createRadialGradient(0,0,4, 0,0,6);

    //COLOR DESIGN FOR BLACK STAR
    gradientHW.addColorStop(0, 'darkRed');
    gradientHW.addColorStop(.30, 'black');
    gradientHW.addColorStop(.88, 'red');
    gradientHW.addColorStop(.93, 'Brown');
    gradientHW.addColorStop(.94, 'red');

// COLOR DESIGN WAVEWORLD
    var gradientWW = ctx.createRadialGradient(0,0,5, 0,0,11.8);

    //COLOR DESIGN FOR WAVEWORLD
    gradientWW.addColorStop(0, 'white');
    gradientWW.addColorStop(.10, 'lightBlue');
    gradientWW.addColorStop(.50, 'darkBlue');
    gradientWW.addColorStop(.90, 'grey');
    gradientWW.addColorStop(.92, 'blue');
    gradientWW.addColorStop(.94, 'lightBlue');
    gradientWW.addColorStop(.96, 'darkBlue');
    gradientWW.addColorStop(.98, 'White');
    gradientWW.addColorStop(1, 'black');


    // COLOR DESIGN MOUNTAINWORLD
    var gradientMW = ctx.createRadialGradient(0,0,2, 0,0,10);

    // COLOR DESIGN FOR MOUNTAIN WORLDS
    gradientMW.addColorStop(0, 'lightBlue');
    gradientMW.addColorStop(.30, 'brown');
    gradientMW.addColorStop(.40, 'darkGreen');
    gradientMW.addColorStop(.50, 'green');
    gradientMW.addColorStop(.60, 'lightGreen');
    gradientMW.addColorStop(.80, 'brown');
    gradientMW.addColorStop(.90, 'darkGreen');
    gradientMW.addColorStop(.92, 'green');
    gradientMW.addColorStop(.94, 'lightBlue');
    gradientMW.addColorStop(.96, 'darkBlue');
    gradientMW.addColorStop(.98, 'White');
    gradientMW.addColorStop(1, 'black');

    // COLOR DESIGN MIDDLE WORLD
    var gradientMDW = ctx.createRadialGradient(0,0,2, 0,0,10);

    // COLOR DESIGN FOR MIDDLE WORLD
    gradientMDW.addColorStop(0, 'lightBlue');
    gradientMDW.addColorStop(.30, 'brown');
    gradientMDW.addColorStop(.90, 'grey');
    gradientMDW.addColorStop(.92, 'green');
    gradientMDW.addColorStop(.94, 'lightBlue');
    gradientMDW.addColorStop(.96, 'darkBlue');
    gradientMDW.addColorStop(.98, 'White');
    gradientMDW.addColorStop(1, 'black');

    // COLOR DESIGN MIDDLE WORLD MOON
    var gradientMWM = ctx.createRadialGradient(0,0,2, 0,0,10);

    // COLOR DESIGN FOR MIDDLE WORLD
    gradientMWM.addColorStop(0, 'lightBlue');
    gradientMWM.addColorStop(.30, 'brown');
    gradientMWM.addColorStop(.90, 'grey');
    gradientMWM.addColorStop(.92, 'green');
    gradientMWM.addColorStop(.94, 'lightBlue');
    gradientMWM.addColorStop(.96, 'darkBlue');
    gradientMWM.addColorStop(.98, 'White');
    gradientMWM.addColorStop(1, 'black');

    // BINARY WORLDS
    var gradientBWB = ctx.createRadialGradient(15,15,1, 15,15,14);
    var gradientBWV = ctx.createRadialGradient(-20,-20,1, -20,-20,16);

    // COLOR DESIGN FOR BINARY WORLD BLUE
    gradientBWB.addColorStop(0, 'lightBlue');
    gradientBWB.addColorStop(.87, 'turquoise');
    gradientBWB.addColorStop(.88, 'blue');
    gradientBWB.addColorStop(.93, 'darkBlue');
    gradientBWB.addColorStop(.98, 'grey');
    gradientBWB.addColorStop(1, 'white');

    // COLOR DESIGN FOR BINARY WORLD VIOLET
    gradientBWV.addColorStop(0, 'lightBlue');
    gradientBWV.addColorStop(.87, 'purple');
    gradientBWV.addColorStop(.88, 'blue');
    gradientBWV.addColorStop(.93, 'pink');
    gradientBWV.addColorStop(.98, 'darkBlue');

    // COLOR DESIGN RINGWORLD
    var gradientRW = ctx.createRadialGradient(0,0,2, 0,0,19.5);

    // COLOR DESIGN FOR MIDDLE WORLD
    gradientRW.addColorStop(0, 'lightYellow');
    gradientRW.addColorStop(.40, 'darkOrange');
    gradientRW.addColorStop(.78, 'brown');
    gradientRW.addColorStop(.95, 'orange');
    gradientRW.addColorStop(1, 'yellow');

        // COLOR DESIGN RINGWORLD MOON
        var gradientRWM = ctx.createRadialGradient(0,0,1, 0,0,5);

        // COLOR DESIGN FOR RING WORLD
        gradientRWM.addColorStop(0, 'grey');
        gradientRWM.addColorStop(.40, 'darkGrey');
        gradientRWM.addColorStop(.78, 'white');
        gradientRWM.addColorStop(.95, 'black');
        gradientRWM.addColorStop(1, 'white');





// COLOR DESIGN FOR MIDDLE WORLD

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
    // it has to modify 0.6 or 600 //
    ctx.rotate(((2 * Math.PI) / (speedController*0.05)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*50)) * time.getMilliseconds());
    ctx.translate(100,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD
    ctx.fillStyle = gradientHW;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(0, 0, 6, 6, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated
    ctx.restore();

    //WAVE WORLD
    ctx.rotate(((2 * Math.PI) / (speedController*0.1)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*100)) * time.getMilliseconds());
    //void ctx.translate(x, y);
    //ctx.translate(0,0);
    //void ctx.fillRect(x, y, width, height);
    ctx.translate(140,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD

    ctx.fillStyle = gradientWW;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(0, 0, 12, 12, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated
    ctx.restore();

    
    ctx.save();
    ctx.translate(150,150);
    ctx.translate(200,180) 
    ctx.save()


    //MOUNTAIN WORLD
    ctx.rotate(((2 * Math.PI) / (speedController*0.15)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*150)) * time.getMilliseconds());
    //void ctx.translate(x, y);
    //ctx.translate(0,0);
    //void ctx.fillRect(x, y, width, height);
    ctx.translate(175,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD

    ctx.fillStyle = gradientMW;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(0, 0, 10, 10, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated
    ctx.restore();


    //MIDDLE WORLD
    ctx.rotate(((2 * Math.PI) / (speedController*0.2)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*200)) * time.getMilliseconds());
    //void ctx.translate(x, y);
    //ctx.translate(0,0);
    //void ctx.fillRect(x, y, width, height);
    ctx.translate(240,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD

    ctx.fillStyle = gradientMDW;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(0, 0, 8, 8, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated

    ctx.save();
        //MIDDLE WORLD MOON
        ctx.rotate(((2 * Math.PI) / (speedController*0.2)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*200)) * time.getMilliseconds());
        //void ctx.translate(x, y);
        //ctx.translate(0,0);
        //void ctx.fillRect(x, y, width, height);
        ctx.translate(20,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD

        ctx.fillStyle = gradientMWM;
        ctx.beginPath(); //start the path
        //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
        ctx.ellipse(0, 0, 4, 4, Math.PI / 4, 0, 2 * Math.PI)
        ctx.stroke(); //end the path
        ctx.fill(); //fill up whatever was generated


    ctx.restore()
    ctx.restore()
    ctx.save();
    ctx.translate(150,150);
    ctx.translate(200,180) 
    ctx.save()



    //BINARY WORLDS
    ctx.rotate(((2 * Math.PI) / (speedController*0.25)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*250)) * time.getMilliseconds());
    //void ctx.translate(x, y);
    //ctx.translate(0,0);
    //void ctx.fillRect(x, y, width, height);
    ctx.translate(300,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD
    ctx.rotate(((2 * Math.PI) / (speedController*0.1)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*100)) * time.getMilliseconds());
    //PURPLE GAS GIANT
    ctx.fillStyle = gradientBWB;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(15, 15, 14, 14, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated

    //BLUE GAS GIANT
    ctx.fillStyle = gradientBWV;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(-20, -20, 16, 16, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated

    ctx.restore()


    //RING WORLD
    ctx.rotate(((2 * Math.PI) / (speedController*0.3)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*300)) * time.getMilliseconds());
    //void ctx.translate(x, y);

    //void ctx.fillRect(x, y, width, height);
    ctx.translate(360,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD

    // RING
    ctx.lineWidth = 0.000001;
    ctx.fillStyle = 'rgba(255,160,12,0.5)';
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);

    ctx.ellipse(0, 0, 40, 6, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill();
    //BLUE GAS GIANT
    ctx.fillStyle = gradientRW;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(0, 0, 20, 20, Math.PI / 4, 0, 2 * Math.PI)

    ctx.stroke(); //end the path
    ctx.fill();

     //fill up whatever was generated
    ctx.save();

        //RINGWORLD MOON
        ctx.rotate(((2 * Math.PI) / (speedController*0.2)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*200)) * time.getMilliseconds());
        //void ctx.translate(x, y);
        //ctx.translate(0,0);
        //void ctx.fillRect(x, y, width, height);
        ctx.translate(30,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD

        ctx.fillStyle = gradientRWM;
        ctx.beginPath(); //start the path
        //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
        ctx.ellipse(0, 0, 5, 5, Math.PI / 4, 0, 2 * Math.PI)
        ctx.stroke(); //end the path
        ctx.fill(); //fill up whatever was generated
        ctx.restore();
        ctx.restore();

        ctx.save();
        ctx.translate(150,150);
        ctx.translate(200,180);
        ctx.save()


        
    //OUTER WORLD
    ctx.rotate(((2 * Math.PI) / (speedController*0.4)) * time.getSeconds() + ((2 * Math.PI) / ((speedController)*400)) * time.getMilliseconds());
    //void ctx.translate(x, y);
    //ctx.translate(0,0);
    //void ctx.fillRect(x, y, width, height);
    ctx.translate(380,0) //WE DRAW TO THE CLOSER ORBIT POSSIBLE. HELL WORLD

    ctx.fillStyle = gradientRWM;
    ctx.beginPath(); //start the path
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx.ellipse(0, 0, 8, 8, Math.PI / 4, 0, 2 * Math.PI)
    ctx.stroke(); //end the path
    ctx.fill(); //fill up whatever was generated

    

    

//void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    //ctx.drawImage(sun, 200, 200, 300, 300);

    window.requestAnimationFrame(createSystem);

}

initialize();