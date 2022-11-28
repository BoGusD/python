


function charCount(str){
    // make object to return ate end
    let result = {};
    // loop over string, for each character...

 //toLowerCase << change lowercase
    for(let i =0; i < str.length; i++){
        let char= str[i].toLowerCase()

        
        //if th har is a number/letter AND is a key in object, add one to count
        if(result[char]> 0){
            result[char]++;
        }
        //if the char is a bumer/letter AND not in object, add it to object and set value to 1
            else {
                result[char] = 1;
            };
        
        }
        //if character is something else (space, period, etc.) don't do anything
        // return object at end
    return result;

}
console.log(charCount('Hi there !'));