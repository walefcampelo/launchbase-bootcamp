const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener("click", function(){
        modalOverlay.classList.add('active')
        const imgId = card.getAttribute("id");
        modalOverlay.querySelector("img").src = `${imgId}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})

