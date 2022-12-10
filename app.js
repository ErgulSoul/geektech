// var Card = {
//     number: '456789804563',
//     data: '14.07.27',
//     owner: 'Ergul',
//     type: 'credit',
//     CVC: 398,
// }


var bankBranch = {
    code: 5678,
    name: 'Optima',
    graph: '10:00-15:00',
    isWorkingEvening: false,
    address: {
        city: 'Bishkek',
        street: 'Soviet',
        house: '2'
    }
}

// var translationSystem = prompt('Введите название системы перевода денег')
// switch (translationSystem) {
//     case 'Unistream':
//     case 'unistream':
//         console.log('Деньги отправлены системой Unistream')
//         break;
//     case 'RIA':
//     case 'ria':
//     case 'Ria':
//         console.log('Деньги отправлены системой RIA')
//         break;
//     case 'Contact':
//     case 'contact':
//         console.log('Деньги отправлены системой Contact')
//         break;
//     case 'MoneyGram':
//     case 'Moneygram':
//     case 'moneyGram':
//     case 'moneygram':
//         console.log('Деньги отправлены системой MoneyGram')
//         break;
//     default:
//         console.log('Введена неправильная система перевода денег')
// }


// if (translationSystem === 'Unistream' || translationSystem === 'unistream') {
//     console.log('Деньги отправлены системой Unistream');
// }   else if (translationSystem === 'RIA' || translationSystem === 'Ria' || translationSystem === 'ria') {
//     console.log('Деньги отправлены системой RIA');
// }   else if (translationSystem === 'Contanct' || translationSystem === 'contact') {
//     console.log('Деньги отправлены системой Contact');
// }   else if (translationSystem === 'MoneyGram' || translationSystem === 'Moneygram' || translationSystem === 'moneyGram' || translationSystem === 'moneygram') {
//     console.log('Деньги отправлены системой MoneyGram');
// }   else {
//     console.log('Введена неправильная система перевода денег');
//



// var numberArabic = prompt('Введите число')
// switch (numberArabic) {
//     case '1':
//         console.log('I')
//         break;
//     case '2':
//         console.log('II')
//         break;
//     case '3':
//         console.log('III')
//         break;
//     case '4':
//         console.log('IIII')
//         break;
//     case '5':
//         console.log('V')
//         break;
//     case '6':
//         console.log('VI')
//         break;
//     case '7':
//         console.log('VII')
//         break;
//     case '8':
//         console.log('VIII')
//         break;
//     case '9':
//         console.log('IX')
//         break;
//     default:
//         console.log('Введена неправильная цифра')
// }

var customerType = 3
customerType = customerType === 1 ? 'Физ. лицо' : customerType === 2 ? 'Юр. лицо' : 'Не найден тип покупателя'
console.log(customerType)









