const container=document.getElementById("container");
const clearButton=document.getElementById("clear");



for (i=0; i<256; i++) {
    let box=document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);

    box.addEventListener('mouseenter', ()=> {
        box.classList.remove('box');
        box.classList.add('boxActive');
    })
}


clearButton.addEventListener('click', ()=> {
    let resetBoxes= document.getElementsByClassName('boxActive');
    let j=0;
    while(j<resetBoxes.length) {
    resetBoxes[0].classList.add('box');
    resetBoxes[0].classList.remove('boxActive');
    }
});
