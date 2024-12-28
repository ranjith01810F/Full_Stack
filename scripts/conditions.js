/*
syntax
ifelse condition

if(false)
{
    console.log("Its true")
}
else{
    console.log("Its false")
} */

//is it raining outside?? if yes - "Take the umbrella" no = "enjoy the sunshine"

var rain = false

if(rain){
    console.log("Take the umbrella")
}
else{
    console.log("Enjoy the sunshine")
}

//Did you finish your homework yes = great job , no = finish your homewoke befor playing

var homework = false
if(homework){
    console.log("Great Job")
}
else{
    console.log("Finish it before playing")
}

/* 
and or not operators (logical operator)
&& and
|| or 
!  not */

var color = "red"
if (color == "red"){
    console.log("stop")
}

if (color == "yellow"){
    console.log("Get ready")
}
if (color == "Green"){
    console.log("move")
}

console.log("==========================================")

var climate = "summer"

if (climate == "summer"){
    console.log("Have fun in the sun")
}
else if(climate=="spring"){
    console.log("Enjoy the blooming flowers")
}
else if(climate == "autumn" || climate == "fall"){
    console.log("Admire the colorful leaves")
}
else if(climate == "winter"){
    console.log("Bundle up and stay warm")
}

console.log("==========================================")

var score = 90

if(score < 50){
    console.log("You need to improve")
}
else if(score > 50 && score < 70 ){
    console.log("Good job")
}
else if(score > 70){
    console.log("Excellent Performance!")
}

console.log("==========================================")

var num = 2

if(num%2==0){
    console.log("the number is even")
}
else{
    console.log("The number is odd")
}

console.log("==========================================")

char = "f"

if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
    console.log("It's a vowel")
}
else{
    console.log("It's a consonant")
}
