function createGrid(size){
    const grid = document.querySelector(".grid")
    grid.replaceChildren()
    let sideLength = (800 / size) + "px" 

    for (let i = 0; i < size; i++){
        let row = document.createElement("div")
        row.classList.add("row")
        row.classList.add("row" + i)
        
        for (let j = 0; j < size; j++){
            let newDiv = document.createElement("div")
            newDiv.classList.add("square")
            newDiv.classList.add("row" + i)
            newDiv.classList.add("column" + j)
            let color = "rgb(" + (Math.random() * 255) + ", " + 
                                (Math.random() * 255) + ", " + 
                                (Math.random() * 255) + ")"
            newDiv.style.backgroundColor = color;
            newDiv.style.opacity = 0;
            newDiv.style.height = sideLength;
            newDiv.style.width = sideLength;
    
            //newDiv.addEventListener("mouseover", function (e) {
    
            newDiv.addEventListener("mouseover", function (e) {
                const style = window.getComputedStyle(newDiv);
                let opacity = style.getPropertyValue("opacity");
                newOpacity = parseFloat(opacity) + 0.1;
                e.target.style.opacity = newOpacity;
            });
    
            row.appendChild(newDiv)
        }
        grid.appendChild(row)
    }
}

const btn = document.querySelector("button")
    btn.addEventListener("click", () => {
        let size = prompt("How many cells do you want on each side of the grid?");
        while (size > 100){
            size = prompt("Wow, that's a lot of squares! Please choose a number no higher than 100.")
        }
        if (size < 2){
            alert("... I mean, what did you expect?")
        }
        createGrid(size)
    });

    btn.addEventListener("mouseover", function (e) {
        e.target.style.backgroundColor = "#ffcf95"
    });

    btn.addEventListener("mouseout", function (e) {
        e.target.style.backgroundColor = "bisque";
    });

createGrid(16)