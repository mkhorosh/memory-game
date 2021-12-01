console.log('hello')

document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'bulbasaur',
            img: 'images/001-little.png'
        },
        {
            name: 'charmander',
            img: 'images/004-little.png'
        },
        {
            name: 'squirtle',
            img: 'images/007-little.png'
        },
        {
            name: 'caterpie',
            img: 'images/010-little.png'
        },
        {
            name: 'weedle',
            img: 'images/013-little.png'
        },
        {
            name: 'rattata',
            img: 'images/019-little.png'
        },
        {
            name: 'bulbasaur',
            img: 'images/001-little.png'
        },
        {
            name: 'charmander',
            img: 'images/004-little.png'
        },
        {
            name: 'squirtle',
            img: 'images/007-little.png'
        },
        {
            name: 'caterpie',
            img: 'images/010-little.png'
        },
        {
            name: 'weedle',
            img: 'images/013-little.png'
        },
        {
            name: 'rattata',
            img: 'images/019-little.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/Happy-Face-little.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }


    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (optionOneId === optionTwoId) {
            cards[optionOneId].setAttribute('src', 'Happy-Face-little.png')
            cards[optionTwoId].setAttribute('src', 'Happy-Face-little.png')
            // alert('You have clicked the same image!')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            // alert('Yeh! you found  match)');
            cards[optionOneId].setAttribute('src', 'images/Happy-Face-little-white.png');
            cards[optionTwoId].setAttribute('src', 'images/Happy-Face-little-white.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/Happy-Face-little.png');
            cards[optionTwoId].setAttribute('src', 'images/Happy-Face-little.png');
            // alert('Try again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = '  Congratulation! you won';
        }
    }

    createBoard();

})