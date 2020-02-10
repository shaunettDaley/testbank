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

//listen when submit button click
form.addEventListener('submit', e => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [form.q1.value,form.q2.value,form.q3.value];
  let satus = document.querySelector('.status.mark');
  userAnswers.forEach((answer, index)=> {
    if(answer === correctAnswers[index]){
      score +=10;
      //show the symbol
     // status.textContent = `<i class="fas fa-check"></i>`;
    }
    //status.textContent = `<i class="fas fa-check"></i>`;
   
  });
    

  console.log(score);
})