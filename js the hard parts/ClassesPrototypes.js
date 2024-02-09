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
