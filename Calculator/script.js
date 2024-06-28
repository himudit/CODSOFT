//outputs
let expr = document.querySelector(".expression p");
let res = document.querySelector(".result p");
let exp;

//inputs
let seven7 = document.querySelector("#seven");
seven7.addEventListener('click', () => {
    expr.innerText = expr.innerText + 7;
})
let eight8 = document.querySelector("#eight");
eight8.addEventListener('click', () => {
    expr.innerText = expr.innerText + 8;
})
let nine9 = document.querySelector("#nine");
nine9.addEventListener('click', () => {
    expr.innerText = expr.innerText + 9;
})
let four4 = document.querySelector("#four");
four4.addEventListener('click', () => {
    expr.innerText = expr.innerText + 4;
})
let five5 = document.querySelector("#five");
five5.addEventListener('click', () => {
    expr.innerText = expr.innerText + 5;
})
let six6 = document.querySelector("#six");
six6.addEventListener('click', () => {
    expr.innerText = expr.innerText + 6;
})
let one1 = document.querySelector("#one");
one1.addEventListener('click', () => {
    expr.innerText = expr.innerText + 1;
})
let two2 = document.querySelector("#two");
two2.addEventListener('click', () => {
    expr.innerText = expr.innerText + 2;
})
let three3 = document.querySelector("#three");
three3.addEventListener('click', () => {
    expr.innerText = expr.innerText + 3;
})
let zero0 = document.querySelector("#zero");
zero0.addEventListener('click', () => {
    expr.innerText = expr.innerText + 0;
})

// operators
let mod_ = document.querySelector("#mod");
mod_.addEventListener('click', () => {
    expr.innerText = expr.innerText + '%';
})
let div_ = document.querySelector("#divide");
div_.addEventListener('click', () => {
    expr.innerText = expr.innerText + '/';
})
let mul_ = document.querySelector("#mul");
mul_.addEventListener('click', () => {
    expr.innerText = expr.innerText + '*';
})
let sub_ = document.querySelector("#minus");
sub_.addEventListener('click', () => {
    expr.innerText = expr.innerText + '-';
})
let add_ = document.querySelector("#plus");
add_.addEventListener('click', () => {
    expr.innerText = expr.innerText + '+';
})
let dec_ = document.querySelector("#decimal");
dec_.addEventListener('click', () => {
    expr.innerText = expr.innerText + '.';
})

let ac_ = document.querySelector("#ac");
ac_.addEventListener('click', () => {
    expr.innerText = '';
    res.innerText = '';
})
let c_ = document.querySelector("#c");
c_.addEventListener('click', () => {
    expr.innerText = expr.innerText.slice(0, -1);
})

let equal_ = document.querySelector("#equal");
equal_.addEventListener('click', () => {
    exp = expr.innerText;
    let exp_num = math.evaluate(exp);
    console.log(exp_num);
    res.innerHTML = exp_num;
})

// dark and light mode
let d = document.querySelector("#dark");
d.addEventListener('click', () => {
    // if(document.body.style.backgroundColor=='white'){
    document.querySelector(".mybox").style.backgroundColor = 'black';
    document.querySelector('.mybox').style.borderColor = 'black';
    // document.body.style.color='white';
    //navbar
    document.querySelector(".nav").style.color = 'white';
    //bot
    document.querySelector(".bot").style.backgroundColor = '#1f2024';
    document.querySelector('.bot').style.borderColor = '#1f2024';
    document.querySelector(".bot").style.color = 'white';
    document.querySelector(".bot_inner").style.backgroundColor = '1f2024';
    // document.querySelector(".result p").style.color = 'white';

    // }
})

let w = document.querySelector("#light");
w.addEventListener('click', () => {
    // if(document.body.style.backgroundColor=='black'){
    document.querySelector(".mybox").style.backgroundColor = 'rgb(231, 229, 229)';
    document.querySelector('.mybox').style.borderColor = 'white';
    // document.body.style.color='black';
    //navbar
    document.querySelector(".nav").style.color = 'black';
    //bot
    document.querySelector(".bot").style.backgroundColor = 'white';
    document.querySelector('.bot').style.borderColor = 'white';
    document.querySelector(".bot").style.color = 'black';
    document.querySelector(".bot_inner").style.backgroundColor = 'white';
    // document.querySelector(".result p").style.color = 'black';
    // }
})