let r;
let theta;
class Wave{
  constructor(amplitude,period,phase)
  {
    this.amplitude=amplitude;
    this.period=period;
    this.phase=phase;
    this.pos=createVector();
    this.vel=createVector();
  }
  graph1(x)
  {
    return sin(this.phase+360*x/this.period)*this.amplitude;
  }
  graph2(x)
  {
    return cos(this.phase+360*x/this.period)*this.amplitude;
  }
  
}
let w1;
let w2;

function setup() {
createCanvas(400, 400);
r=75;
theta=0;
w1=new Wave(50,300,50);
w2=new Wave(50,300,220);
   for(let i=20;i<380;i++)
    {
      stroke(127);
      line(20,250,i,380);
    }
}

function draw() {
  background(0);
  push();
  angleMode(DEGREES);
  let angle=frameCount%360;
  fill(255);
  textSize(15);
  textAlign(LEFT,CENTER);
  text(`angle:${angle}`,25,25);
  textAlign(LEFT,BOTTOM);
  text(`sin`,7,300);
  text(`cos`,7,355);
  text(`0`,30,235);
  text(`360`,330,235);
  text(`0`,350,355-45);
  text(`1`,350,305-45);
  text(`-1`,350,355);
  noFill();
  stroke(220);
  strokeWeight(3);
  //main circle
  circle(200,100,150);
  //middle line in the circle horizontal
  line(125,100,275,100)
  //vertical line in the circle
  line(200,25,200,175);
  line(35,250,35,380); 
  line(35,305,340,305);
  line(340,250,340,380);
 
  push();
  //white circle line
 translate(width/2,height/4);
  
  let x=r*cos(-angle);
  let y=r*sin(-angle);
  stroke(255);
  line(0,0,x,y);
  //blue circle
  strokeWeight(0);
  fill(0,0,255);
  circle(x,y,10);
  pop();
   //orange circle
  strokeWeight(0); 
  fill(220,100,0);
  circle(200,y+width/4,10);
  //green circle
  strokeWeight(0);
  stroke(255); 
  fill(0,255,0);
 circle(x+width/2,100,10);

 pop(); 
  for(let i=35;i<340;i+=1)
      {        
       
        let y1=w1.graph1(i);
        stroke(0,255,0);
        circle(i,y1+height-100,1);
        stroke(220,100,0);
        let y2=w2.graph2(i);
        circle(i,y2+height-100,1);
}
 let linex=map(angle,0,360,35,340);
   stroke('grey');
  
  line(linex, 250, linex,380);
  
  
  let greenY = 50 * cos(angle);
  let orangeY = 50 * sin(angle);

  noStroke();

  fill(0,255,0);
  circle(linex, greenY+height-100, 10);
  
  fill(220,100,0);
  circle(linex, orangeY+height-100, 10);
}
