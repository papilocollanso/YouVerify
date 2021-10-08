
//Using Brute Force Technique

// Javascript program to illustrate string with unique characters using brute force
// technique
// Without using using additional data structures

function uniqueCharacters(str){

    //if at any time we encounter two same characters, return false
    for (let i=0; i<str.length; i++){
        for(let j=i+1; j< str.length; j++){
             if(str[i] == str[j]){
                 return false;
             }

        }
        // If no duplicate characters encountered return true

        return true;
    }
}

// Test Code 
let input =  "YouVerify";
if(uniqueCharacters(input) == true){
    alert("The String " + input + " has all unique characters. ")
}
else{
    alert("The String " + input + "has duplicate characters. ")
}