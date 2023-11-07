// Write your code here
class Book {
  constructor(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailability;
  }

  getAvailability() {
    if (numCopies === 0) {
      return "out of stock";
    } else if (numCopies < 10) {
      return "low stock";
    }
    return "in stock";
  }

  sell(numSold = 1) {
    this.numCopies -= numSold;
  }

  restock(numCopies = 5) {
    this.numCopies += numCopies;
  }
}