//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// Define the guest list as an array of strings
var guestList = ["Alham Ahmad", "Haider Khan", "Hurira Khan", "Wadoon Ahmad", "Khyam Ahmad", "Abu baker"];
var invitions = function (names) {
    console.log("Dear ".concat(names, " \n You are invited to dinner at my place. It would be an honor to have you join us!\n Sincerely, Alham Ahmad"));
};
guestList.forEach(function (gust) {
    invitions(gust);
});
