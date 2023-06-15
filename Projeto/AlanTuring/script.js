function volta(){
  window.history.back();
}

const optionMenu = document.querySelector(".select-menu"),
      selectBtn = optionMenu.querySelector(".select-btn"),
      options = optionMenu.querySelectorAll(".option"),
      sBtn_text = optionMenu.querySelector(".sBtn_text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option =>{
  option.addEventListener("click", ()=>{
      let selectedOption = option.querySelector(".option-link").innerText;
      sBtn_text.innerText = selectedOption;

      optionMenu.classList.remove("active");
      
  })
}) 