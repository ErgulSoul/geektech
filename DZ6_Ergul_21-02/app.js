// function avarage(){
//     var result = arguments[0]
//     for(var i of arguments){
//         result +=i
//     }
//     return result / arguments.length
// }
//
// console.log(avarage(4,5,23,43,7))


// var inn = "12345678"
//
// function check(char){
//     return parseInt(char)
// }
//
// console.log(Array.from(inn).every(check))


var login = document.getElementById('login')
var password = document.getElementById('password')
var button = document.getElementById('button')
var h2 = document.querySelector('h2')

function user (login, password, name){
    this.login = login
    this.password = password
    this.name = name
}

var users = [
    new user('tomato', '1234qw', 'Alan'),
    new user('apple', '5678er', 'Dima'),
    new user('onion', '9012ty', 'Alex')
]

button.onclick = ()=>{
    if ((login.value.trim() === users[0].login) && (password.value.trim() === users[0].password)){
        h2.innerHTML = users[0].name
    } else if ((login.value.trim() === users[1].login) && (password.value.trim() === users[1].password)){
        h2.innerHTML = users[1].name
    } else if ((login.value.trim() === users[2].login) && (password.value.trim() === users[2].password)) {
        h2.innerHTML = users[2].name
    } else {
        h2.innerHTML = 'Неверное имя пользователя или пароль'
    }
}