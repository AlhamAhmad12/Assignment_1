

const numbers = [1,2,3,4,5,6,7,8,9];

let position;

for(const number of numbers){
  if(number === 1){
    position = "st";
}else if (number === 2){
    position = "nd";
}else if (number === 3){
    position = "rd";
}else{
   position = "th";
}
  console.log(`${number}${position}`)
}

