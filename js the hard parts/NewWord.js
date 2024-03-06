
function userCreator(name, score) {
    this.name = name;
    this.score = score;
};

userCreator.prototype.increment = function(){this.score++};  //.prototypy I have acces to the object and with the next . i just create 
userCreator.prototype.login = function(){console.log("login");}; // an object in the prototype


const user1 = new userCreator("Will", 3);
const user2 = new userCreator("Tim", 5);

user1.increment();
console.log("check stracture", user2, user1);

// New creartes a new object AND
//Returns the new user object


//  with the new word we are calling / executing the f() userCreator


