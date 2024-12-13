const products = [
  {id:1, name:'lenovo laptop', price: 65000},
  {id:2, name:'dell', price: 45000},  
  {id:3, name:'hp', price: 40000},  
  {id:4, name:'macbook', price: 150000},  
]

// similar
// has some properties and methods
class Product{
  country = 'Bangladesh';
  constructor(name){
    this.name = name;
  }
  speak(talk){
      console.log(`talking about ${talk}`);
  }
}

const lenovo = new Product('lenovo');
// console.log(lenovo);
// lenovo.speak('oba kita ko')

class Teacher{
  constructor(name, subject){
    this.name = name;
    this.subject = subject;
  }
  lecture(){
    console.log('Sir is teaching Math');
    
  }
}

const tapan = new Teacher('Tapan Sir', 'Physics');
console.log(tapan);
