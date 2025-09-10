//HW TASK 1
function celToF(c) {
    return (c * 9 / 5) + 32;
}
console.log(celToF(100));

//HW TASK 2 version 1
function revStr(str) {
    return str.split('').reverse().join('');
}
console.log(revStr("Lumos"));

//HW TASK 2 version 2
function revStr2(str) {
    let emptyString = '';
    for (let i = str.length - 1; i >= 0; i--) { emptyString += str[i] }
    return emptyString;
}
console.log(revStr2("Imperio"));
console.log(revStr2("Avada Kedavra"));

//HW TASK 3 version 1
function noOfWord(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            count++;
        }
    }
    return count + 1;
}
console.log(noOfWord("Expecto Patronum for testing this method"));

//I figured the above method has issue because if we use multiple spaces 
// between words it will return an extra word count. So I'll use split methodnow

//HW TASK 3 version 2
function noOfWord2(str) {
    return str.split(' ').length;
}
console.log(noOfWord2("Expecto Patronum for testing this method"));

//HW TASK 4
function wovelCount(str) {
    str = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            count++
        }
    }
    return count;
}
console.log(wovelCount("BliBleBlaBloBlu"));

//HW TASK 5
function factorial(n) {
    if (n < 0) {
        return undefined;
    } else if (n === 1 || n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(4));

//HW TASK 6
function sumOfEven(n) {
    let res = 0;
    if (n <= 0) { return "undefined"; }
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) { res += i; }
    }
    return res;
}
console.log(sumOfEven(10));

//HW TASK 7
function gradeCalc(grade){
    if(grade < 0 || grade > 100){ return 'this grade is not assignable!'; }
    let numericGrade = '';
    if(grade > 90 && grade <= 100){numericGrade = 'A';}
    else if(grade > 80 && grade <= 90){numericGrade = 'B';}
    else if(grade > 70 && grade <= 80){numericGrade = 'C';}
    else if(grade > 60 && grade <= 70){numericGrade = 'D';}
    else if(grade > 50 && grade <= 60){numericGrade = 'E';}
    else if(grade > 40 && grade <= 50){numericGrade = 'Fx';} //Fx means retake allowed. exists in my university grading system
    else{numericGrade = 'F';}
    return numericGrade;
}
console.log(gradeCalc(90));
console.log(gradeCalc(42));
console.log(gradeCalc(108));


//HW TASK 8
function passwordValidate(password) {
  return password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password);
}
console.log(passwordValidate("Thisis654!!AbC"));
console.log(passwordValidate("This4!"));
console.log(passwordValidate("thisisverylongpassworD12!"));
