// // Setup
// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
//   };
  
//   // Only change code below this line
  
//   var playerNumber = 16 ;       // 
//   console.log(playerNumber);

//   var player = testObj[playerNumber];   // 
//    console.log(player);

var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];
function lookUpProfile(name, prop) {
  //interact through contacts if you find the contact with matching name continue to match prop, else no property , else no match
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}