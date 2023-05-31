/*

/ declarartion and assigning them
var square=document.querySelectorAll("#square");
var reset=document.query("#rest")
var color=[];
var winColor,winIndex,goal,header;
var message=document.query("#message")
var numSquare=6;
var body =document.querySelector("body");
body.style.backgroundColor="#232323";
setSquareColor(numSquare);


 for(var i=0;i<square.length;i++)
{
square[i].addEventListener("click",function()
   {
       if(winColor==this.style.backgroundColor)
       convertAll(winColor);
    
      else{ this.style.backgroundColor=body.style.backgroundColor;
             message.textContent="Try Again";
          }
   
   })


} /*  
//give number between 0 to   1 and *256
function rgbGen()
{
var red=Math.floor(Math.random()*(256));
var green=Math.floor(Math.random()*(256))
var blue=Math.floor(Math.random()*(256))

var genColor="rgb("+red.toString()+","+green.toString()+","+blue.toString()+")";  
return genColor;

}

//can  win 
function convertAll()
{

header = document.querySelector("header");
for(var i=0;i<square.length;i++)
     {
      style.backgroundColor=winColor.toString();
     square[i]=style.backgroundColor;
     header.style.backgroundColor=winColor.toString();
     reset.textContent="Play Again?";   
     message.textContent="Correct!";
     }




}

function setSquareColor(numSquare)
{
header=document.querySelector("#header");
header.style.backgroundColor="steelblue";

//generating 6 color
  for (var i=0;i<numSquare;i++)
   { color[i]=rgbGen();        }

//setting the 6colors to square

for(var i=0;i<numSquare;i++)
  {
  square[i].style.backgroundColor=color[i].toString();
  }
  winIndex=Math.floor(Math.random()*color.length);
  goal=document.querySelector("#goal");
  goal.textContent=color[winIndex];
  winColor=color[winIndex];
  message.textContent="";



}
reset.addEventListener("click",function() {
 setSquareColor(numSquare);
reset.textContent="";
});

//



 
  
u=document.getElementsByClassName("square");
u.addEventListener("click",g)
function g()
{   
   


}
  

/*function g(){
 //feed= document.getElementById("reset")
   alert("Helllo Programmer of Skills");
}*/
  

 //color generator

 var genColor;
 var red,blue,green; 
 var message=document.query("#message");
 var upcolor,downcolor;
  
function gen()
{
 //return genColor;
}
 


 function g()
 {  
 

  for (i=0 ; i<6;i++)//outer loop
  {
    for(var i;i<6;i++)//inner loop
{ red=Math.floor(Math.random()*256);
 green=Math.floor(Math.random()*256);
 blue=Math.floor(Math.random()*256);
 genColor="rgb("+red.toString()+","+green.toString()+","+blue.toString()+")";  
 document.querySelector("header").style.backgroundColor=genColor;
upcolor=genColor;
  
 //beneath for loop
 /*
 for(var i;i<6;i++)
 {
   red=Math.floor(Math.random()*256);
  green=Math.floor(Math.random()*256);
  blue=Math.floor(Math.random()*256);
  genColor="rgb("+red.toString()+","+green.toString()+","+blue.toString()+")";  
 
 
  document.querySelector("body").style.backgroundColor=genColor;
  downcolor=genColor;
  decideWin=(upcolor===downcolor)?" You Win!":"Losing !";
  message=document.write(decideWin+"<a href=RGBGame.html>Restart</a>");

}
//
*/
}
  }
  
 
}











 