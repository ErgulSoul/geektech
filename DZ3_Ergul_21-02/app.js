// var answer=""
// for (let i=0 ; i<7; i++){
//   answer+="*"
//   console.log(answer)
// }

// for(let i = 1; i<101; i++){
//   if(i%3===0 && i%5===0){
//     console.log("FizzBuzz")
//   }else if(i%3===0){
//     console.log("Fizz")
//   }else if(i%5===0){
//     console.log("Buzz")
//   }else{
//     console.log(i)
//   }
// }



// var word = prompt("word")
// var char = prompt("char")
// var answer=0
// function counter(sentense ,  bukva){
//     for(i of sentense){
//         if(i===bukva)
//             answer+=1
//     }
// }
//
// counter(word , char)
// console.log(answer)


var word = prompt('Введите имя')
function ucFirst(str) {
    if (!str) return "Ошибка";
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
console.log( ucFirst(word) )

