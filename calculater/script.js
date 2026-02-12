
var display = document.getElementById('inputBox');
var buttons = document.querySelectorAll('button');    //quereey sesctor srif 1 ko leta he
    
var buttonsArray = Array.from(buttons);
var string=''; buttonsArray.forEach(btn=>{

  btn.addEventListener('click',(e)=> {
//    codition
if(e.target.innerHTML == 'DEL'){
    string = string.substring(0,
        string.length-1);
        display.value = string;
} 
else if(e.target.innerHTML == 'AC'){
    string =' ';
    display.value = string;

}
else if(e.target.innerHTML == '='){
    string =eval (string);
      display.value = string;
}
else{
    string += e.target.innerHTML;
    display.value = string;
 }


    // string += e.target.innerHTML;
    // display.value = string;
    // console.log(e.target.innerHTML);
});

});
// console.log(btn)
// console.log(buttonsArray);