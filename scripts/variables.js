//variable declaration 
// let BookName; // let - keyword, reserved words


//variable initialisation
// BookName = "Harry potter"; // = - assignment operator

//declare and initialise in singel line
// let Author = "J.K";

//declare 2 variables in single line
// let Journer = "IEEE", publisher = "summa";

// console.log("BookName","\n",BookName); // \n escape sequence
/* 
can use var instead of let but var is oldest practice 

can modify the values which has beena assigned to the variable 

can assign varble as value for a variable  */

/* BookName = Journer;
console.log(BookName);
 */
//Rules to name a variable 
/*
     -variables should be unique
     -only 2 spl characters $,_
     -should not start with numbers but can inclue number 
     -can't able to use keyword as variable 
     -case sensitivity
*/

/* let student;
let name = "Ranjith";
student= name;
console.log("Name: ",student);

 */
//3 types of variables var,let, const

/*
var-global variable 
let-local variable 
const-constant
*/

// {var a =10}
// console.log(a);

{
     var price = 50
     var product = "apple"
     var tax = 0.10
}

console.log(product)
let totalprice = price+tax;
console.log("total price:",totalprice); 

console.log("========================================");

{
     var FruitName = "Banana"
     var Count = 12
     var Price = 10
     var Total = Count * Price
}

console.log(FruitName,":", Total)


//if a value is assigned then it can't be changed 
const Name = "Ranjith";
console.log(Name);


/* Name = "siva";
console.log(Name); // TypeError: Assignment to constant variable.
 */

// use cases:
