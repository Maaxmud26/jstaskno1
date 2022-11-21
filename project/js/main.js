var r =3;
var s = Math.PI*r*r;
console.log(s);

//Date

var date = new Date().getHours();
console.log(date);

if(date>=6 && date<12) {
alert("Good Morning")
document.body.style.backgroundColor="white";
}
else if(date>=12 && date<18){
    alert("Good afternone")
    document.body.style.backgroundColor="orange";
}
else if(date>=18 && date<24){
    alert("Good midnight")
    document.body.style.backgroundColor="red";
}
else{
    alert("Good night")
    document.body.style.backgroundColor="black";
}