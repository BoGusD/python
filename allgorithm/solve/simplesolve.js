

function charCount(str){

    let result = {};
    for (let char of str){
  if(isAlpahNumeric(char)){
    char = char.toLowerCase();
    result[char] = ++result[char] || 1;
  }           
}      
  
    return result;
   
}
function isAlpahNumeric(char){
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numberic (0-9)
    !(code >64 && code < 91) && //upper alpha (A-Z)
    !(code > 96 && code <123)) { // lower alpha (a=z)
    return false;
    }
    return true;
}

console.log(charCount('Hi there !'));



