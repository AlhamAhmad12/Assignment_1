/*
38 : Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

39 : City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.
*/


// Function to describe a city's location
function describeCity(city: string, country = 'USA') {
    console.log(`${city} is in ${country}.`);
}

// Calling describeCity() for three different cities
describeCity("Karachi", "Pakistan");
describeCity("New York");
describeCity("Tokyo", "Japan");


// Function to format city and country
 function cityCountry(city:string, country:string) {
     return `${city}, ${country}`;
}
// Calling cityCountry() for three city-country pairs
console.log(cityCountry("Lahore", "Pakistan"));
console.log(cityCountry("Paris", "France"));
console.log(cityCountry("Sydney", "Australia"));

