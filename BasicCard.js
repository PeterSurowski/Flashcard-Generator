//Does the following command export the file?
module.exports = BasicCard

//Let's make the first constructor
function BasicCard(front, back) {
    this.front = front;
    this.back = back;
};
var firstPresident = new BasicCard("Who was the first president of the U.S.A.?", "George Washington");

console.log(firstPresident.front)