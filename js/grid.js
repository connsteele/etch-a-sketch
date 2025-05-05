const divSketcher = document.querySelector(".sketcher");

// Inside the skecher div create 16 divs that each hold 16 divs
// This will guarentee 16 by 16 squares, css can then be used to set their width and height

// Create a grid of count x count divs
function createGrid (count) {
    // Need to do a 2x for loop creating the divs
    // outer loop will create new rows (parent has flex-direction column)
    // inner loop should assign into colummns (parent has flex-direction row)

    // Use event delegation to improve performance!
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

const gridLength = 16; // gridLength x gridLength will be used
createGrid(gridLength);