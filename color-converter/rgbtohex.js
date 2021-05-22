function utilrgbToHex(color)
{
   let hex;
   color=parseInt(color);
   if (color <= 9)
     hex = '0'+color;
   else
     hex = color.toString(16);
  if(hex.length===1)
     hex='0'+hex; 
   return hex;
}

function rgbToHex(red,green,blue)
{
   return '#'+utilrgbToHex(red)+utilrgbToHex(green)+utilrgbToHex(blue);
}




var red = document.querySelector("#input-red");
var blue = document.querySelector("#input-blue");
var green = document.querySelector("#input-green");
var output = document.querySelector("#output-hex");
var redslider = document.querySelector("#red-range");
var greenslider = document.querySelector("#green-range");
var blueslider = document.querySelector("#blue-range");
var conversion = document.querySelector("#to-Hex");
var clear = document.querySelector("#clear");
var colordisplay = document.querySelector("#op-color");

// function componentToHex(c) {
//     let hex = c.toString(16);
//     return hex.length == 1 ? "0" + hex : hex;
//   }
// function rgbToHex(r, g, b) {
//     return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
//   }


conversion.addEventListener('click',()=>{

   output.value = rgbToHex(red.value,green.value,blue.value);
   colordisplay.style.backgroundColor = output.value;
//    output.style.backgroundColor=hex.value; 
});

// Syncing slider to input field

function updateRedTextInput(passedvalue){
   red.value = passedvalue;
}

function updateBlueTextInput(passedvalue){
   blue.value = passedvalue;
}

function updateGreenTextInput(passedvalue){
   green.value = passedvalue;
}

clear.addEventListener('click',()=>{
   red.value = "";
   green.value = "";
   blue.value = "";
   output.value = "";
   greenslider.value = "0";
   blueslider.value = "0";
   redslider.value = "0";
   colordisplay.style.backgroundColor = "#000000";
   

});



