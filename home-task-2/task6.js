//Create a Vector object that supports addition, subtraction, dot products. So, for example:

//If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);

a.add(b); //should return a new Vector([4, 6 ,8])
a.subtract(b); //should return a new Vector([-2, -2, -2])
a.dot(b); //should return 1*3 + 2*4 +3*5 = 26
a.add(c); //throws an error

//Also provide:
//a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' 
//an equals method, to check that two vectors that have the same components are equal