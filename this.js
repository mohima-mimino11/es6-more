class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  sleep(){
    console.log(`Sleeping now ${this.name}`);
  }
  activity(){
    this.sleep()
  }
}

const kodom = new Person('kodom ali', 22);
console.log(kodom);
kodom.sleep();
const badam = new Person('kacha badam', 23);
badam.sleep();

// confusing
const lazy = kodom.sleep;
lazy()