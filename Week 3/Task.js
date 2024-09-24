// Task 1

function createCounter (){

    let counter = 0;

    return{
        increment: function(){
            counter++;
            return counter;
        },
        decrement: function(){
            counter--;
            return counter;
        },
        viewCounter: function(){
            return counter;
        }
    };
}

const mainCounter = createCounter();
console.log(mainCounter.increment());
console.log(mainCounter.increment());
console.log(mainCounter.increment());
console.log(mainCounter.decrement());
console.log(mainCounter.viewCounter());

// Task 2

const numbers  = [1,2,3,4,5];
const multiplyNumbers = numbers.map(numbers => `New number: ${numbers * 3}` );
console.log(multiplyNumbers);

// Task 3

const numbers2 = [10,15,20,25,30];
const newArray = numbers2.filter(numbers2 => numbers2 >= 20);
console.log(newArray);

// Task 4

function runTwice(func){
    func();
    func();
}
const sayMyName = () => console.log("Hello Sani Dogo!")
runTwice(sayMyName);