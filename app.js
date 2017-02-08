console.log("App JS iw working!");

var ages = [23,34,45,43,23,56]

var myages = document.getElementById('my-ages');
myages.innerHTML = "Age is : " + ages;

var mypush = document.getElementById('my-push');
mypush.innerHTML = "New value 45 has been added and now the array length is  " + ages.push(45);
document.getElementById('my-after').innerHTML = "Values in the array after running the pop function : " + ages;

var mypop = document.getElementById('my-pop');
mypop.innerHTML = "Last value has been deleted : " + ages.pop();

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


var sumOfAges =getTotal(ages);

console.log(sumOfAges);