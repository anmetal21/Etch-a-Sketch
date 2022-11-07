const container=document.getElementById("container");
const clearButton=document.getElementById("clear");
const gridSize=document.getElementById("gridSize");
let desiredSize='';


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

gridSize.addEventListener('click', ()=>{
    let desiredSize=Number(prompt("What grid size would you like?"));
    container.style.cssText=`grid-template-columns: repeat(${desiredSize},3vh); grid-template-rows: repeat(${desiredSize}, 3vh);`    
    if (desiredSize<=100 && desiredSize>0) {
        removeGrid(container);
        
    for (i=0; i<(desiredSize**2); i++) {
        let box=document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);

        box.addEventListener('mouseenter', ()=> {
            box.classList.remove('box');
            box.classList.add('boxActive');
        })
        }
    }
})



function removeGrid(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
