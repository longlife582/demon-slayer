const btn1 = document.querySelector(".next1");
const btn2 = document.querySelector(".next2");
const btn3 = document.querySelector(".next3"); 
const btn4 = document.querySelector(".next4");
const btn5 = document.querySelector(".next5");
const btn6 = document.querySelector(".next6");



const div1 = document.querySelector(".hero-section");
const div2 = document.querySelector(".hero-section2");
const div3 = document.querySelector(".hero-section3");



btn2.addEventListener("click", (e) => {
  div2.classList.toggle("active");
});

btn3.addEventListener("click",()=>{
    div2.classList.remove("active")
})

btn4.addEventListener("click",()=>{
    div3.classList.toggle("active")
})

btn5.addEventListener("click",()=>{
    div3.classList.remove("active")
})






  




