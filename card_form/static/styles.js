export {wrongEmptySpace, wrongNumberCard, summitButton};

let errorMessage = document.querySelectorAll('.data-error');
let icon = document.querySelectorAll("i");
let emptySpace = document.querySelectorAll('.data-card');

const wrongEmptySpace = () => {


    emptySpace.forEach((element, i) => {


        element.addEventListener('keyup', e => {
            e.preventDefault();

            wrongFullName(element, i);
            writeFrontCard(element, i);

        })
    })


}, wrongFullName = (element, i) => {

    if(element.value === '') {

        errorMessage[i].textContent = "Can't be blank";
        errorMessage[i].style.color = 'hsl(0, 100%, 66%)';
        icon[i].className = "fa-solid fa-circle-exclamation";
        icon[i].style.color = 'hsl(0, 100%, 66%)'
    }

    else if(element.value.length === element.minLength)  {

        icon[i].className = '';
    }

    else{

        errorMessage[i].textContent = '';

    }


}, wrongNumberCard = (findModule) => {


    if (findModule === false) {

        icon[0].className = 'fa-solid fa-circle-exclamation';
        icon[0].style.color = 'hsl(0, 100%, 66%)';

    }

    else icon[0].className = '';


    summitButton(findModule);

}, writeFrontCard = (element, i) => {

    let cardNumber = document.querySelectorAll('.card');

    cardNumber[i].value = element.value;


}, summitButton = (findModule) => {

    let summit = document.querySelector('#btn-verified');
    let form = document.getElementById('container-information')
    let verified = document.getElementsByClassName('container-verified');

    summit.addEventListener('click', e => {


      emptySpace.forEach(element =>{

          if(findModule === false || element.value.length === 0){

              e.preventDefault();
              alert('Please, cheack your crendentials');


          } else{
                  btnContinue();
                  form.style.display = 'none';
                  verified[0].style.display = 'initial';
              };

          });

    })

}, btnContinue = () => {

    let Continue = document.getElementById('btn-continue')

        Continue.addEventListener('click' , () => {

            location.reload()
        })

}



