// // Objectives:

// Students will learn to use for loops with arrays.
// Students will experiment with different approaches to implements JavaScript array methods from scratch.
// Students will reuse created functions in order to complete tasks of other functions.
// Students will learn array implementations.
// Assignment:

// Now that we have covered Arrays and Array Methods, we see how useful arrays can be. The methods that come along with arrays make them a great tool to store and manipulate data. Your new JavaScript assignment will consist of you creating the following Array functions from scratch:

// push
// pop
// toString
// join
// concat
// When creating these functions you are only allowed to use array.length so you can find the length of the array. To clear, you can not use the functions above. pretend they do not exist and you have to create them.

// Submit the link to your GitHub repo to complete this assignment!

 

// Notes to get you started:

// Create and HTML file, add the starter HTML code, and link your script. You do NOT need to create a CSS file.
// If you want to test if your code is working, use Inspect Element and click on "Console" if you want to see things you print.
// Make sure you add comments to your code so that you know what is going on.
// Reasons why I will remove points:

// Assignment is late
// Using the pre made array methods
// No comments on your JavaScript code
// You did not create all the functions
// There is an error in your code
// You did not use Git when uploading your code to GitHub

// Array
const array_stuff = ["item1","item2","item3",]

// Does functions and logs in console
console.log("LOG : " + array_stuff)
pushed("item4")
console.log("LOG : " + array_stuff)
poped()
console.log("LOG : " + array_stuff)

console.log("LOG : " + array_stuff)

console.log("LOG : " + array_stuff)

console.log("LOG : " + array_stuff)


// add Item4
function pushed (item4) {
    array_stuff[array_stuff.length] = item4;
}

// remove last 2 items
function poped (removeItem) {
    for (var i = 0;  i<2; i++) {
        array_stuff.length = array_stuff.length - 1
    }
}

// 
function toStringed () {



}

// 
function joined () {



}

// 
function concated () {



}

