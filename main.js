let btn = document.querySelector('.spin');
let firstNumb = document.querySelector('.first');
let secondNumb = document.querySelector('.second');
let thirdNumb = document.querySelector('.third');
let cas = document.querySelector('.casino');
let btnReset = document.querySelector('.reset');

btn.addEventListener("click", spin);

function spin() {
    let f = random();
    let s = random();
    let t = random();

    firstNumb.style.transitionDuration = "7s";
    secondNumb.style.transitionDuration = "7s";
    thirdNumb.style.transitionDuration = "7s";
    cas.style.transitionDuration = "7s";
    
    firstNumb.style.transform = `translate(0, ${f})`;
    firstNumb.style.transitionDelay = "0.1s";
    secondNumb.style.transform = `translate(0, ${s})`;
    secondNumb.style.transitionDelay = "0.3s";
    thirdNumb.style.transform = `translate(0, ${t})`;
    thirdNumb.style.transitionDelay = "0.5s";
    firstNumb.style.color = "orangered";
    secondNumb.style.color = "orangered";
    thirdNumb.style.color = "orangered";
    cas.style.borderColor = "orangered";
    setTimeout(resetAnimation, 7000);
    btn.removeEventListener("click", spin);
    btnReset.addEventListener("click", reset);
}

function random() {
    let height = "";
    let num = Math.floor(Math.random() * 10);
    switch (num) {
        case 0:
            height += "-116";
            break;
        case 1:
            height += "1";
            break;
        case 2:
            height += "-12";
            break;
        case 3:
            height += "-25";
            break;
        case 4:
            height += "-38";
            break;
        case 5:
            height += "-51";
            break;
        case 6:
            height += "-64";
            break;
        case 7:
            height += "-77";
            break;
        case 8:
            height += "-90";
            break;
        case 9:
            height += "-103";
            break;
    }
    if(window.matchMedia("(max-width: 600px) and (orientation: portrait)").matches){
        height=Number(height);
        height-=2.5;
        height=String(height);
        console.log(height);
    }
    return height += "vh";
}

function resetAnimation() {
    btnReset.style.animation = "res 1s 1 forwards";
    btnReset.style.display = "block";
}
function reset(){
    firstNumb.style.transform = `translate(0, -636vh)`;
    secondNumb.style.transform = `translate(0, -636vh)`;
    thirdNumb.style.transform = `translate(0, -636vh)`;
    firstNumb.style.color = "white";
    secondNumb.style.color = "white";
    thirdNumb.style.color = "white";
    cas.style.borderColor = "white";
    btnReset.style.display = "none";
    
    firstNumb.style.transitionDuration = "0.5s";
    secondNumb.style.transitionDuration = "0.5s";
    thirdNumb.style.transitionDuration = "0.5s";
    cas.style.transitionDuration = "0.5s";
    
    firstNumb.style.transitionDelay = "0s";
    secondNumb.style.transitionDelay = "0s";
    thirdNumb.style.transitionDelay = "0s";
    
    function addevent(){
        btn.addEventListener("click", spin);
    }
    setTimeout(addevent,500);
}