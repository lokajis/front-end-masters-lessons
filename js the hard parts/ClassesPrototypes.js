//create objects to learn 

const user1= {
    name:"Will",
    score:3,
    increment: function () {user1.score++; }

};
console.log("users score is", user1.score);
user1.increment(); //user1.score -> 4

console.log("users score after function is", user1.score);


// creating objects with dot notation

const user2={}; // creating an empty object 

//assign proprerties to that object

user2.name = "Tim";
user2.score= 6;
user2.increment = function () {
    user2.score++;
};

console.log("this is te stracture of my second object", user2);


// creating user3 using object.create

const user3 = Object.create(null);

user3.name = "Eva";
user3.score= 9;
user3.increment = function () {
    user2.score++;
};

console.log("this is te stracture of my second object", user3);


//started braking DRY principle...


//Solution 1 Generate object usinf a function

function userCreator (name,score){

    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function () {
        newUser.score++;
    };
    return newUser;

};

const user11 = userCreator("Will", 3);
const user12 = userCreator("Tim", 5);

user11.increment()
console.log("Lets check our new users stracture :", user11, user12 );

// the problem with this is that when you have a lot of yousers the f() is being copied to all af thair objects witch is a big waste of memory


//Solution 2 Using the prototype chain 

function userCreator2 (name, score) {
    const newUser = Object.create(userFunctionStoere);
    newUser.name = name;
    newUser.score = score;
return newUser;
}; 

const userFunctionStore = {
    increment: function () {this.score++;},
    login: function() {console.log("LoggedIn");}
};
const user21 = userCreator("Will", 3);
const user22 = userCreator("Tim", 5); 

user21.increment();
console.log("check stracture", user22, user21);

//the user21 has a hidden propertie named __proto__ witch limkes it with userFunctionStore 
// there is a link that connects newUser userFunctioStore user1 user2 (and i think that its called prototype chane)
// user1 i find in global memory but increment method i don find in global m m, so js when does not find something in global memory
//it chwchs for its prottos that are linked
// proto is a propertie like the global memory
// By puting the userFunctionStore in the object.create(userFunctionStore) we are adding the functions in the object and we cam acces it
// by the proto property using the prototipe chane
// proto propertie is 'hiddeen' but you can see it in dev tools by down arrow and acces it with the .increment
// this is for getting the plase of users ... (user11.... user999)
//what ever is on the left side of thes (user21) gets the place of thus 
//what ever is on the left side of thes (user21) gets the place of thus etc user21.increment(); is => this.score++;
//that means that "this" is going to be user21.score++

// RUN A F() THAT IS AVAILABLE TO MENY DIFFERENT OBJCTS THROUG THE PROTO LINK AND MAKE SHOUR TO WRITE IT WITH "this"
 
