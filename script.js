const artInput = document.getElementById("artInput");
const musicInput = document.getElementById("musicInput");
const storyInput = document.getElementById("storyInput");
const charInput = document.getElementById("charInput");
const battleInput = document.getElementById("battleInput");
let submitBtn = document.getElementById("submitBtn");
const outputNum = document.getElementById("outputNum");


function calcInputs() {
    let artValue = artInput.value;
    let musicValue = musicInput.value;
    let storyValue = storyInput.value;
    let charValue = charInput.value;
    let battleValue = battleInput.value;

    if(artValue == 0 && storyValue && musicValue && charValue <=10) {
        outputNum.innerHTML = "MUST ENTER A VALUE 1 - 10";
    } else if(storyValue == 0 && artValue && musicValue && charValue <=10) {
        outputNum.innerHTML = "MUST ENTER A VALUE 1 - 10";
    } else if(musicValue == 0 && storyValue && artValue && charValue <=10) {
        outputNum.innerHTML = "MUST ENTER A VALUE 1 - 10";
    } else if(charValue == 0 && storyValue && musicValue && artValue <=10) {
        outputNum.innerHTML = "MUST ENTER A VALUE 1 - 10";
    }
    
    else if(artValue >10 || musicValue >10 || storyValue >10 || charValue >10 || battleValue >10) {
        outputNum.innerHTML = "MUST ENTER A VALUE 1 - 10";
    } 
    else if (artValue && musicValue && storyValue && charValue <=10 && battleValue == 0) {
        let op = (parseInt(artValue) + parseInt(musicValue) + parseInt(storyValue) + parseInt(charValue)) / 4;
        outputNum.innerHTML = parseFloat(op).toFixed(2);
    }
    else if ((artValue && musicValue && storyValue && charValue && battleValue <=10)) {
        let op = (parseInt(artValue) + parseInt(musicValue) + parseInt(storyValue) + parseInt(charValue) + parseInt(battleValue)) / 5;
        outputNum.innerHTML = parseFloat(op).toFixed(2);
    }
}

submitBtn.addEventListener("click", () => {
    calcInputs();
})