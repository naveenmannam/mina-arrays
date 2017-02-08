console.log("Object JS is connected.");

var minny = {
  firstName : "",
  lastName : "",
  dob : "",
  mob : "",
  yob : "",
  age : function(){
    var date = new Date();
    return date.getFullYear() - this.yob;
  }
}


minny.firstName = "Minny";
minny.lastName = "Mannam";
minny.dob = "10";
minny.mob = "Jun";
minny.yob = "1990";


var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var dob = document.getElementById('dob');
var mob = document.getElementById('mob');
var yob = document.getElementById('yob');
var age = document.getElementById('yob');

fname.innerHTML = "First Name : <code> " + minny.firstName  + "</code>";
lname.innerHTML = "Last Name : <code> " + minny.lastName  + "</code>";
dob.innerHTML = "Date of Birth : <code> " + minny.dob  + "</code>";
mob.innerHTML = "Month of Birth : <code> " + minny.mob  + "</code>";
yob.innerHTML = "Year of Birth : <code> " + minny.yob  + "</code>";
age.innerHTML = "Age : <code> " + minny.age()  + "</code>";


var sonu = new Object();

// Another way of creating object in javascript.
sonu.firstName = "Sonu";
sonu.lastName = "Joel"
sonu.age = 15;

console.log(sonu.firstName);
console.log(sonu.lastName);
console.log(sonu.age);
