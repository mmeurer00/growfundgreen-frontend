const modalbtn = document.querySelector(".modal-btn")
const modal = document.querySelector(".modal-overlay")
const closeBtn = document.querySelector(".close-btn")

modalbtn.addEventListener("click", function() {
    modal.classList.add("open-modal")
})

closeBtn.addEventListener("click", function(){
    modal.classList.remove("open-modal")
})

const modalbtn2 = document.querySelector(".modal-btn2")
const modal2 = document.querySelector(".modal-overlay2")
const closeBtn2 = document.querySelectorAll(".close-btn")[1]

/* modalbtn.addEventListener("click", function() {
    modal2.classList.add("open-modal")
}) */

closeBtn2.addEventListener("click", function(){
    modal2.classList.remove("open-modal")
})