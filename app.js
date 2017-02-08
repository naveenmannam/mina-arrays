console.log("App JS iw working!");

var ages = [23,34,45,43,23,56]

var myages = document.getElementById('my-ages');
myages.innerHTML = ages;

var mypush = document.getElementById('my-push');
mypush.innerHTML = "value  has been added : " + ages.push(45);
document.getElementById('my-after').innerHTML = "Values in the array after running the pop function : " + ages;

var mypop = document.getElementById('my-pop');
mypop.innerHTML = "Last value has been deleted : " + ages.pop();

document.getElementById('my-final').innerHTML = "Values in the array after running the pop function : " + ages;

var myshift = document.getElementById('my-shift');
myshift.innerHTML = "First value has been deleted : " + ages.shift();

document.getElementById('my-shifted').innerHTML = "Values in the array after running the pop function : " + ages;


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