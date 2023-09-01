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

