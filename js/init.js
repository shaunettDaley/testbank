(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


//detect if user click the close  button
let popupForm = document.querySelector('.popup-form');
let exitButton = document.querySelector('.exit-test');
let exitTestPopup = document.querySelector('.popup-wrapper-exit');
let mainPopup = document.querySelector('.popup-wrapper');
let takeTest = document.querySelector('.take-test');

exitButton.addEventListener('click', e => {
  e.preventDefault();
  console.log(' exit button click');
  exitTestPopup.style.display ="block";
  mainPopup.style.display = "none";
  closingWindow();
})


takeTest.addEventListener('click', e => {
  e.preventDefault();
  console.log(' disregard button click');
  exitTestPopup.style.display ="none";
  mainPopup.style.display = "block";
})


let closingWindow = ()=> {
  setTimeout(()=> {
    window.close();
  },5000);
}


//get value from form
let showname = document.querySelector('.info');
popupForm.addEventListener('submit', e => {
  e.preventDefault();
  //get the value
  let name = popupForm.firstname.value.trim();
  console.log(name);
  mainPopup.style.display = "none";
showname.textContent = name;
})




document.addEventListener('DOMContentLoaded',()=> {
  let modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);
})


//checking answers
let correctAnswers = ['C','B','D'];
let form = document.querySelector('.quiz-form');
let result= document.querySelector('.result');

//listen when submit button click
form.addEventListener('submit', e => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [form.q1.value,form.q2.value,form.q3.value];
  const quest = [form.q1,form.q2,form.q3];
  let status = document.querySelectorAll('.status-mark');
  userAnswers.forEach((answer, index)=> {
    console.log(index);
    if(answer === correctAnswers[index]){
     // answer[correctAnswers[index]].style.color = "red";
            score +=10;
        
    }
    
  });
 
 
    
result.querySelector('span').textContent = `${score}%`;
result.classList.remove('hidenow');
  console.log(score);

  scrollTo(0,0);
})

