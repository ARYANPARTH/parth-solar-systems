var v,n,s,j,e,su,st;
var vimg,nimg,jimg,simg,eimg,suimg,stimg;
var angle = 5;
var anglespeed = 1.2;
var box1;

function preload(){
  vimg=loadImage("v.jpg");
  eimg=loadImage("earth.jpg");
  nimg=loadImage("n.jpg");
  simg=loadImage("s.jpg");
  jimg=loadImage("j.png");
  suimg=loadImage("download.png");
  stimg=loadImage("star.jpg")
}

function setup() {
  createCanvas(800,800);
  st=createSprite(400,400);
  st.addImage(stimg);
  st.scale=1.8;
  e=createSprite(400,600);
  e.addImage(eimg);
  e.scale=0;
  j=createSprite(200,400);
  j.addImage(jimg);
  j.scale=0.1;
  j.velocityX=1;
  j.velocityY=1;
  s=createSprite(400,400);
  s.addImage(simg);
  s.scale=0.6;
  s.velocityX=-2;
  s.velocityY=-2;
  n=createSprite(600,400);
  n.addImage(nimg);
  n.scale=0.2;
  n.velocityX=-3;
  n.velocityY=-3;
  v=createSprite(400,600);
  v.addImage(vimg);
  v.scale=0.3;
  v.velocityX=4;
  v.velocityY=4;
  su=createSprite(400,100);
  su.addImage(suimg);
  su.scale=1.0;
  box1=createSprite(200,300,1400,1);


}

function draw() {
  background(0);  
  angleMode(DEGREES);
  
 edges=createEdgeSprites();
  j.bounceOff(edges);
  s.bounceOff(edges);
  n.bounceOff(edges);
  v.bounceOff(edges);
  console.log(s.position.x);
  box1.display();
  j.bounceOff(box1);
  s.bounceOff(box1);
  n.bounceOff(box1);
  v.bounceOff(box1);
  
  drawSprites();
}