let fnum = document.getElementById('calscreen').value;
let snum = document.getElementById('calscreen').value;
let operator; 
function AddNumb(numb) {

    document.getElementById('calscreen').value += numb;
}
function AddOperator(e) {
    operator = e;
    fnum = document.getElementById('calscreen').value;
    document.getElementById('calscreen').value = '';
}
function Equals(params) {
    snum = document.getElementById('calscreen').value;
    if (operator == '+') {
        let sum = Number(fnum) + Number(snum)
        console.log(sum);
        document.getElementById('calscreen').value = fnum + '+' + snum + '=' + sum;
    } else if (operator == '-') {
        let minus = Number(fnum) - Number(snum)
        console.log(minus);
        document.getElementById('calscreen').value = fnum + '-' + snum + '=' + minus;
    } else if (operator == '*') {
        let multiply = Number(fnum) * Number(snum)
        console.log(multiply);
        document.getElementById('calscreen').value = fnum + '*' + snum + '=' + multiply;
    } else if (operator == '/') {
        let divide = Number(fnum) / Number(snum)
        console.log(divide);
        document.getElementById('calscreen').value = fnum + '/' + snum + '=' + divide;
    }
}
function clr() {
    ab.value = ''
}
let ab = document.getElementById('calscreen');
let ba = document.getElementById('operatoroff');
let statuss = 'on'
function AddOff() {
    if (statuss == 'on') {
        ab.style.visibility = 'hidden'
        ab.value = ''
        ba.innerText = 'ON'
        statuss = 'off'
    } else{
        ab.style.visibility = 'visible'
        ab.value = ''
        ab.value = '0'
        ba.innerText = 'OFF'
        statuss = 'on'
    }
}
function clearMe() {
    ab.value = ab.value.slice(0, ab.value.length -1);
}