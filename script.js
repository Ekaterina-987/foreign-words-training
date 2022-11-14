const card = document.querySelector('.flip-card');
const cardFront = document.querySelector('#card-front');
const cardBack = document.querySelector('#card-back');
const template = document.querySelector('#word-stats');
const buttonExam = document.querySelector('#exam');

const object = [{
        word: 'cat',
        translation: 'кот',
    },
    {
        word: 'dog',
        translation: 'собака',
    },
    {
        word: 'fox',
        translation: 'лиса',
    },
    {
        word: 'lion',
        translation: 'лев',
    },
    {
        word: 'bear',
        translation: 'медведь',
    },
    {
        word: 'wolf',
        translation: 'волк',
    },
]

card.addEventListener('click', function(objectNew) {
    card.classList.toggle('active');

    let rand = Math.floor(Math.random() * object.length); //выбираем рандомно слово из object
    objectNew.innerText = object[rand]; //подставляем выбранное слово в карточку card

    //const objectNew = object[rand];

    const { word, translation } = objectNew; //деструктурируем свойства объекта

    cardFront.querySelector('h1').textContent = word; //подставляем англ слово
    cardBack.querySelector('h1').textContent = translation; //подставляем перевод слова

})

buttonExam.addEventListener('click', function() {
    document.getElementById('exam-mode').style.display = "block";
    document.getElementById('exam-cards').style.display = "block";
    document.getElementById('study-mode').style.display = "none";
    document.getElementById('card-front').style.display = "none";
})