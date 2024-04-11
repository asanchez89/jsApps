const containerEl = document.querySelector(".container");

for(let i = 0; i < 50; i++){
    const colorContainerEl = document.createElement('div');
    colorContainerEl.classList.add("color-container");

    const colorCodeEl = document.createElement("span");
    colorCodeEl.classList.add("color-code");
    colorContainerEl.appendChild(colorCodeEl);

    const copyButtonEl = document.createElement("button");
    copyButtonEl.innerText = "Copy";
    colorContainerEl.appendChild(copyButtonEl);

    containerEl.appendChild(colorContainerEl);
}

function randomColor(){
    const chars = "0123456789ABCDEF";
    const colorCodeLength = 6;
    let colorCode = "";

    for(let i=0; i<colorCodeLength; i++){
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }

    return colorCode;
}

const mainColorContainerEls = document.querySelectorAll('.color-container');
generateColor();

function generateColor(){
    for(let i=0; i<mainColorContainerEls.length; i++){
        const colorContainerEl = mainColorContainerEls[i];
        const newColorCode = randomColor();
        const colorCodeEl = colorContainerEl.querySelector('.color-code');

        colorContainerEl.style.backgroundColor = "#"+newColorCode;
        colorCodeEl.innerText = "#"+newColorCode;
    }
}