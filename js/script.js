const dropdownDefault = document.querySelector(".dropdown-default");
const dropdownContent = document.querySelector(".dropdown-content");
const spanCaret = document.querySelector(".default-icon");
function cleanSignal(){
    dropdownContent.childNodes.forEach((dropDownItem)=>{
        if(dropDownItem.childElementCount===2){
            dropDownItem.removeChild(dropDownItem.lastChild);
        }
    });
}
dropdownDefault.addEventListener("click",()=>{
    if(dropdownContent.style.display === "none"){
        dropdownContent.style.display = "flex";
        spanCaret.classList.remove("fa-caret-up");
        spanCaret.classList.add("fa-caret-down");
    }else{
        dropdownContent.style.display = "none";
        spanCaret.classList.remove("fa-caret-down");
        spanCaret.classList.add("fa-caret-up");
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