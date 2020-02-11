(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


document.addEventListener('DOMContentLoaded',()=> {
  console.log('testying');
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
            score +=10;
        
    }
    
  });
 
 
    
result.querySelector('span').textContent = `${score}%`;
result.classList.remove('hidenow');
  console.log(score);

  scrollTo(0,0);
})

