// Event Listeners

// element.addEventListner("click", function);

const buttonTwo= document.querySelector('.btn-2');

function alertBtn()
{
    alert('I also love JavaScript');

}

buttonTwo.addEventListener("click", alertBtn);

// MouseOver
const newBackgroundcolor= document.querySelector('.box-3');

function changeBgColor(){
    newBackgroundcolor.style.backgroundColor='blue';
};
newBackgroundcolor.addEventListener('mouseover',changeBgColor);