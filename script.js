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

const cards = document.querySelector('.flip-card');
const studyCards = document.querySelector('.study-cards');
const slider = document.querySelector('.slider');
const cardFront = document.querySelector('#card-front');
const cardBack = document.querySelector('#card-back');
const template = document.querySelector('#word-stats');
const buttonExam = document.querySelector('#exam');
const buttonBack = document.querySelector('#back');
const buttonNext = document.querySelector('#next');
const currentWord = document.querySelector('#current-word');
const totalWord = document.querySelector('#total-word');
let examCards = document.querySelector("#exam-cards");
let time = document.querySelector("#time");
let timerId;



function doWorkoutMode() {
    let rand = Math.floor(Math.random() * object.length); //выбираем рандомно слово из object

    const objectNew = object[rand];

    const { word, translation, example } = objectNew; //деструктурируем свойства объекта

    cardFront.querySelector('h1').textContent = word; //подставляем англ слово
    cardBack.querySelector('h1').textContent = translation; //подставляем перевод слова
    cardBack.querySelector('p span').textContent = example; //подставляем пример в карточку
}

doWorkoutMode();

cards.addEventListener('click', function() {
    cards.classList.toggle('active');

})

buttonNext.addEventListener('click', function() {
    currentWord.textContent = ++currentWord.textContent;
    buttonBack.removeAttribute('disabled');

    for (let j = 0; j <= 5; j++) {
        doWorkoutMode(object[j]);

        if (j == 5) {
            buttonNext.disabled = true;
        }

    }

    /*if (currentWord === '5') {
        buttonNext.disabled = true;
    }*/

})

buttonBack.addEventListener('click', function() {
    currentWord.textContent = --currentWord.textContent;
    for (let j = 0; j >= 0; j--) {
        doWorkoutMode(object[j - 1]);

    }
    if (j == 1) {
        buttonBack.disabled = true;
    }

})

buttonExam.addEventListener('click', function() {
    document.getElementById('study-mode').style.display = "none";
    document.getElementById('exam-mode').style.display = "block";
    studyCards.remove();

    for (let i = 0; i < object.length; i++) {
        patternExamCards1 = document.createElement('div');
        patternExamCards1.classList.add('card');
        patternExamCards1.textContent = object[i].word;
        examCards.append(patternExamCards1);

        patternExamCards2 = document.createElement('div');
        patternExamCards2.classList.add('card');
        patternExamCards2.textContent = object[i].translation;
        examCards.append(patternExamCards2);

    }

    timerId = setInterval(function() {
            let minutes = time.textContent.split(":")[0];
            let seconds = time.textContent.split(":")[1];

            if (seconds == 59) {
                minutes++;
                seconds = 0;
                time.textContent = `${minutes}:${seconds}`;
            } else {
                seconds++;
                time.textContent = `${minutes}:${seconds}`;
            }

            if (seconds < 10) {
                time.textContent = `${minutes}:0${seconds}`;
            }
            if (minutes < 10 && seconds == 00) {
                time.textContent = `0${minutes}:${seconds}`;
            }
        }, 100)
        //alert(typeof examCards);

    //examCards = examCards.sort(() => Math.random() - 0.5);
    //console.log(examCards)

})

/*function p() {
    examCards = examCards.sort(() => Math.random() - 0.5);
    console.log(examCards)
}

p()*/
//examCards = examCards.sort(() => Math.random() - 0.5);

examCards.addEventListener('click', function(event) {
    let target = event.target;
    selectCard(target);

})

function selectCard(card) {
    card[0].classList.add('correct');
    if (card[0] == card[1]) {
        card[1].classList.add('correct');
    } else {
        card[1].classList.add('wrong');
    }

}