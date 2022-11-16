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
const studyCards = document.querySelector('.study-cards')
const cardFront = document.querySelector('#card-front');
const cardBack = document.querySelector('#card-back');
const template = document.querySelector('#word-stats');
const buttonExam = document.querySelector('#exam');
const buttonBack = document.querySelector('#back');
const buttonNext = document.querySelector('#next');
let examCards = document.querySelector("#exam-cards");
let patternExamCards;

/* Обработчик событий, который я изначально сделала и отправляла тебе раньше работает, но я посмотрела 
внимательнее демо и он делает не совсем то, что нужно. Получается, что сразу карточка пустая, при клике 
появляется слово, карточка переворачивается, появляется перевод с примером. А при следующем клике на этой же
карточке уже появляется другое слово. 
Поэтому я решила создать функцию doWorkoutMode(), с помощью которой случайное слово сразу же будет появляться 
на карточке, а уже в нее добавить обработчик событий, который при клике на карточку со словом переворачивает ее.
Но эта функция вобще не работает, почему я не понимаю. 
Я ее закоментировала сейчас, чтобы она не мешалась с обработчиком событий.  */


/*function doWorkoutMode() {
    let rand = Math.floor(Math.random() * object.length); //выбираем рандомно слово из object

    const objectNew = object[rand];

    const { word, translation, example } = objectNew; //деструктурируем свойства объекта

    cardFront.append(objectNew); //вставляем выбранное слово в карточку card

    cardFront.querySelector('h1').textContent = word; //подставляем англ слово
    cardBack.querySelector('h1').textContent = translation; //подставляем перевод слова
    cardBack.querySelector('p span').textContent = example; //подставляем пример в карточку

    card.addEventListener('click', function() {
        card.classList.toggle('active');
    })

}*/

card.addEventListener('click', function() {
        card.classList.toggle('active');

        let rand = Math.floor(Math.random() * object.length); //выбираем рандомно слово из object

        const objectNew = object[rand]; //подставляем выбранное слово в карточку card

        const { word, translation, example } = objectNew; //деструктурируем свойства объекта

        cardFront.querySelector('h1').textContent = word; //подставляем англ слово
        cardBack.querySelector('h1').textContent = translation; //подставляем перевод слова
        cardBack.querySelector('p span').textContent = example; //подставляем пример в карточку

        /* Этим обработчиком я хотела при клике на стрелки, чтобы менялись карточки с другими словами и менялся 
        номер слова и менялась карточка с другим словом. Цифру хотела увеливать на один, но этот код тоже 
        не работает. Или нельзя в обработчик событий добавлять еще один обработчик? 
        Как я поняла, последующие карточки с другими словами создавать уже не надо. Или надо? Я пробовала в этот 
        обработчик тоже вставить строки кода с выбором рандомного слова, как в первом обработчике, но ничего
        не получается.*/

        buttonNext.addEventListener('click', function() {
            let currentWord = document.querySelector('#current-word');
            let num = Number(currentWord);
            return num++;
        })

    })
    /* Этим обработчиком я переключаю на другой режим */

buttonExam.addEventListener('click', function() {
    document.getElementById('study-mode').style.display = "none";
    document.getElementById('exam-mode').style.display = "block";
    studyCards.remove();

    for (let i = 1; i <= object.length * 2; i++) {
        patternExamCards = document.createElement('div');
        patternExamCards.classList.add('card');
        examCards.append(patternExamCards);

        /* У меня получилось создать пустые карточки. Но не получается добавить слова из object. 
        Моя мысль была такая: сделать еще одну деструктуризацию объекта только со словом и переводом 
        и потом подставить их в карточки. Но это не работает.
        Я смогла добавить во все карточки одинаковый новый текст, который писала вручную. 
        Сейчас у меня из object добавляется только одно слово в первую карточку.
        А вот сделать, как в задании, чтобы во всех карточках были разные слова из object не получается.
        */

        let rand2 = Math.floor(Math.random() * object.length);
        const objectExamCards = object[rand2];
        const { word, translation } = objectExamCards;
        examCards.querySelector('div').textContent = word;
        examCards.querySelector('div').textContent = translation;


    }

})