function HelloWord() {
    console.log('สวัสดี')
}

HelloWord()
function secondHello(name: string) {
    console.log(name)
}

console.log(secondHello('Pongpang'))

function getPi() {
    return 3.14
}

console.log(getPi())

function st(fname: string, sname: string, tname: string) {
    if (!(fname === 'nan' || sname === 'pleum') && tname === 'yo') { // &&=และ ||=หรือ !=ย้อนกลับ จริงเป็นเท็จ เท็จเป็นจริง
        console.log('เริ่มสอน')
    } else {
        console.log('ยังไม่สอน')
    }
}
st('nan', 'pleumm', 'yo')

function sd(sex: string, high: number, kg: number) {
    if (sex === 'male' && (high > 170 || (kg > 50 && kg <= 110))) {
        console.log('จับใบดำใบแดง')
    } else {
        console.log('ไม่เข้าเกณฑ์')
    }
}
sd('male', 175, 49)