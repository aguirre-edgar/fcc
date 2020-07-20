class Person {
    constructor(first name, last name, age) {
      this._first_name = first name;
      this._last_name = last name;
      this._age = age;
      this._id = 0;
    }
  
    get first name() {
      return this._first_name;s
    }
    get last name() {
        return this._last_name;
      }
      get age() {
        return this._age;
      }
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior ++;
    }
  }
   
   const halley = new person('Halley');
  console.log(halley.first name); // Print name value to console
  console.log(halley.last name); // Print name value to console
  console.log(halley.age); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console
  halley.incrementBehavior(); // Add one to behavior

  console.log(halley.first name); // Print name value to console
  console.log(halley.last name); // Print name value to console
  console.log(halley.age); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console
  halley.incrementBehavior(); // Add one to behavior