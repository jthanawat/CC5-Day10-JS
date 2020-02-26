// * Logical operators and If *
// Exercise คำสั่งต่อไปนี้จะแสดงค่าเป็นอะไร
alert (null || 2 || undefined);          // 2
alert (alert(1) || 2 || alert(3));       // แสดงค่่า alert (1)ก่อน แล้วคืนค่าเป็น 2
alert (1 && null && 2);                  // null
alert (alert(1) && alert(2));            // แสดงค่า alert(1)ก่อน แล้วคืนค่าเป็น undefined
alert (null || 2 && 3 || 4);             // 3

// Exercise เขียนคำสั่ง if ที่เช็คอายุว่าอยู่ระหว่าง 18 - 60 และเขียนคำสั่ง if ที่เช็คอายุว่าไม่อยู่ระหว่าง 18 - 60
let yourAge = prompt("Enter your age");
if (yourAge >= 18 && yourAge <= 60) {
    alert("Your age is required");
} else {
    alert("Your age is not required")
}

let yourAge = prompt("Enter your age");
if (!(yourAge >= 18 && yourAge <= 60)) {
    alert("Your age is not required");
} else {
    alert("Your age is required")
}

// Exercise คำสั่ง alert ไหนที่จะถูกรันบ้าง
if (-1 || 0) alert( 'first');            // alert runs.
if (-1 && 0) alert( 'second');           // alert not runs.
if (null || -1 && 1) alert( 'third');    // alert runs.

// Exercise ให้เขียนระบบ login
let userName = prompt("คุณเป็นใคร ?");
if (userName == "Admin") {
    let password = prompt ("กรุณาใส่รหัสผ่าน")
    if (password == "codecamp#5") {
        alert("ยินดีต้อนรับ");
    } else if (password == "" || password == null) {        // else if (!password || password == "")
        alert("ยกเลิก");
    } else {
        alert("รหัสผ่านผิด");
    }
} else if (userName == "" || userName == null) {           // else if (!userName || userName == "")
    alert("ยกเลิก");
} else {
    alert("ฉันไม่รู้จักคุณ");
}



// * Loops:while and for *
// Exercise เลขที่ถูก alert เป็นลำดับสุดท้ายคือเลขอะไร
// ans. เลขที่ถูก alert ลำดับสุดท้ายคือเลข 1 
let i = 3;

while (i) {
    alert( i-- );
}

// Exercise code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่
// ans. ไม่เหมือนกันเนื่องจาก prefix ++ จะเพิ่มค่า1 ก่อนแล้วค่อยนำมาใช้ ส่วน postfix ++ จะนำตัวแปรมาเช็ค condition ก่อนแล้วจึงเพิ่มค่า1 ทีหลัง
let i = 0;
while (++i < 5) alert( i ); 

let i = 0;
while (i++ < 5) alert( i ); 

// Exercise code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่
// ans. เหมือนกัน
for (let i = 0; i < 5; i++) alert( i );
for (let i = 0; i < 5; ++i) alert( i );

// Exercise ให้เขียน loop ทั้งแสดงเลข 2 ถึง 10 ออกมา
for (let i =2; i <= 10; i++) {
    console.log(i);
}

// Exercise เปลี่ยน code for loop ด้านล่างนี้ให้เป็น while loop โดยที่ผลลัพธ์ยังเหมือนเดิม
/* for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}*/
let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++
}

// Exercise เพิ่มเติม
let sum = 0;
for (let i = 1; i <= 1027; i = i + 2) {
    sum += i;
}
console.log(sum);

// Exercise เพิ่มเติม
let sum = 0;
while (true) {
    let value = prompt("ใส่เลข", '');
    if (!value) break; // (*)
    sum += value;
}
alert('Sum: ' + sum);

// Exercise เพิ่มเติม
let i = 3;
while (i) {
    alert( i--);
}

for (let i = 0; i < 3; i++) {
    alert(`number ${i}!`);
}

// Exercise ให้เขียนเกมส์ทายตัวเลขสำหรับเล่นสองคน
let numberA = prompt("input a number");
while (!(numberA >= 1 && numberA <= 100)) {
    alert("Please input a number between 1 and 100");
    numberA = prompt("Input a number between 1 and 100") 
}

let numberB;
while (numberA !== numberB) {
    numberB = prompt("Guess a number");
    if (numberB > numberA) {
    numberB = alert("Too high")
    } else if (numberB < numberA) {
    numberB = alert("Too low");  
    }
}

//solution :
let answer = prompt('Enter you number');

while (true) {
    let guessNumber = prompt('Guess a number');
    if (guessNumber == answer) {
        alert('ถูกต้อง') 
        break;
    } else {
      if (guessNumber < answer) {
          alert('มากไป') 
      } else {
          alert('น้อยไป')
      }  
    }
}



// * switch *
// Exercise แปลง Code ดังกล่าวเป็น if-else statement
/* switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  } */

let browser = prompt("Enter your browser")
if (browser == "Edge") {
    alert("You've got the Edge!");
} else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
    alert("Okay we support these browser too");
} else {
    alert("We hope that this page looks ok!");
}

// Exercise แปลง Code ดังกล่าวเป็น Switch cases

/* let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
} */

let a = +prompt('a?', '');    // + means Number()
switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}

// เสริมจากใน class
// for (let i =1; i <= 10; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         }
// }


//  for (let i = 0; i <= 50; i = i + 5) {
//      console.log(i);
//  }

//  let จำนวนรอบ = prompt('จำนวนรอบ')
//  let step = prompt('เพิ่มทีละ')
//  for (let i = 1 ; i <= จำนวนรอบ; i= i + step) {
//      console.log(i * 5);
//  }