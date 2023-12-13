export const configApiBeatFilm = {
  baseFilmsApiUrl: 'https://api.nomoreparties.co/beatfilm-movies'
};

export const emailRegex = '^[a-zA-Z0-9+_.\\-]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]{2,4}$';
export const nameRegex = '[A-Za-zА-Яа-яЁё\\s\\-]+';

export const codeError = {
  dataDublicate: 409,
  authError: 401,
  dataError: 400
};

export const configMainApi = {
  mainApiUrl: 'https://api.mvaea.nomoredomainsmonster.ru',
  routes: {
    routeRegister: '/signup',
    routeAuth: '/signin',
    routeOut: '/signout',
    routeCheckJwl: '/users/me',
    routeMovies: '/movies'
  }
};

export const message = {
  searchPlaceholderInput: 'Фильм',
  emptyPlaceholderInput: 'Нужно ввести ключевое слово',
  userExist: 'Пользователь с таким email уже существует',
  registerUserError: 'При регистрации пользователя произошла ошибка',
  loginPasswordIncorrect: 'Вы ввели неправильный логин или пароль',
  authorizationError: 'При авторизации произошла ошибка',
  userDateModified: 'Данные профиля успешно изменены'
};

export const configUrl = {
  imageUrl: 'https://api.nomoreparties.co'
};
