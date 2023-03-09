const title = "Hello I am Parashar";
const looperTitle = document.getElementById('looperTitle');
const looperSubtitle = document.getElementById('subtitle');
const subTitle = "Full stack Web developer and Music Producer";
let index = 1;
const looper = () => {
    const type_title = title.slice(0, index);
    index++;
    setTimeout(() => {
        looper();
    }, 200);
    looperTitle.innerText = type_title;
    index > title.length ?
        setTimeout(() => {
            looperSubtitle.innerText = subTitle
        }, 900)
       
        : looperSubtitle.innerText = '';
}


looper();