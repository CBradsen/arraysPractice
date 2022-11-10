// declare a variable that stores an Array of 4 strings
var cats = ["Calico", "Alley", "Barn", "Unicorn"]
var houseSeatsOut = [23, 50, 102, 87]
var NotSureAboutThis = ("After searching our class files, google, and MDN, I am still not sure how to make an array of booleans.")

// .push will add these two elements to the end of the array 
cats.push("Fat", "Furry")
console.log(cats);

/* the .unshift method will add these elements to the beginning of the array. */
houseSeatsOut.unshift(3, 18, 19, 20)
console.log(houseSeatsOut);

/* Index positions: Counting starts with 0 in javascript and most programming languages. So in an array, the first index position is 0, then 1 and etc. In the variable cats, Calico is in index position 0. It is the first element in the array. To access this first element we could put the index position inside square brackets. Like this:  [0] */

