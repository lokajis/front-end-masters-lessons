// Calling a f() outside of the f() call in witch it was defined


function outer (){
    let counter = 0;
    function incrementCounter (){
counter ++ ;
    }

    return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
//closures counter = 1 
myNewFunction();
//closures counter = 2

const anOtherFunction = outer();
anOtherFunction();
//closures counter = 1 
anOtherFunction();
//closures counter = 2

//deferent closure fot eatch f()