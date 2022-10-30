const editText = document.getElementById('js-edit-text');

// Div with text
const divEdit = document.createElement('div');
divEdit.innerText = 'Press "ctrl + E" to edit it ';
divEdit.classList = 'square';
editText.appendChild(divEdit);

//  Text area
const textArea = document.createElement('textarea');
textArea.innerText = 'Press "ctrl + S" to save it ';
textArea.style.display = 'none';
textArea.id = 'js-text-area';
editText.appendChild(textArea);

document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.code === 'KeyE') {
    event.preventDefault();
    divEdit.style.display = 'none';
    textArea.style.display = 'block';
  }
  if (event.ctrlKey && event.code === 'KeyS') {
    event.preventDefault();
    divEdit.textContent = document.getElementById('js-text-area').value;
    divEdit.style.display = 'block';
    textArea.style.display = 'none';
    divEdit.appendChild(smallSquare);
  }
});
//* Third tasks
// Create small square
const smallSquare = document.createElement('div');
smallSquare.classList = 'square--small';
divEdit.appendChild(smallSquare);
smallSquare.addEventListener('mousedown', () => {
  document.addEventListener('mousemove', resizeDiv);
  document.addEventListener('mouseup', stopResize);
});

const resizeDiv = (e) => {
  divEdit.style.width = e.clientX - divEdit.offsetLeft + 'px';
  divEdit.style.height = e.clientY - divEdit.offsetTop + 'px';
};

const stopResize = () => {
  document.removeEventListener('mousemove', resizeDiv);
  document.removeEventListener('mouseup', stopResize);
};
