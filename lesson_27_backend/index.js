// Import
import regestration from './js/form.js  ';

// get DOM elements
const regestrationForm = document.getElementById('js-form');
console.log('regestrationForm: ', regestrationForm);

// Event listeners
regestrationForm.addEventListener('submit', regestration);
