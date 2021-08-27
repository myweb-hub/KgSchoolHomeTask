const user = {
    person: 'John',
    
    sayHi(){
        return `Hello, ${this.person}!`;
    },

    sayBye:()=> {
        return `Goodbye, ${this.person}!`;
    }

};

console.log(user.sayHi()); // 'Hello, John' is logged, everything is good.
console.log(user.sayBye()); // 'Goodbye, undefined' is logged since the arrow function doesn't have its own bindings to 'this.'. Therefore it is not able to access the property 'John' via 'this.person'.    