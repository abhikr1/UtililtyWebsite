const red = document.querySelector("#output-red");
const blue = document.querySelector("#output-blue");
const green = document.querySelector("#output-green");
const hexinput = document.querySelector("#input-hex");
const conversion = document.querySelector("#toRGB");
const clear = document.querySelector("#clear");
var colorpreview = document.querySelector("#op-color");

conversion.addEventListener('click',()=>{


    const hex = hexinput.value
    if( hex.length==6 ){

        red.value = parseInt(hex[1]+hex[2],16);
        let r =  red.value;
        green.value = parseInt(hex[3]+hex[4],16);
        let g = green.value;
        blue.value = parseInt(hex[5]+hex[6],16);
        let b = blue.value;
        let css = 'rgb('+r+','+g+','+b+')';
        colorpreview.style.backgroundColor = css;
    }

    if(hex.length == 3){
        let r = hex.substring(0,1);
		let g = hex.substring(1,2);
		let b = hex.substring(2,3);
		r=r+r;
		g=g+g;
        b=b+b;
        
        red.value = r;
        green.value = g;
        blue.value = b;
        let css = 'rgb('+r+','+g+','+b+')';
        colorpreview.style.backgroundColor = css;

    }
    
    
    

});

clear.addEventListener('click',()=>{

    red.value = "";
    green.value = "";
    blue.value = "";
    hexinput.value = "";
    colorpreview.style.backgroundColor = "#000000";


});

