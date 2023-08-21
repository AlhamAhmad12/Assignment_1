//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


// Define the guest list as an array of strings

//Q14: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.


var guestList = ["Khayam Khan", "Hurira Khan", "Wadoon Ahmad", "Malik Baber"];
//Use function to print invitation messages
var printInvitations = function (guests) {
    for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
        var guest = guests_1[_i];
        console.log("Dear ".concat(guest, ", you are invited to dinner at my place. Please join us!"));
    }
};
printInvitations(guestList);
// Print a message about the guest who can't make it
console.log("Unfortunately, ".concat(guestList[1], " can't make it to the dinner."));
// Someone can't make it
guestList.splice(1, 1)[0];
// Replace or add new guest
guestList.splice(1, 0, "Abu baker");
// updated guest list message
printInvitations(guestList);
