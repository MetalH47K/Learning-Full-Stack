console.log('Meal Maker Application')
console.log();

let menu = {
  _courses:
  {
  _appetizers: [],
  _mains: [],
  _desserts: [],
  //appetizer setter 
  set appetizers(appetizer){
      this._appetizers.push(appetizer);
  },  
  //appetizer get
  get appetizers(){
  	return this._appetizers;
  },
  //Main setter  
  set mains(main){
     this._mains.push(main);
  },
  //Main getter
  get mains(){
   return this._mains;
  },
  //Desserts set
  set desserts(dessert) {
      this._desserts.push(dessert);
  },
  //Desserts get
  get desserts(){
    return this._desserts;
  }
    
},
  
  get courses(){
   return {
     appetizers: this._courses.appetizers,
     mains: this._courses.mains,
     desserts: this._courses.desserts,
   }
  },
  
  addDishToCourse (courseName, dishName, dishPrice){
    
    const dish = {
      _name: dishName,
      _price: dishPrice, 
      
      set name(dishName){
        if(typeof dishName === 'string'){
          this._name = dishName;
          console.log(`${dishName} has been added.`);
        }else{
          console.log(`${dishName} is not a valid choice.`);
        }
      },
      
      set price(dishPrice){
        if(typeof dishPrice === 'number'){
          this._price = dishPrice;
          console.log(`Price has been set to ${dishPrice}`);
          console.log('------------------------------') //Creating Space
        }else{
          console.log(`${dishPrice} is not a dollar amount.`);
        }
        
  		       
      },
      
  	}; /* closes dish dictionary */
    
    if (this._courses[courseName] == undefined){
      console.log('oops')
    } else {	
      dish.name = dishName
      dish.price = dishPrice
    	this._courses[courseName].push(dish);
    }
      },
  

  
  getRandomDishFromCourse(courseName) {
   
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
    
  },
  
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = this._courses.appetizers.price + this._courses.mains.price + this._courses.desserts.price;
    
    return `So, you'll be starting off with ${this.appetizer} followed by a ${this.main} to your liking. Then to top the night off a delicious ${this.desserts}. Your total for this meal is $${this.totalPrice}.`
  },
};



menu.addDishToCourse('mains','Baby Back Ribs', 22.50);
menu.addDishToCourse('mains','Crusted Garlic Chicken', 15.30);
menu.addDishToCourse('mains','Orange Chicken Bowl', 12.10);
menu.addDishToCourse('desserts','Blondie', 7.15);
menu.addDishToCourse('desserts','Vanilla Icescream', 6.12);
menu.addDishToCourse('desserts','Apple Turnovers', 8.00);
menu.addDishToCourse('appetizers','Boneless Wings', 10.50);
menu.addDishToCourse('appetizers','Spinach Dip', 8.50);
menu.addDishToCourse('appetizers','Avacado Egg Rolls', 13.10);

let meal = menu.generateRandomMeal();

if (menu._courses = 'undefined') {
  console.log();
  console.log(`Help me! Courses Undefined`);
  console.log();
} else {
  
}

console.log(menu)

console.log();
console.log(meal);