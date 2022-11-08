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
    userGrid(container); 
})



function removeGrid(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


function createGrid(container, desiredSize) {
    for (k=0; k<(desiredSize**2); k++) {
        let box=document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);

        box.addEventListener('mouseenter', ()=> {
            box.classList.remove('box');
            box.classList.add('boxActive');
        })
        }
}

function userGrid(container) {
    let desiredSize=Number(prompt("What grid size would you like?"));
    container.style.cssText=`grid-template-columns: repeat(${desiredSize},1fr); grid-template-rows: repeat(${desiredSize}, 1fr);`    
    
    if (desiredSize<=100 && desiredSize>0) {
        removeGrid(container);
        createGrid(container, desiredSize);
    
    }
    else {
        alert ("Grid size must be between 0 and 100.");
        userGrid(container);
    }
}
