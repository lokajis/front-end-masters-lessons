function printHello (){
    console.log("hello");
 }
 setTimeout(printHello, 0);
 console.log("me first");

 //set timer is a web brouser aplication, so js just sent the setTimeout comant to the browser and continuses to the  console.log("me first"); 
 //even though it is second it is actually printed first 