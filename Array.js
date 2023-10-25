// Arrays
const array_stuff = ["item1","item2","item3",]
const array_2_part_A =["a1","a2","a3"]
const array_2_part_B = ["b1","b2","b3"]


// Does functions and logs in console
console.log("Starting - LOG : " + array_stuff)
pushed("item4")
console.log("Push - LOG : " + array_stuff)
poped()
console.log("Pop - LOG : " + array_stuff)
toStringed()
console.log("toString - LOG : " + toStringed())
joined()
console.log("joined - LOG : " + joined())
concated()
console.log("concated - LOG : " + concated())


// add Item4
function pushed (item4) {
    array_stuff[array_stuff.length] = item4;
}

// remove last 2 items
function poped (removeItem) {
    for (var i = 0;  i<1; i++) {
        array_stuff.length = array_stuff.length - 1
    }
}

// toString but it's manual... we grab the values of array_stuff, and put them 
function toStringed () {
    var divider = ""
    for (var i = 0; i < array_stuff.length; i++) {
        if(i > 0) {
            divider += ',';
        }
        divider += array_stuff[i];
    }
return divider;
}
 

// it's toString, but with "/" instead of "," 
function joined () {
    var divider = ""
    for (var i = 0; i < array_stuff.length; i++) {
        if(i > 0) {
            divider += '/';
        }
        divider += array_stuff[i];
    }
return divider;
}

// adds part A and part B together to get the 2nd array.
function concated () {
    var array_stuff_2 = array_2_part_A + "," +array_2_part_B
    return array_stuff_2
}