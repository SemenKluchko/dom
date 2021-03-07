const d = document;

const box = d.querySelectorAll('.box-item');
const btn = d.querySelector('.btn');

let flag = 0;

function clearTrafficLight() {
   for (let i = 0; i < box.length; i++) {
       box[i].classList.remove('one');
       box[i].classList.remove('two');
       box[i].classList.remove('three');
   }
}

btn.onclick = function() {
    clearTrafficLight();
    if (flag === 0) {
        box[0].classList.add('one');
        flag = 1;
    } else if (flag === 1) {
        clearTrafficLight();
        box[1].classList.add('two');
        flag = 2;
    } else if (flag === 2) {
        clearTrafficLight();
        box[2].classList.add('three');
        flag = 3;
    } else {
        box[1].classList.add('two');
        flag = 0;
    }
}
