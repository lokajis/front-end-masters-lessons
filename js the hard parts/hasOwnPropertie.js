
function userCreator (name, score) {
    const newUser = Object.create(userFunctionStoere);
    newUser.name = name;
    newUser.score = score;
return newUser;
}; 

const userFunctionStoere = {
    increment: function () {this.score++;},
    login: function() {console.log("LoggedIn");}
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5); 

console.log("here is a rooster :", user1.hasOwnProperty('score')
);


// hasOwnProperty() is a function that let me nows
// if an object or sohas a sertain propertie and returnes a bulian true or false