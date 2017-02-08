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

document.write(minny.firstName);
document.write(</br>);
document.write(minny.lastName);
document.write(</br>);
document.write(minny.dob);
document.write(</br>);
document.write(minny.mob);
document.write(</br>);
document.write(minny.yob);

console.log(minny);

var minnyage = minny.age();

console.log(minnyage);
