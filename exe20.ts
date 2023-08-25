//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// Create an array of programming languages
const mountainsList: string[] = ["Annapurna II", "Manaslu", "Cho Oyu", "Makalu", "Lhotse", "K2", "Mount Everest"];
  
  // Print the list of programming mountains
  console.log("List of mountains:");
  for (const mountain of mountainsList) {
    console.log(mountain);
  };