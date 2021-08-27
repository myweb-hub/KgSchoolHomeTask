const student = {
    greeting: 'Hello, Student!',


    getGreeting(){
        const greeting = 'Hello, Earth!';
        return this.greeting;
    },
};

console.log(student.getGreeting()); //What is logged?

//Hello,Student! is logged because 'student' is the context of what this.greeting is referring to. Therefore, method getGreeting is ignored and instead of 'Hello, Earth!' we get 'Hello, Student!'