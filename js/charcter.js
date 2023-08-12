const mode1 = document.querySelector(".switch")
const mode2 = document.querySelector(".switch2")


const mode = document.querySelector(".character-section1")

mode1.addEventListener("click", ()=>{
    mode.classList.toggle("active")
})

mode2.addEventListener("click", ()=>{
    mode.classList.remove("active")
})


fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });