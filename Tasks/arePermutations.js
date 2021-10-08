// Javascript program to check whether two strings are 
// permutations of each other


//Function to check whethet two strings are
// Permutation of each other

function arePermutations(str1, str2){
    // Get lengths of both string
    let n1 = str1.length;
    let n2 = str2.length;
    // If length of both strings is not same,
    // then they cannot be Permutation

     if (n1 != n2){
         return false;
     }

     let ch1 = str1.split(' ');
     let ch2 = str2.split(' ');

     // Sort both strings
     ch1.sort();
     ch2.sort();

     // Compare sorted strings

     for(let i=0; i<n1; i++){

        if(ch1[i] != ch2[i]){
            return false;
        }
        return true;
     }
}

// Test Code

let str1 = "test";
let str2 = "test";

if (arePermutations(str1, str2)){
    alert("Yes");

}
else {
    alert("No");
}