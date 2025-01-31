const body = document.querySelector("body")


for (let i = 0; i < 16; i++){
    let row = document.createElement("div")
    row.classList.add("row")
    row.classList.add("row" + i)
    
    for (let j = 0; j < 16; j++){
        let newDiv = document.createElement("div")
        newDiv.classList.add("square")
        newDiv.classList.add("row" + i)
        newDiv.classList.add("column" + j)
        let color = "rgb(" + (Math.random() * 255) + ", " + 
                            (Math.random() * 255) + ", " + 
                            (Math.random() * 255) + ")"
        newDiv.style.backgroundColor = color;

        //newDiv.addEventListener("mouseover", function (e) {

        newDiv.addEventListener("mouseover", function (e) {
            const style = window.getComputedStyle(newDiv);
            let opacity = style.getPropertyValue("opacity");
            newOpacity = parseFloat(opacity) + 0.1;
            e.target.style.opacity = newOpacity;
        });



        row.appendChild(newDiv)
    }
    body.appendChild(row)
}