const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const questions = document.querySelectorAll('.questions');
const submitBtn = document.getElementById('submit');
const result = document.getElementById('result');
const title = document.getElementById('title');

const total = questions.length;
let count = 0;

const hideAll = () => questions.forEach( q => q.style.display = 'none' );

const showNext = () => {
    if(count < total-1) count++;
  
  hideAll();
  questions[count].style.display = 'block';
}

const showPrev = () => {
    if(count > 0) count--;
  
  hideAll();
  questions[count].style.display = 'block';
}

nextBtn.addEventListener('click',function(){
    showNext();
    hidePrevBtn();
    hideNextBtn();
    handleClick();
  })

prevBtn.addEventListener('click',function(){
    showPrev();
    hidePrevBtn();
    hideNextBtn();
  })


function handleClick() {  
let amountCorrect = 0;       
for(let i = 1; i <= 3; i++) {
  let radios = document.getElementsByName('group'+i);
  for(let j = 0; j < radios.length; j++) {
    let radio = radios[j];
    if(radio.value === "true" && radio.checked) {
      amountCorrect++;
    }
  }
 }
 return amountCorrect;
}

const hidePrevBtn = () => {
    if (count !== 0) {
        prevBtn.classList.remove('not-active');
    } else {
        prevBtn.classList.add('not-active');
    }
}

const hideNextBtn = () => {
    if(count !== 2) {
        nextBtn.classList.remove('not-active');
        submitBtn.classList.add('not-active');
    } else {
        nextBtn.classList.add('not-active');
        submitBtn.classList.remove('not-active');
    }
}

submitBtn.addEventListener('click', function() {
    hideAll();
    prevBtn.classList.add('not-active');
    title.classList.add('center');
    submitBtn.classList.add('not-active');
    result.classList.remove('not-active');
    result.innerText = `Your Score is ${handleClick()} out of 3`;
});







