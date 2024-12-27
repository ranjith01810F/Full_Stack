// function is  a block of code designed to perform a particular task
/* 
syntax

function <function name>()
{
code
}
function name()
*/

function samsung()
{
    console.log("this is samsung")
}
samsung()

var a = 10
var b =  20
function add(){
    console.log(a+b)
}
add()

var factor =  "Dhanush"
var fplayer = "Dhoni"
var fmovie = "polladhavan"

function Favourite(){
    console.log("Fav Actor:"+factor)
    console.log("Fav player:"+fmovie)
    console.log("Fav movie:"+fmovie)
}
Favourite()

//parameters in function

function area(l,b){
    var a = l*b
    console.log("Area="+a)
}
var len=10
var ber=20
area(len,ber)

//Return Type

function name(){
    return "Ranjith"
}

var a = name()
console.log(a)

/* 
create a funciton called add which should take 2 parameter a and b 
and it should return the addition of two variables
*/

function add (a,b){
    return a+b
}
var total= add(10,20)
console.log(total)