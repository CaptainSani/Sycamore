// Task 1
// Create a promise-based function fetchWeather() that simulates fetching weather information for Lagos. Chain multiple .then() calls to process the result.

function fetchWeather() {
  return new Promise((resolve) => {
    console.log("Fecthing Data for Lagos...");

    setTimeout(() => {
      const weatherData = {
        city: "Lagos",
        temperature: 30,
        condition: "Sunny",
      };

      resolve(weatherData);
    }, 2000);
  });
}

// Building the weather data with chain multiple .then()
fetchWeather()
  .then((data) => {
    console.log(`Weather fetched for ${data.city}`);
    return data.temperature;
  })
  .then((temp) => {
    console.log(`The temperature is ${temp} degrees`);
    return temp < 25 ? "Today will be very Sunny!" : "It will be a cool day!";
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// Task 2
// Rewrite the fetchWeather() function using async/await

async function fetchWeather() {
  console.log("Fetching weather for Lagos...");

  return new Promise((resolve) => {
    setTimeout(() => {
      const weatherData = {
        city: "Lagos",
        temperature: 30,
        condition: "Sunny",
      };

      resolve(weatherData);
    }, 2000);
  });
}

async function processWeather(){
    try{
        const data = await fetchWeather();
        console.log(`Weather fetched for ${data.city}`);

        const temp = data.temperature;
        console.log(`The temperature is ${temp} degrees`);

        const message = temp > 25 ? "It will be very Sunny" : "It will be very cool";
        console.log(message);
    }catch(error){
        console.error(error);
    }
}

// Calling the processWeather() function
processWeather();


// Task 3
// Handle errors by rejecting the promise when the city is not "Lagos" and using try...catch to catch the error.

async function fetchWeather (city){
    console.log(`Fetching weather for ${city}...`);

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(city !== "Lagos"){
                reject(`Weather data not available for ${city}`);
            }else{
                const weatherData = {
                    city: "Lagos",
                    temperature: 30,
                    condition: "Sunny"
                };
                resolve(weatherData)
            }
        }, 2000)
    });
}

async function processWeather(city){
    try{
        const data = await fetchWeather(city);
        console.log(`Weather fetched for ${data.city}`);

        const temp = data.temperature;
        console.log(`The temperature is ${temp} degrees`);

        const message = temp > 25 ? "It will be very Sunny" : "It will be very cool";
        console.log(message);
    }catch(error){
        console.error(error);
    }
}

// Calling the processWeather() function
processWeather("Lagos");
//processWeather("Abuja")