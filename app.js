console.log("App JS iw working!");

var ages = [23,34,45,43,23,56]

var myages = document.getElementById('my-ages');
myages.innerHTML = "Age is : " + ages;

var mypush = document.getElementById('my-push');
mypush.innerHTML = "New value 45 has been added and now the array length is  " + ages.push(45);
document.getElementById('my-after').innerHTML = "Values in the array after running the pop function : " + ages;

var mypop = document.getElementById('my-pop');
mypop.innerHTML = "Last value has been deleted : " + ages.pop();

var mylen = document.getElementById('my-len');
mylen.innerHTML = "Array length is " + ages.length;

document.getElementById('my-final').innerHTML = "Values in the array after running the pop function : " + ages;

var myshift = document.getElementById('my-shift');
myshift.innerHTML = "First value has been deleted : " + ages.shift();

document.getElementById('my-shifted').innerHTML = "Values in the array after running the pop function : " + ages;

var myunshift = document.getElementById('my-unshift');
myunshift.innerHTML = "New value 90 has been added at the beginning and now the length is array is  " + ages.unshift(90);

document.getElementById('my-unshifted').innerHTML = "Values in the array after running the pop function : " + ages;

var sortedAges = ages.sort();

document.getElementById('my-sort').innerHTML = "Ages array after sorted : " + sortedAges + " and ages array is " + ages ;



var getTotal = function(myvalue){
	var sum = 0;
	len = myvalue.length;
	console.log(len);
	for (i = 0; i < len; i++){
		sum = sum + myvalue[i];
	}
	return sum;

}


var sumOfAges = getTotal(ages);

console.log(sumOfAges);

var newages = [13,87,14,45,43,18,56]

console.log(newages);

var filterresult = newages.filter(function(value){
	return value > 15;
	// Filter in array is used to get the output as a boolean result.
});

var mapresult = newages.map((item) => {
	return item * 2;
	// Map in arrays can be used to perform athematic operations in the result.
})

console.log(filterresult);
console.log(mapresult);

console.log("Array can be reversed using array.reverse() function " + mapresult.reverse());

var mycon = ages.concat(newages);
var myconcat = document.getElementById('my-concat');

myconcat.innerHTML = "concat function combines two arrays into one and does not modify the original arrays. Arrays after concating : <code> " + mycon + "</code>";

var myjoin = ages.join(', ');

// join function in array mergers the contents into a string and places
// them in between the elements.

console.log(myjoin);




























//
