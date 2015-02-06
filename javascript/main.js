// main.js

console.log("hello there");

var a = 5;
var b = 7;
console.log("Value a = " + a);
console.log("Value b = " + b);
console.log(a + b);

var name = "Eric ";
var adjective = "sucks.";

alert(name + adjective);

var metal = ["Death metal", "Melodic metal", "Thrash metal"];
var dance = ["Trance", "Jungle", "Hardcore"];
var hipHop = ["New school hip-hop", "Old school hip-hop", "Trap"];


var genres = [metal, dance, hipHop];
console.log(genres[1][2]);
console.log(genres[2][2]);

for (var i = 0; i < genres.length; i++) {
	genre = genres[i];
	for (var j = 0; j < genre.length; j++) {
		console.log(genres[i][j]);
	};
};

var x = 3;
var y = -7;

function testValue(x, y){
	if (x > y) {
		console.log(x + " is greater than " + y);
	} else if (x < y) {
		console.log(x + " is not greater than " + y);
	} else {
		console.log(x + " is equal to " + y);
	}
}

function addNums(){
  num1 = document.getElementById('num1').value;
  num2 = document.getElementById('num2').value;
  document.getElementById('result').innerHTML = (parseInt(num1) + parseInt(num2));
}

testValue(x, y);

var name1 = "Eric";
var name2 = "Frank";
var name3 = "Bill";
var name4 = "Eric";

function sameNameTest(a, b) {
	if (a === b) {
		console.log(a + " and " + b + " have the same name!")
	} else {
		console.log(a + " and " + b + " do NOT have the same name.")
	}
}

sameNameTest(name1, name2);
sameNameTest(name1, name3);
sameNameTest(name1, name4);

function nameReturner(){
	name = document.getElementById('enteredName').value;
	document.getElementById('resultName').innerHTML = name;
}

function newNameTest(){
	name1 = document.getElementById('newName1').value;
	name2 = document.getElementById('newName2').value;
	if (name1.toUpperCase === name2.toUpperCase) {
		document.getElementById('nameMatchResult').innerHTML = "Those names match!";
	} else {
		document.getElementById('nameMatchResult').innerHTML = "Those names do not match.";
	}

}

function doorChooser(n) {
	if (n === 1) {
		document.getElementById('winnings').innerHTML = "You win a turkey!";
	} else if (n === 2) {
		document.getElementById('winnings').innerHTML = "You win a neeeew car!";	
	} else {
		document.getElementById('winnings').innerHTML = "You win jack shyiiit. Wah wah.";
	}
}










