export const configApiBeatFilm = {
  baseFilmsApiUrl: 'https://api.nomoreparties.co/beatfilm-movies'
};

export const emailRegex =
  '/^((([0-9A-Za-z]{1}[-0-9A-z]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}.){1,2}[-A-Za-z]{2,})$/u';
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
