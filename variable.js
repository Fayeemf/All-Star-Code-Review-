//being able to identify 3 different data types. One of the three are Number, Booleans and strings.

//Strings [Basically anything that has quotations around it.]
"Doggy"
"Bob"
"sigma"

//Number[A #]
4
4
1

//booleans are true or false. Will get be easier to understand once you go over variables. You have two values which are true and false

let growth = true

//fixing redundancy ~

let SigDig = (45 * 4 + 75 * 2);
let Stripes = (SigDig*1.5);
let Feed = (Stripes*0.2);

//For this activity mainly used the subsitution property looked at where there were repeats and made them into variables to make my life easier.


// We're going to earn a profit by reselling tickets
// We bought some tickets to see SZA!
// 4 regular tickets for $45 each and 2 front row tickets for $75 each
console.log('Cost: ' + (45 * 4 + 75 * 2));

// we're selling them for 50% more lol.
console.log('Selling price: ' + (45 * 4 + 75 * 2) * 1.5);

// But StubHub, the online ticket selling platform, charges a 20% seller fee...
console.log('Seller fee: ' + (45 * 4 + 75 * 2) * 1.5 * 0.2);

// So here's our total profit:
console.log(SigDig);
console.log (Stripes);
console.log(Feed);
//usage of 'concatination' below.
console.log (("Seller Fee: ") + (Stripes) - (Feed) - (SigDig));

//Activity 2.
//use substitution

let x = 10;
x = x + 2;
x = x + x;

console.log(x);

//Activity 3.
//you're assigning values, remember that JS reads from top to bottom. [Flow stack]
let pizza = 5;
let burger = 10;
burger = pizza;
pizza = 10;

//Activity 4.
let pizza = 5;  //Assigning pizza to the value of 5
let burger = 10; //Assigning burger to the value of 10
burger = pizza; //Now you're making both values = to each other
pizza++;  // This operator essentially means to add 1 to it.
burger--; // This operator means to subtract 1 from it.
pizza /= 2; // Operator means to divide two from it
