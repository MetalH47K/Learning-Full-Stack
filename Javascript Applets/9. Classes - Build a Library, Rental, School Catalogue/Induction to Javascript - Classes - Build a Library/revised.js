class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = []}
  
  get media() {return this._media}
  
  get isCheckedOut() {
    if (this._isCheckedOut === true) {
      return 'Currently Checked Out'}
    else {return 'Currently Available'}}
       
  get ratings() {return this._ratings}
  
  set isCheckedOut(newStatus) {this.isCheckedOut = newStatus}
  
  toggleCheckOutStatus() {this._isCheckedOut = !this._isCheckedOut}
  		
  getAverageRating() {
    const lengthOfArray = this.ratings.length;
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    return Math.floor(ratingsSum / lengthOfArray)}
  
  addRating(rating) {
        if (rating <= 5) {
        this._ratings.push(rating)}
    		else {console.log('Invalid Entry, - Enter a number 1-5')}}
  
  } //END OF MEDIA CLASS

class Book extends Media {
  constructor(title, author, pages) {
    super(title)
    this._author = author
    this._pages = pages}
  
  get author() {
    return this._author}
  
  get pages() {
    return this._pages}
} // END OF BOOK CLASS

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director
    this._runTime = runTime}
  
  get director() {
    return this._director}
  
  get runTime() {
    return this._runTime}
} // END OF MOVIE CLASS

class CD extends Media {
  constructor(title, genre, songTime) {
    super(title);
    this._genre = genre
    this._songTime = songTime}
  
  get genre() {
    return this._genre}
  
  get songTime() {
    return this._songTime}
} // END OF MOVIE CLASS

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(4)
console.log(historyOfEverything)
console.log(historyOfEverything.isCheckedOut)

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(4)

console.log(historyOfEverything.getAverageRating())

const speed = new Movie('Speed', 'Jan de Bont', 116)
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)
speed.addRating(5)
speed.addRating(5)
speed.addRating(4)
speed.addRating(1)
speed.addRating(1)
speed.addRating(4)
console.log(speed.getAverageRating())



