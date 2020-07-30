//intial ratings
const ratings={
    hows:4.5,
    drivernature:4.3,
    clean:4,
    overallRating:5
}
//total ratings
const ratingTotal=5;
//Run getRatings
window.addEventListener('DOMContentLoaded',getRatings);
//forms
const ratingSelect=document.getElementById('rating-select');
const ratingControl=document.getElementById('rating-control');

let rating;
//rating change
ratingSelect.addEventListener('change',(e)=>{
    rating=e.target.value;
    //turn on rating control
    ratingControl.disabled=false;
    ratingControl.value=ratings[rating];

});
//control rating change
ratingControl.addEventListener('blur',(e)=>{
    const myRating=e.target.value;
    if(myRating>5){
        alert('please rate between in 1-5');
        return;
    }

    ratings[rating]=myRating;
    getRatings();
})
//get ratings

function getRatings() {
    for(let rating in ratings){
        const starPercentage=(ratings[rating]/ratingTotal)*100;
     
        //roundtonearest10
        const starPercentageRounded=`${Math.round(starPercentage/10)*10}%`;
        document.querySelector(`.${rating} .stars-inner`).style.width=starPercentageRounded;
        document.querySelector(`.${rating} .number-rating`).innerHTML=ratings[rating];
     }
}
