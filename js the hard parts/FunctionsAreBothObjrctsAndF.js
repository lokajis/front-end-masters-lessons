function multiplyBy2 (num) {
    return( num*2);
}

multiplyBy2.store = 5;
multiplyBy2(3);

multiplyBy2.store;
multiplyBy2.prototype;


console.log(multiplyBy2);

//Functions are both objects and functions in js at the same time 
//Prototipe is an empty object that every f() have and can be accesed with the dot notation
//all the new objects are being stored in thar prototype object 