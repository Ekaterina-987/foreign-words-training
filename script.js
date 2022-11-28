const object = [{
        word: 'cat',
        translation: 'кот',
        example: 'cute cat',
    },
    {
        word: 'dog',
        translation: 'собака',
        example: 'friendly dog',
    },
    {
        word: 'fox',
        translation: 'лиса',
        example: 'sly fox',
    },
    {
        word: 'lion',
        translation: 'лев',
        example: 'noble lion',
    },
    {
        word: 'bear',
        translation: 'медведь',
        example: 'clubfoot bear',
    },
    {
        word: 'wolf',
        translation: 'волк',
        example: 'bad wolf',
    },
]

const card = document.querySelector('.flip-card');
const studyCards = document.querySelector('.study-cards');
const slider = document.querySelector('.slider');
const cardFront = document.querySelector('#card-front');
const cardBack = document.querySelector('#card-back');
const template = document.querySelector('#word-stats');
const buttonExam = document.querySelector('#exam');
const buttonBack = document.querySelector('#back');
const buttonNext = document.querySelector('#next');
const examCards = document.querySelector("#exam-cards");
let patternExamCards1;
let patternExamCards2;


function doWorkoutMode() {
    let rand = Math.floor(Math.random() * object.length); //выбираем рандомно слово из object

    const objectNew = object[rand];

    const { word, translation, example } = objectNew; //деструктурируем свойства объекта

    cardFront.querySelector('h1').textContent = word; //подставляем англ слово
    cardBack.querySelector('h1').textContent = translation; //подставляем перевод слова
    cardBack.querySelector('p span').textContent = example; //подставляем пример в карточку
}

doWorkoutMode();

card.addEventListener('click', function() {
    card.classList.toggle('active');

})

buttonNext.addEventListener('click', function() {
    let j = 0;
    const currentWord = document.querySelector('#current-word');
    let num = +currentWord;
    alert(typeof object);
    num++;

})

buttonExam.addEventListener('click', function() {
    document.getElementById('study-mode').style.display = "none";
    document.getElementById('exam-mode').style.display = "block";
    studyCards.remove();

    for (let i = 1; i <= object.length; i++) {
        patternExamCards1 = document.createElement('div');
        patternExamCards1.classList.add('card');
        examCards.append(patternExamCards1);

        patternExamCards2 = document.createElement('div');
        patternExamCards2.classList.add('card');
        examCards.append(patternExamCards2);

        for (let objectExamCards2 of object) {
            let rand2 = Math.floor(Math.random() * object.length);
            objectExamCards2 = object[rand2];
            const { word, translation } = objectExamCards2;

            patternExamCards1.innerText = word;
            patternExamCards2.innerText = translation;
        }

    }

})