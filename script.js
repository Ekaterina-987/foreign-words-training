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


let j = 1;
buttonNext.addEventListener('click', function() {
    buttonBack.removeAttribute('disabled');
    if (j === 4) {
        buttonNext.disabled = true;
        currentWord.textContent = ++j;
    } else {
        doWorkoutMode(object[j++]);
        currentWord.textContent = j;
    }
})

buttonBack.addEventListener('click', function() {
    buttonNext.disabled = false;
    if (j === 1) {
        buttonBack.disabled = true;
    } else {
        doWorkoutMode(object[--j]);
        currentWord.textContent = j;
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
    shuffle(examCards);
    const fragment = new DocumentFragment();
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = object[i];
    fragment.append(div);
    document.body.append(fragment)
        //examCards.innerHTML = shuffle(examCards)

    /*timerId = setInterval(function() {
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
        }, 100)*/

})

function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}

/*let n = examCards.addEventListener('click', function(event) {
    let target = event.target;
    selectCard(target);
    //examCards.classList.add('correct');

})*/

function selectCard(card) {
    card.classList.add('correct');

}

const dict = {}
for (let elem of object) {
    const { word, translation } = elem;
    dict[word] = translation;
    dict[translation] = word;
    console.log(dict)
}

/*for (let m = 0; m <= examCards.length; m++) {
    examCards[i].addEventListener('click', function() {
        examCards.classList.add('correct');
    })
}*/

//const car = document.querySelectorAll('div');
for (let oneCard of examCards) {
    oneCard.addEventListener('click', function() {
        selectCard();
    })
}