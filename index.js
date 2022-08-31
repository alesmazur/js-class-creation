// lets make Guitar class
class Guitar {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.quantity = 0;
  }
  upQty() {
    this.quantity += 1;
  }
  downQty() {
    this.quantity -= 1;
  }
}

const newGuitar = new Guitar("Fender", "Jaguar");

console.table(newGuitar);

console.log(newGuitar instanceof Object);
console.log(newGuitar instanceof Array);
console.log(newGuitar instanceof Guitar);

newGuitar.upQty();
console.table(newGuitar);
newGuitar.upQty();
console.table(newGuitar);
newGuitar.downQty();
console.table(newGuitar);

console.log(Guitar.prototype.constructor);
console.log(newGuitar.hasOwnProperty("brand"));

// new class Comment creation

class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }
  upVote() {
    this.votesQty += 1;
  }
  // lets make static method of class Comment
  static mergeOfComments(first, second) {
    return `${first} ${second}`;
  }
}

console.log(
  Comment.mergeOfComments(
    "i am first comment",
    "i am second comment and i added to first one "
  )
);
