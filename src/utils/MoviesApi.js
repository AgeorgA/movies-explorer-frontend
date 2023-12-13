import { configApiBeatFilm } from '../utils/constants';

const getResponseData = res => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getFilms = () => {
  return fetch(configApiBeatFilm.baseFilmsApiUrl, {
    methods: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(res => {
    return getResponseData(res);
  });
};
