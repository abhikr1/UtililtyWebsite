const year=document.querySelector('#year-input');
const month=document.querySelector('#month-input');
const date=document.querySelector('#date-input');
const hour=document.querySelector('#hour-input');
const minute=document.querySelector('#minute-input');
const second=document.querySelector('#second-input');
const button=document.querySelector('#convert-button');
const input=document.querySelector('#epoch-output');
const resetButton=document.querySelector('#reset-button');

resetButton.addEventListener('click',()=>{
    input.value = "";
    year.value = "";
    month.value = "";
    date.value = "";
    hour.value = "";
    minute.value = "";
    second.value = "";
  });
  
  
  
  button.addEventListener('click',()=>{
    let epochDate = new Date(parseInt(input.value));//1611041456000
    year.value = epochDate.getFullYear();
    month.value = epochDate.getMonth()+1;
    date.value = epochDate.getDate();
    hour.value = epochDate.getHours();
    minute.value = epochDate.getMinutes();
    second.value = epochDate.getSeconds(); 
  });