// 34. Pizzas: Think of at least three kinds of your favourite pizza. Store these pizza names in a array, and then use 
// a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of 
// the pizza. For each pizza you should have one line of output containing a simple statement lile i like 
// personal pizza. 
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should 
// consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as i
// really love pizza!

let favourite_pizza : string [] = ["Margherita", "Pepperoni", "Fajita"]
for (let pizza of favourite_pizza) {
    console.log(`I really like ${pizza} pizza!`)
}
console.log("I really love pizza!")