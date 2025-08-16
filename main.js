const container = document.querySelector(".container")

for(let i = 0; i < 257; i++) {
    const div = document.createElement('div')
    div.style.box = "border: 1px solid black; height:25px; width:25px;"
    container.appendChild(div);
}
