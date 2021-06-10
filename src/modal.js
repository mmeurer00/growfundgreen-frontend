// Event Listeners For Campaign Modal
const modalbtn = document.querySelector(".modal-btn")
const modal = document.querySelector(".modal-overlay")
const closeBtn = document.querySelector(".close-btn")

modalbtn.addEventListener("click", function() {
    modal.classList.add("open-modal")
})

closeBtn.addEventListener("click", function(){
    modal.classList.remove("open-modal")

})


// Event Listeners For Donations Modal
const modalbtn2 = document.querySelectorAll(".modal-btn")[1]
const modal2 = document.querySelectorAll(".modal-overlay")[1]
const closeBtn2 = document.querySelectorAll(".close-btn")[1]
const donationContainer = document.getElementById("donation-container")

closeBtn2.addEventListener("click", function(){
    const form = donationContainer.querySelector("form")

    modal2.classList.remove("open-modal")
    donationContainer.removeChild(form)
})