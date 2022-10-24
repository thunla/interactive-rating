const ratingBtn = document.querySelector(".submit__rating");
const beforeRating = document.querySelector(".before__rating");
const afterRating = document.querySelector(".after__rating");
const ratingNumber = document.querySelectorAll(".rating__number");
const selectedNumber = document.querySelector(".selected__number");
const card = document.querySelector(".card");
const number = 0;
ratingNumber.forEach((number)=>{
    number.addEventListener("click", function(){
        ratingNumber.forEach((number) =>{
            number.classList.remove("active");
        })
        number.classList.add("active");
        selectedNumber.innerHTML = number.textContent;
    })
})
ratingBtn.addEventListener("click", function(){
    if(selectedNumber.textContent === ""){
        alert("Please choose rating!");
    }
    else{
        card.classList.add("rotate180");
        beforeRating.classList.add("hidden");
        afterRating.classList.add("show", "rotate-180");
    }
})
