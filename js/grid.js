const divSketcher = document.querySelector(".sketcher");

// Inside the skecher div create 16 divs that each hold 16 divs
// This will guarentee 16 by 16 squares, css can then be used to set their width and height

// Create a grid of count x count divs
function createGrid (count) {
    // Remove all children and grand children
    divSketcher.querySelectorAll("*").forEach(node => node.remove());
        


    // Actually create the grid and add it to the document
    for (let i = 0; i < count ; i++) {
        const divRowEntry = document.createElement("div");
        divRowEntry.setAttribute("class", "grid-row");
        // set the attribute for a new row on this element
        for (let j = 0; j < count ; j++) {
            const divColEntry = document.createElement("div");
            divColEntry.setAttribute("class", "grid-col");

            divRowEntry.appendChild(divColEntry);
        }
        divSketcher.appendChild(divRowEntry);
    }
}

// Event handler for mouseover and mouseout events
function setSquareColor(e, color){
    const eventClasses = e.target.classList;
        
        // Highlight cells
        if (eventClasses.contains("grid-col")) {
            e.target.style.backgroundColor = color;
        }
}

// Use event delegation to add events listen to mouse hover events
function addSketchHoverEvent() {
    // mouseover event bubbles, mouseenter does not
    divSketcher.addEventListener("mouseover", (e) => {
        const color = "red";
        e.target.style.transition = "background-color 0s ease";
        setSquareColor(e, color);
    });

    //// mouseout event bubbles, mouseleave does not
    divSketcher.addEventListener("mouseout", (e) => {
        const color = "aquamarine";
        e.target.style.transition = "background-color 0.5s ease";
        setSquareColor(e, color);
    });

}

function hookupGridButton() {
    btnNewGrid.addEventListener("click", () => {
        btnNewGrid = document.querySelector("#btnNewGrid");
        let newGridLength = prompt("Enter the length of the new grid: ");
        while (typeof +newGridLength != "number" && newGridLength >= 0.5){
            newGridLength = prompt("ERROR, Enter the length of the new grid: ");
        }

        const integerLength = Math.round(newGridLength);
        createGrid(integerLength);
    });
}


const gridLength = 16; // gridLength x gridLength will be used
createGrid(gridLength);
addSketchHoverEvent();
hookupGridButton();