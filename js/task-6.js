function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const userInput = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxContainer = document.querySelector('#boxes');

function createButtonHandler(event) {
   
  for (let i = 0; i < event; i++) {
    const box = document.createElement('div');
    box.style.width = 30 + 10 * i + 'px';
    box.style.height = 30 + 10 * i + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxContainer.append(box);
  }
  
 
}
function button(event) {
  event.preventDefault();
  const content = userInput.value;
  const userContent = parseInt(content, 10);
  if (userContent >= 1 && userContent <= 100) {
    createButtonHandler(userContent);
  }
  else{
    alert('Please enter a number between 1 and 100.');
  }
  userInput.value = '';
}

function destroyBoxes(event) {
  event.preventDefault();
  boxContainer.innerHTML = '';
}

createButton.addEventListener('click', button);
userInput.addEventListener('input', createButtonHandler);
destroyButton.addEventListener('click', destroyBoxes);