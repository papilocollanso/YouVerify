//Javascript Algorithm to check for  String Compression

const compressString = (s1) => {
    let charMap = new Map();
    for (let i=0; i<s1.length; i++){
        charMap.set(s1[i], charMap.get(s1[i])+1 || 1);
    }
    let s = '',
    mapKeys = charMap.keys(),
    mapValues = charMap.values();
    charMap.forEach(function(value,key, map){
           s += key + value;
    });
    return s;
}
 // Test Code
let a = 'aabcccccaaa'
//compressed string should be smaller than the original string
// Else return the original string

alert(compressString(a));