
function userCreator (name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
return newUser;
}; 

const userFunctionStore = {
    increment: function () {
        function add1 () {        this.score++;
}
add1.call(this)
    }
 };
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5); 

user1.increment();
console.log("check stracture", user2, user1);

// if i make the tis.score++ a f add () in my increments function then  the add() if it gets runed 
// the new executional context will runn and will search user1 in glibal memory which the result 
// would be  userCreators prto stuff so useless.. and not be able to increment somting

// thus wu use add.call(this) sooo it will call the user as it would if it was not in a f()