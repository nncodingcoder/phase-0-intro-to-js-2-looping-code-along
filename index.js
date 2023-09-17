// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
    //console.log(`I'm ${age} years old. Happy birthday to me!`);
    
//}

//const gifts = ["teddy bear", "drone", "doll"];
//function wrapGifts(gifts) {
  //  for (let i = 0; i < gifts.length; i++) {
      //  console.log(`Wrapped ${gifts[i]} and added a bowl!`)
      //  debugger;
   // }
   // return gifts;
//}

//wrapGifts(gifts);
const receivers = ["Guadalupe", "Ollie", "Aki"]
const event = "surprise"
function writeCards(receivers, event) {
for (let i = 0; i < receivers.length; i++) {
const newReceivers = [   
  `Thank you, ${receivers[0]}, for the wonderful ${event} gift!`,
  `Thank you, ${receivers[1]}, for the wonderful ${event} gift!`,
  `Thank you, ${receivers[2]}, for the wonderful ${event} gift!`,
];
return newReceivers

}
}

function countDown() {
    for (let i = 10; i > -1; i--) {
    console.log(i) 
}
}
