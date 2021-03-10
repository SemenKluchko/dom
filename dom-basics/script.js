;const d = document;

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

// second task; add author and song in html unordered list;
const playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    
    },
    
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    
    },
    
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    
    },
    
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }];

const listBox = d.querySelector('.main-div');
const list = d.createElement('ul');

playList.forEach((element) => {
    const listItem = d.createElement('li');
    const text = d.createTextNode(`Author: ${element.author} Song: ${element.song}`);
    listItem.appendChild(text);
    list.appendChild(listItem);
});

listBox.appendChild(list);
