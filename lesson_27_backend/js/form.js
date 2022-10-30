const innerText = (id, value) =>
  (document.getElementById(id).innerText = value);

const items = {
  firstName: {
    id: 'js-form-first-name-error',
    errors: {
      noName: 'Enter name',
      getMinLength: function () {
        return `Min length - ${items.firstName.minLength} symbol`;
      },
    },
    minLength: 4,
  },
  email: {
    id: 'js-form-email-error',
  },
  userName: {
    id: 'js-form-username-error',
  },
};
const regestration = (e) => {
  // Відміна стандратної поведінки
  e.preventDefault();
  // Створення форми
  const form = new FormData(e.target);
  // * Обробка форми
  // First name
  const firstName = form.get('firstname');

  const lastName = form.get('lastname');

  const password = form.get('password');

  const email = form.get('email');

  const username = form.get('username');

  const disabledSeasonAnimation = !!form.get('disabledSeasonAnimation');

  const language = form.get('language');

  // * Перевірка First name
  if (!firstName) {
    innerText(items.firstName.id, items.firstName.errors.noName);
    return;
  } else if (firstName.length < items.firstName.minLength) {
    innerText(items.firstName.id, items.firstName.errors.getMinLength());
  } else {
    innerText(items.firstName.id, null);
  }
  const reqestData = {
    role: 1,
    firstName,
    lastName,
    email,
    username,
    password,
    disabledSeasonAnimation,
    language,
  };
  const URL =
    'https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration';

  const emailError = document.getElementById('js-form-email-error');
  console.log('emailError: ', emailError);
  const userNameError = document.getElementById('js-form-username-error');
  console.log('userNameError: ', userNameError);
  
  fetch(URL, {
    method: 'post',
    body: JSON.stringify(reqestData),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((response) => {
      console.log('response: ', response);
      if (response.success) {
        alert(response.message[language]);
      } else if (
        'A user is already registered under this email ' ||
        'Под этим емейлом уже зарегистрировано пользователя' ||
        'Під цим емейлом уже зареєстровано користувача' ===
          response.message[language]
      ) {
        // innerText(items.email.id, response.message[language]);
        emailError.innerText = response.message[language];
      } else if (
        'This nickname is already taken ' ||
        'Этот псевдоним уже занят' ||
        'Цей псевдонім уже зайнятий' === response.message[language]
      ) {
        // innerText(items.userName.id, response.message[language]);
        userNameError.innerText = response.message[language];
      }

      console.log('items.userName.id.innerText: ', items.userName.id.innerText);
      console.log('items.username.id:', items.userName.id);
    });
};

export default regestration;
