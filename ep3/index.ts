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

function BMI(height: number, weight: number) {
  height = height / 100;
  if (weight <= 0 || weight >= 639 || height <= 0 || height >= 3) {
    console.log("ค่าไม่ถูกต้อง");
    return;
  }
  let BMI: number = weight / (height * height);
  if (BMI > 30) {
    console.log("อ้วนมาก");
  } else if (BMI >= 25 && BMI <= 29.9) {
    console.log("อ้วน");
  } else if (BMI >= 23 && BMI <= 24.9) {
    console.log("น้ำหนักเกิน");
  } else if (BMI >= 18.5 && BMI <= 22.9) {
    console.log("น้ำหนักปกติ");
  } else {
    console.log("ผอมเกินไป");
  }
}
BMI(180, 0);