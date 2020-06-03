const menu = {
  _courses:{
     appetizers:[],
     mains:[],
     desserts:[]
  },
  get appetizers(){
    return this._courses.appetizers;
  },
  get mains(){
    return this._courses.mains;
  },
  get desserts(){
    return this._courses.desserts;
  },
  set appetizers(data){
    this._courses.appetizers = data;
  },
  set mains(data){
    this._courses.mains = data;
  },
  set desserts(data){
    this._courses.desserts = data;
  },
  get courses(){
    //return this._courses;
    return{
    apptizers:this.appetizers,
    mains: this.mains,
    desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
       name: dishName,
       price: dishPrice,
    };
    //return this._courses[courseName].push(dish);
    //console.log(courseName);
  //console.log(this._courses[courseName]);
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
   
    const dishes = this._courses[courseName];
    //console.log(dishes.length);
    const randomIndex = Math.floor(Math.random()  * (dishes.length));
    //console.log('randomIndex'+ randomIndex);
    //console.log(dishes[randomIndex]);
    return dishes[randomIndex];
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
     console.log(this.getRandomDishFromCourse('appetizers'));
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `your meal is ${appetizer.name}, ${main.name} and ${dessert.name}, and the total price is ${totalPrice} `;
  }
};


menu.addDishToCourse('appetizers','salad',4.00);
menu.addDishToCourse('appetizers','wings',4.50);
menu.addDishToCourse('appetizers','fries',5.00);
menu.addDishToCourse('mains','chicken',10.00);
menu.addDishToCourse('mains','salmon',10.00);
menu.addDishToCourse('mains','tofu',10.00);
menu.addDishToCourse('desserts','ice cream',3.00);
menu.addDishToCourse('desserts','coffee',3.50);
menu.addDishToCourse('desserts','cake',3.20);

const meal = menu.generateRandomMeal();
console.log(meal);





