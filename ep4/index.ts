// function sayHi(dayOfWeek: number) {
//     if (dayOfWeek === 1) {
//         console.log('อาทิตย์')
//     } else if (dayOfWeek === 2) {
//         console.log('จันทร์')
//     } else if (dayOfWeek === 3) {
//         console.log('อังคาร')
//     } else if (dayOfWeek === 4) {
//         console.log('พุธ')
//     } else if (dayOfWeek === 5) {
//         console.log('พฤหัส')
//     } else if (dayOfWeek === 6) {
//         console.log('ศุกร์')
//     } else if (dayOfWeek === 7) {
//         console.log('เสาร์')
//     }
// }

// sayHi(2);

// function sayHi(dayOfWeek: number) {
//     switch (dayOfWeek) {
//         case 1:
//             console.log('สวัสดีวันอาทิตย์')
//             break
//         case 2:
//             console.log('สวัสดีวันจันทร์')
//             break
//         case 3:
//             console.log('สวัสดีวันอังคาร')
//             break
//         case 4:
//             console.log('สวัสดีวันพุธ')
//             break
//         case 5:
//             console.log('สวัสดีวันพฤหัส')
//             break
//         case 6:
//             console.log('สวัสดีวันศุกร์')
//             break
//         case 7:
//             console.log('สวัสดีวันเสาร์')
//             break
//         default :
//             console.log('ระบุวันผิด')
//             break
//     }
// }

// sayHi(3);

// const x: number = 999999999999999
// const y: number = 9999999999999999

// console.log(x);
// console.log(y);

// const z: number = 0.1 + 0.2
// console.log(z);
// function fixedDecimal(n: number, digi: number){
//     const x = n.toFixed(digi)
//     return x
// }

// console.log(fixedDecimal(99999.99999,17))

// function muelp(n: number) {
//     const x = n.toLocaleString()
//     return x
// }
//     console.log(muelp(2000000));

// const str: string = "Uten"

// console.log(str.indexOf('e'));

// // // const str: string = 'นายทดสอบ นามสกุล'


// // // console.log(str.includes('นาย'))

// // const str: string =  "Hello My Name if John I'm so Happy"

// // console.log (str.slice(str.indexOf('John'),str.indexOf('John') + "John".length))

// // function getName(fullName: string){
// //     console.log(fullName.slice(0, fullName.indexOf(' '))
// // }

// // getName('Uten Lapanilkorn')

// const str: string = "61,325.33:61,325.32:61,325.31:61,325.30"

// console.log(str.split(':'))

const str: string = 'ยายแล่ม เมื่อตอนสาวๆ' // อ้นจี้

console.log(str.replace('ยายแล่ม','อ้นจี้'))
