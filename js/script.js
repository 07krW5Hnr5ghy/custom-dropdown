const dropdownDefault = document.querySelector(".dropdown-default");
const dropdownContent = document.querySelector(".dropdown-content");
function cleanSignal(){
    dropdownContent.childNodes.forEach((dropDownItem)=>{
        console.log(dropDownItem.childElementCount);
        if(dropDownItem.childElementCount===2){
            dropDownItem.removeChild(dropDownItem.lastChild);
        }
    });
}
dropdownDefault.addEventListener("click",()=>{
    if(dropdownContent.style.display === "none"){
        dropdownContent.style.display = "flex";
        dropdownDefault.textContent = "Select an Item ^";
    }else{
        dropdownContent.style.display = "none";
        dropdownDefault.textContent = "Select an Item v";
    }
});
dropdownContent.childNodes.forEach(dropDownItem => {
    const signalCheck = document.createElement("span");
    signalCheck.textContent = "x";
    signalCheck.classList.add("signal-check");
    dropDownItem.addEventListener("click",()=>{
        cleanSignal();
        dropDownItem.appendChild(signalCheck);
    });
});