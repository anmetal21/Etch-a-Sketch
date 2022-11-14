const container=document.getElementById("container");
const clearButton=document.getElementById("clear");
const gridSize=document.getElementById("gridSize");
const rainbow=document.getElementById("rainbow");
const black=document.getElementById("black");
const erase=document.getElementById("erase");

let desiredSize='';
let color="black";

//initial grid 
for (i=0; i<256; i++) {
    let box=document.createElement('div');
    box.classList.add('box');
    box.addEventListener('mouseover', ()=> {
        box.style.backgroundColor=`${color}`;
    });
    box.style.backgroundColor="lightslategray";
    container.appendChild(box);
    
}

//button functionality 

black.addEventListener('click', ()=> {
    color="black";
});

erase.addEventListener('click', ()=> {
    color="lightslategray";
});

rainbow.addEventListener('click', ()=> {
    color=`${getRandom()}`;
}
)

clearButton.addEventListener('click', ()=> {
    let resetBoxes=document.getElementsByClassName('box');
    for (i=0; i<resetBoxes.length; i++) {
        resetBoxes[i].style.backgroundColor="lightslategray";
    };
});


gridSize.addEventListener('click', ()=>{
    userGrid(container); 
})



//functions

function removeGrid(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


function createGrid(container, desiredSize) {
    for (k=0; k<(desiredSize**2); k++) {
        let box=document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor="lightslategray";
        box.addEventListener('mouseover', ()=> {
            box.style.backgroundColor=`${color}`;
        });
        container.appendChild(box);
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


function getRandom(){
    // 16777215 (decimal) == ffffff in hexidecimal
    let newColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    
    // Convert hex to RGB:
    let rgbColor = newColor.replace('#','');
    let r = parseInt(rgbColor.substring(0,2), 16);
    let g = parseInt(rgbColor.substring(2,4), 16);
    let b = parseInt(rgbColor.substring(4,6), 16);
    let result = 'rgba(' + r + ',' + g + ',' + b + ')';
    return result;
    
  };