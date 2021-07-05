window.addEventListener('load', ()=> {
  button = document.querySelector('button');
  button.addEventListener('click', ()=> {
    if(button.classList.contains("active")) {
      button.classList.remove("active")
    }else {
      button.classList.add("active")
    }
  })
})