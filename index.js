let faqs = [
  {
    question: 'One Piece vs DBZ ?',
    answer: 'DBZ'
  },
  {
    question: 'Naruto vs One Piece ?',
    answer: 'Naruto'
  },
  {
    question: 'Marvel vs DC Comics ?',
    answer: 'Marvel'
  }
];

const faqs_element = document.querySelector('.faqs');

function displayList(array = []) {

  faqs_element.innerHTML= "";

  for (let index = 0; index < array.length; index++) {
    const faq = array[index];
    

    const template = `<div class="faq">
    <div class="question">${faq.question}</div>
    <div class="answer">${faq.answer}</div>
    </div>`;

    faqs_element.insertAdjacentHTML('beforeend', template);
  }
}

displayList(faqs);


const faq_element = document.querySelectorAll('.faq');

function linkAction(e){
  this.classList.toggle('open');
}

faq_element.forEach( faq => faq.addEventListener('click', linkAction))
