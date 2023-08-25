// Q14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// Define the guest list as an array of strings





let guestList= ["Khayam Khan", "Hurira Khan", "Wadoon Ahmad", "Malik Baber"];

//Use function to print invitation messages
let printInvitations=(guests: string[])=> {
    for (let guest of guests) {
        console.log(`Dear ${guest}, you are invited to dinner at my place. Please join us!`);
    }
}

printInvitations(guestList);


/*
Q15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/

// Print a message about the guest who can't make it
console.log(`Unfortunately, ${guestList[1]} can't make it to the dinner.`);

// Someone can't make it
guestList.splice(1, 1)[0];

// Replace or add new guest
guestList.splice(1, 0, "Abu baker"); 


// updated guest list message
printInvitations(guestList);


/*

Q16

More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/

// Found More space 
console.log("Good news! We found a bigger dinner table.")

//Add one new guest to the beginning of array.
guestList.unshift("hasnain")

//Add one new guest to the middle of array.
guestList.splice(2,0,"hasham")

//Add one new guset to the last of array
guestList.push("hilal")

// print guest list message
printInvitations(guestList);


/*

Q17

Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/


// Shrinking guest list
console.log("Unfortunately, the new dinner table won't arrive in time. We can only invite two people for dinner.");

guestList.splice(0,5);

    console.log(`Sorry, ${guestList}, we can't invite you to dinner.`);


// Print invitation messages for the remaining two guests
printInvitations(guestList);

// Remove the last two names
guestList.pop();
guestList.pop();

// Print the empty list
console.log("After removing all guests, the list is now:", guestList);

// 19 : Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

//the number of people you are inviting to dinner.

console.log(`Number of people being invited to dinner: ${guestList.length}`);