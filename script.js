const submitBtn = document.querySelector(".btn-submit");
const ratingBubbles = document.querySelectorAll('.rating-circle');
const ratingSide = document.querySelector('.rating-side');
const thanksSide = document.querySelector('.thanks-side');
const selectionMsg = document.querySelector('.selection-msg');


function selectRating(event){
    ratingBubbles.forEach(function(item){
        if(event.target !== item)
            {item.classList.remove('rating-circle-selected')};
        event.target.classList.toggle('rating-circle-selected');
    })

}

function getRating(){
    let rating = -1;
    ratingBubbles.forEach(bubble => {
        if(bubble.classList.contains('rating-circle-selected')){
            rating = Number(bubble.childNodes[0].textContent);
        }
    })
    return rating;
}

function submitRating(event){
    event.preventDefault();
    let rating = getRating();
    if(rating<0){
        return;
    }
    ratingSide.classList.add('hide-side');
    thanksSide.classList.remove('hide-side');
    selectionMsg.innerText = `You selected ${rating} out of 5`;
}


ratingBubbles.forEach(item => item.addEventListener('click', selectRating));
submitBtn.addEventListener('click', submitRating)


