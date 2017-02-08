console.log("App JS iw working!");

var ages = [23,34,45,43,23,56]

var myages = document.getElementById('my-ages');
myages.innerHTML = ages;

var mypush = document.getElementById('my-push');
mypush.innerHTML = "value  has been added : " + ages.push(45);
document.getElementById('my-after').innerHTML = "Values in the array after running the pop function : " + ages;

var mypop = document.getElementById('my-pop');
mypop.innerHTML = "value has been deleted : " + ages.pop();

document.getElementById('my-final').innerHTML = "Values in the array after running the pop function : " + ages;
