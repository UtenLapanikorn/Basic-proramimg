// // แปลง number เป็น string

// function conVertToArrayString(arr: number[]) {
//     // ยาก
//     const newArray: string[];
//     for (let i = 0; i < arr.length; i++) {
//         newArray.push(arr[i].toString());
//     }
// }
// // ง่าย

// function conVertToArrayStringWithMap(arr: number[]) {
//     return arr.map(function (element, index) {
//         return element.toString();
//     })
// }

// console.log(conVertToArrayStringWithMap([1, 2, 3, 4, 5]));

// const item = [
//     { product: "Pen", price: 15 },
//     { product: "Notebook", price: 50 },
//     { product: "Eraser", price: 5 }
// ];

// const expensiveItem = item.filter(function (element, index) {
//     return element.price > 10
// })

// const fruits = ["apple", "banana", "cherry", "date"];

// const longFruits = fruits.filter(function (element, index) {
//     return element.length > 5
// }).map(function (element, index) {
// })

// console.log(longFruits)

const account = {
    name: 'ออมเงิน',
    balance: '0',
    deposit: function(amount: number) {
        if (amount < 0) {
            console.log('กรุณาระบุจำนวนเงิน')
            return
        }
        this.balance = this.balance + amount
        console.log('ฝากเงินจำนวน' + amount + 'ยอดเงินคงเหลือ' + this.balance)
    },
    withdraw: function(amount: number) {
        if (amount > this.balance) {
            console.log('เงินไม่เพียงพอ คุณมียอดเงินคงเหลือ' + this.balance)
            return
        }

        this.balance = this.balance - amount
        console.log('ถอนเงิน' + amount + 'ยอดเงินคงเหลือ' + this.balance)
    }
}

account.deposit(699)

// const inventory = {
//     name: 'Laptop Store',
//     quantity: 5,
//     isAvailable: function() {
//         return this.quality
//     }
// }

// console.log(inventory.isAvailable())