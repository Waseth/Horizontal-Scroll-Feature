let scrollCont = document.querySelector(".gallery");
let backBtn = document.getElementById("back-btn");
let nextBtn = document.getElementById("next-btn");

scrollCont.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollCont.scrollLeft += evt.deltaY;
    scrollCont.style.scrollBehavior = "auto";
});
nextBtn.addEventListener('click', ()=>{
    scrollCont.style.scrollBehavior = "smooth";
    scrollCont.scrollLeft += 900;
})
backBtn.addEventListener("click", () =>{
    scrollCont.style.scrollBehavior = "smooth";
    scrollCont.scrollLeft -= 900;
})