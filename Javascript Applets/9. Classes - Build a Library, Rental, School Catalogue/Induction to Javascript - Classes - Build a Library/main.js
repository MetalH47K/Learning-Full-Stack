class Media {constructor(title) {
  this._title = title; 
  this._isCheckedOut = false; 
  this._ratings = []}
             
  get title() {return this._title;}
  get isCheckedOut() {this._isCheckedOut;}
  get ratings() {return this._ratings;}
             
  set isCheckedOut(Check) {this._isCheckedOut = Check;}
  toggleCheckOutStatus() {this._isCheckedOut = !this._isCheckedOut;}
             
  getAverageRating() {
    const currentSum = this.ratings.length; //Thought this might help fix it but it doesn't. 
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);}
  addRating(rate) {this._ratings.push(rate);} //I don't quite get this.
  }
  
class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
    this._isCheckedOut = false;
    this._ratings = [];}
    
  get pages() {return this._pages;}
  get author() {return this._author;}  
  
  }

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._isCheckedOut = false;
    this._ratings = [];}
  
    get director() {return this._director;}
  	get runTime() {return this._runTime;}  
  
  }


//Adding a book and Movie using an Index numbering system instead of name of media.
const index1 = new Book('A Short History of Nearly Everything', 'Bill Bryson', 500);
const index2 = new Movie('Speed', 'Jan de Bont', 116);

index1.toggleCheckOutStatus()

// Adding Ratings to Book
index1.addRating(4)
index1.addRating(4)
index1.addRating(5)
index1.addRating(1)
// Adding Ratings to Movie
index2.addRating(1)
index2.addRating(1)
index2.addRating(3)
index2.addRating(1)
index2.addRating(3)
index2.addRating(1)
index2.addRating(3)

console.log(index1);
console.log(index1.getAverageRating()) //Doesn't seem to be averaging out the ratings in the list

console.log(); // Adding Space to the Console 

console.log(index2); //Checking the Movie Speed Details
console.log(index2.getAverageRating()) //Doesn't seem to be averaging out the ratings in the list

