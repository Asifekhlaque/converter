function convert(){
var resultoutput= document.getElementById("result");//It is going to get the result
 let number= document.getElementById("number_conveter").value;// It is going to get the number
let result= "";//It is going to get the result
while(number>0){
    if(number &  1){
        result= result + "1"; //It is going to get the result
    }else{
        result= result + "0"; //It is going to get the result
    }
    number= number >> 1; //It is going to get the number
}
resultoutput.innerHTML= result;//It is going to get the result
}

function convert_even_odd(){
    var resultoutput= document.getElementById("result_odd");//It is going to get the result
    let number= document.getElementById("number_conveter_even_odd").value;// It is going to get the number
    let resultodd= "result_odd";//It is going to get the result
    if(number % 2 == 0){
        result= "Even"; //It is going to get the result
        resultoutput.innerHTML= "Even";//It is going to get the result
    }else{
        result= "Odd"; //It is going to get the result
        resultoutput.innerHTML= "Odd";//It is going to get the result
    }
    
}
function convert_dollar() {
    var resultoutput_doll = document.getElementById("result_dollar");
    let number = document.getElementById("number_converter_dollar").value;
    let result_doll = number * 81.98;
    resultoutput_doll.innerHTML = result_doll.toFixed(2);
  }