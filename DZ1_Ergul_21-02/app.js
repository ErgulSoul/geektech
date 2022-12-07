// var Name = prompt('Введите имя')
// var Surname = prompt('Введите фамилию')
// alert('Здравствуйте,' + ' ' + Name + ' ' + Surname + '!')


// var a = Number(prompt('Введите число 1'))
// var b = Number(prompt('Введите число 2'))
// if (a > b) {
//     console.log(a + ', ' + 'Число 1 больше')
// }else if (b > a) {
//     console.log(b + ', ' + 'Число 2 больше')
// }else if (b === a) {
//     console.log('Числа равны')
// }else{
//     console.log('Это не число')
// }


// var color = prompt('Введите цвет светофора')
// switch (color) {
//     case 'Green':
//         console.log('Иди!');
//         break;
//     case 'Yellow':
//         console.log('Жди!');
//         break;
//     case 'Red':
//         console.log('Стой!');
//         break;
//     default:
//         console.log('Введён неправильный цвет!')
//         break;
// }

var color = prompt('Введите цвет светофора')
switch (color) {
    case 'green':
    case 'зелёный':
    case 'зелeный':
        console.log('Иди!');
        break;
    case 'yellow':
    case 'жёлый':
        console.log('Жди!');
        break;
    case 'red':
        console.log('Стой!');
        break;
    default:
        console.log('Введён неправильный цвет!')
        break;
}