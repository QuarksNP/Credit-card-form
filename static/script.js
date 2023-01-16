
import {wrongEmptySpace, wrongNumberCard} from './styles.js'

const cardNumber = document.querySelector('#card-number'),
      expDate = document.querySelector('#input-date'),
      frontCardNumber = document.querySelector('#number-card')

let arrayCardNumber = [],
    reverse = [],
    checkNumber;



let container = 0,
    module = 0;


/**
 * initialize rules for card numbers
 */
const listenCardNumber = () => {

    cardNumber.addEventListener('keyup', (e) => {

        if(cardNumber.value.length === 19)   verifyCardNumber(cardNumber);

        let spaces = cardNumber.value.replace(/ /g, '').length;

        insertWhiteSpace(spaces);


        switch (e.key) {

            case 'Backspace': findWhiteSpace(cardNumber);

            //case ' ' : e.preventDefault(); return false;

        }


    });
};


listenCardNumber();


/**
 * Insert whiteSpaces for each 4 numbers
 */
const insertWhiteSpace = (spaces) => {

    if (spaces === 4 || spaces === 8 || spaces === 12) cardNumber.value += ' ';


    /**
     * If the user wishes to delete a number, we pass the function the event 'Backspace' to update the cardNumber
     */
}, findWhiteSpace = (cardNumber) => {

    let findSpace = cardNumber.value.slice(-1);

    if (findSpace.includes(' ')) cardNumber.value = cardNumber.value.slice(0, -1);


    /**
     * when the user insert his card number (16 digits), we verify with Luhn algorithm
     */
}, verifyCardNumber = (cardNumber) => {

    container = 0;

    arrayCardNumber = [...cardNumber.value].filter((item) => item !== ' ');

    reverse = arrayCardNumber.reverse();
    checkNumber = [].concat(reverse);

    for (let i = 1; i < reverse.length; i += 2) checkDigits(reverse, checkNumber, i);

    module = reverse.reduce((a, b) => a + Number(b), 0);

    wrongNumberCard(findModule(module));


    /**
     * We divide the digits in two to add them
     */
}, checkDigits = (doubleArray, checkNumber, i) => {

    doubleArray[i] *= 2;
    checkNumber[i] = doubleArray[i] % 10;

    if (10 <= doubleArray[i]) container++;

    /**
     * Return the check to the main algorithm
     */
}, findModule = (module) => (module + container) % 10 === 0;


const listenExpDate = () => {

    expDate.addEventListener('keypress', e =>{

        let slash = expDate.value.replace(/ /g, '').length
        insertSlashExpDate(slash);

    })
}

listenExpDate()

const insertSlashExpDate = (expDateSlash) => {

    if(expDateSlash === 2) expDate.value += '/';

}



wrongEmptySpace();