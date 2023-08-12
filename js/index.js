const btn1 = document.querySelector(".next1");
const btn2 = document.querySelector(".next2");
const btn3 = document.querySelector(".next3");
const btn4 = document.querySelector(".next4");
const btn5 = document.querySelector(".next5");
const btn6 = document.querySelector(".next6");

const div1 = document.querySelector(".hero-section");
const div2 = document.querySelector(".hero-section2");
const div3 = document.querySelector(".hero-section3");

// nav drop down
const burgers = document.querySelectorAll(".burger");
const drop = document.querySelectorAll(".down")


burgers.forEach((nav)=>{
    
    nav.addEventListener("click",()=>{
        
        drop.forEach((row)=>{
            nav.classList.toggle("rotate")
            row.classList.toggle("drop-down")
        })
    })
})






btn2.addEventListener("click", (e) => {
  div2.classList.toggle("active");
});

btn3.addEventListener("click", () => {
  div2.classList.remove("active");
});

btn4.addEventListener("click", () => {
  div3.classList.toggle("active");
});

btn5.addEventListener("click", () => {
  div3.classList.remove("active");
});
