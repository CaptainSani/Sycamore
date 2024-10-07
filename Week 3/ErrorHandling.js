// Task 1
// Create a function that divides two numbers. Throw a custom error if the second number is zero.

function divideNumbers(num1, num2){
    if (num2 == 0){
        throw new Error("Divisor must be greater than zero (0)");
    }
    return num1 /  num2;
}

try{
    console.log(divideNumbers(10, 2));
    console.log(divideNumbers(50, 0));
}catch(error){
    console.log("Error: ", error.message);
}

//Task 2
// Write an async/await function that simulates fetching data. Handle errors if the data cannot be retrieved.

const fetchData = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            reject(new Error("Faild to fecth Data"));
        }, 2000);
    });
}


async function viewData(){
    try{
        const data = await fetchData();
    }catch(error){
        console.log("Error: ", error.message);
    }
}

// Calling the viewData() function
viewData();


// Task 3
// Implement error handling using promises and .catch() to simulate a network request.

const fetchDataNetwork = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Network Error"));
        }, 2000);
    });
}

fetchDataNetwork()
.then((data) =>{
    console.log(data);
})
.catch((error) =>{
    console.log("Error: ", error.message);
});