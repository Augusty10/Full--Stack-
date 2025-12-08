 const person ={
    name: "Raj Sahu ",
    greet(){
        console.log(`Hi, I am ${this.name}`);
        
    }
 };

 person.greet();

 const greetFunction = person.greet
 greetFunction()

 const boundGreet = greetFunction.bind({name : "Batman "});
 boundGreet(); 

 
 // Bind  Call and aplly 