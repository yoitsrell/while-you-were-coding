// ##### Introduction #####
//
// The below assignment will require NO functions, except for the challenge banner function in number 1.
//
// Instead, our focus is going to be on console.logging the characters at certain indices of strings.
//

// ##### Challenges #####

// 1.
//
// Write a function that takes in a parameter and prints the string below, with the given paramter place of the $ symbol.
// 
// ###### Challenge $ #####
//
// Call it before EVERY challenge below!
//
// Even though we'll USUALLY be calling this function with a number indicating the challenge we're on, THIS TIME call it with the parameter 'Banner Function Works!'. You should see the below result:
//
// ###### Challenge Banner Function Works! #####

function banner(n){
    console.log('#####' + ' Challenge ' + n + ' ' + '#####')
}

banner('$')
// 2.
//
// Console out the numbers from 1-20, but only if they're divisible by 3.

// Use `if` and a modulus operation.
banner(2)

for (let twenty = 1; twenty < 20; twenty++){
if(twenty % 3 === 0){
    console.log(twenty)
}
}

//let num=1;
//while(num<=20){
    //if (num %3 === 0){}
//}

// 3.
//
// Same problem as #2, but no `if`s, `mods`, or `but`s (and no, `but` is not a JavaScript tool). There may be more ways to solve this problem without `if` or `%` (there usually are in JavaScript!), but if you did it the way we did, you should run the loop 6 times with console log per loop iteration.
banner(3)

let newOne = 0
do {
    newOne += 3;
    console.log(newOne)
}while (newOne < 18){}

// 4.
//
// Console out the numbers from 1-20. BACKWARDS.
banner(4)

for (let backwards = 20; backwards >= 1; backwards--){
    //if(twenty % 1 === 0){
        console.log(backwards)
        //backwards = backwards - 1
    }
    //}

// 5.
//
// For the string 'Boy howdy am I good at this!', console out the letters
// individually.
banner(5)

let str = "Boy howdy am I good at this!"
for (let i = 0; i < str.length; i++)
    console.log(str.charAt(i))
// 6.
//
// For the string, 'And getting better every day.', starting with the second
// character, print out every third character.
banner(6)

let string = "And getting better every day."
for (let i = 1; i < string.length; i=i+3)
    console.log(string.charAt(i))

// 7. 
//
// For the string 'Am I the best?', console out the letters individually, AND
// UPPERCASED.
banner(7)

let upper = "Am I the best?"
for (let i = 0; i < upper.length; i++)
    console.log(upper.charAt(i).toUpperCase())
// 8.
//
// For the string 'Whoa, I am the best!', console out the letters individually,
// but also capitalize the letters in the third word.
banner(8)
// let str5 = "Whoa, I am the best!"
// let newStr = str5.split("")

// for(i=0;i < newStr.length; i++){
//     if(i === 8 || i === 9)
//     console.log(newStr[i].toUpperCase())
//     else
//     console.log(newStr[i])} 

const str8 = "Whoa, I am the best!"
let spaces = 0

for (let i = 0; i < str8.length; i++){
    if (spaces === 2){
    console.log(str8[i].toUpperCase())
}else{
    console.log(str8[i])
}

if (str8[i] ===' '){
    spaces++
} 
}
// 9.
//
// For the string 'I am become death, destroyer of worlds.', console out the letters
//  individually, but backwards. That is, the first console log should be
// `.`, followed by `s`, followed by `d`, and so on.
banner('9')

let def1 = "I am become death, destroyer of worlds."
for (let i = def1.length - 1; i >= 0; i--){
    console.log(def1[i])
}


// 10.
//

banner(10)

const names = 'Colin|Mesuara|Denis|Wilson|Michael|Patrick|DeAundre|Jumary|Marc|Bogdan|Sharod|David|LaToddra|Carlos';

for (let i = 0; i < 0, i++;){
    if (i===0){
        console.log('Here today is:')
    }else if
        (names[i]=== '|')
    
    if (names[i] !== '|'){
        console.log(names[i])
    }

}
// Console out the individual letters of each person in class today, which are
// in the string above. Every time you start a new name (including the first
// one!), console out the string: 'Here today is:'.

// You'll know you're at a new person's name when you hit the pipe character.

// Don't print the pipes!


// 11.
//
// There is no 11. Celebrate! You did it!
