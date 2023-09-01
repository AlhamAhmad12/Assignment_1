function makeSandwich(...items: string[]) {
    console.log("Making a sandwich with the following items:");
    for (const item of items) {
        console.log(item);
    }
    console.log("Enjoy your sandwich!\n");
}

// Call the function three times with different numbers of arguments
makeSandwich('Lettuce', 'Tomato', 'Cheese');
makeSandwich('Ham', 'Swiss Cheese', 'Mustard', 'Pickles');
makeSandwich('Egg', 'Chicken');