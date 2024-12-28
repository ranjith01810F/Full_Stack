/* Two types of operators 
increment
decrement */
/* 
in this types there are different methods
pre-increment - ++a 
pre-decrement - --a

post-increment - a++
post-decrement - a--
 */

var a = 10
a++
console.log(a)
/* 
 a = 10 -----> value will be 10
 a++ --------> still the value will be 10
 console.log(a) -----> when the increment again meets a then the increment will 
                       performed 

this means when the value incremented or decremented when it again meets the same value 
means the increment or decrment will be perfoemed */

var a = 10
var b = a++
console.log(b) // still it will be 10
console.log(a) // incremented to 11
/* 
in pre-increment or decrement it will be vise versa before hitting the value it will be 
incremented of decremented a =10-------> ++a = 11 */

var c = 20
var d =++c
console.log(d) //it will be 21
console.log(c) //also be 21
 