
function userCreator(name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};

const userFunctionStore = {
    increment: function () {
        const add1 = () => {
            this.score++;
        }
        add1()
    }
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);

user1.increment();
console.log("check stracture", user2, user1);

// arrow functions are lexicly scoped soo when we rune it "this" is determined were the f() was saved
// use arrow f() when you want to be scope specific