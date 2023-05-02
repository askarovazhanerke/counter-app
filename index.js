let plusOneBtn = document.querySelector('.js-pool__btn');
let counterText = document.querySelector('.js-counter');
let resetBtn = document.querySelector('.js-reset__btn');
let counter = 0;
plusOneBtn.addEventListener('click', function() {
    counter = counter + 1;
    counterText.innerText = counter;

}); 

resetBtn.addEventListener('click', function() {
    counter = 0;
    counterText.innerText = counter;
});
