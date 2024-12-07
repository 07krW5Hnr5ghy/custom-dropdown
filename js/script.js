const dropdownDefault = document.querySelector(".dropdown-default");
const dropdownContent = document.querySelector(".dropdown-content");
dropdownDefault.addEventListener("click",()=>{
    if(dropdownContent.style.display === "none"){
        dropdownContent.style.display = "flex";
        dropdownDefault.textContent = "Select an Item ^";
    }else{
        dropdownContent.style.display = "none";
        dropdownDefault.textContent = "Select an Item v";
    }
});