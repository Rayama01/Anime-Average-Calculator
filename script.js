const artValue = document.getElementById("artInput");
let submitBtn = document.getElementById("submitBtn");
const outputNum = document.getElementById("outputNum");


submitBtn.addEventListener("click", () => {
    let a = artValue.value;
    if(a > 10) {
        artValue.value = 0;
    } else {
        outputNum.innerText = parseInt(a);
    }
})