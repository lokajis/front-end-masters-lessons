
function limitedRepeat() {
    // ADD CODE HERE
    let i = 0;
    
    function hiing () {
      i++;
      console.log("hi for now",i)
      if (i>4){ clearInterval(myInterval);}  

    }
    
 const myInterval = setInterval(hiing, 1000);
  

 

  }
  // Uncomment the following line to check your work!
//   limitedRepeat(); // should log (every second, for 5 seconds): hi for now
  

/* CHALLENGE 6 */

function everyXsecsForYsecs (func, interval, duration) {
    let currentDuration = 0;
    let id = setInterval(() => {
        func()
      currentDuration += interval
      if(currentDuration >= duration) {
        clearInterval(id)
      }
    }, interval)
  }
  // Uncomment the following lines to check your work!
  function theEnd() {
      console.log('This is the end!');
  }
  everyXsecsForYsecs(sayHi, 1000, 50000); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
  
  

