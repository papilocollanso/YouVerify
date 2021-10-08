// Trim the string and call replaceAll() method
//to replace all space Unicode to %20

// JavaScript implementation of the above approach
// Instantiate the string
var str = " I am a Vuejs Engineer at Youverify"

// Trim the given string
str = str.trim();

//Replace All space (unicode is \\s) to %20
str = str.replaceAll(" ", "%20");

// Test Code
alert(str);