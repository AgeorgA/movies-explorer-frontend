import { configMainApi, configUrl } from './constants';

const { mainApiUrl, routes } = configMainApi;

const getResponseData = res => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const register = ({ name, email, password }) => {
  return fetch(`${mainApiUrl}${routes.routeRegister}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ name: name, email: email, password: password })
  }).then(res => {
    return getResponseData(res);
  });
};

export const authorize = ({ email, password }) => {
  return fetch(`${mainApiUrl}${routes.routeAuth}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ email, password })
  }).then(res => {
    return getResponseData(res);
  });
};

export const logout = () => {
  return fetch(`${mainApiUrl}${routes.routeOut}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }).then(res => {
    return getResponseData(res);
  });
};

export const getUser = token => {
  return fetch(`${mainApiUrl}${routes.routeCheckJwl}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    credentials: 'include'
  }).then(res => {
    return getResponseData(res);
  });
};

export const updateUserInfo = (name, email) => {
  return fetch(`${mainApiUrl}${routes.routeCheckJwl}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ name, email })
  }).then(res => {
    return getResponseData(res);
  });
};

export const savedMovies = movie => {
  return fetch(`${mainApiUrl}${routes.routeMovies}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${configUrl.imageUrl}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: `${configUrl.imageUrl}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id
    })
  }).then(res => {
    return getResponseData(res);
  });
};

export const getMovies = () => {
  return fetch(`${mainApiUrl}${routes.routeMovies}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }).then(res => {
    return getResponseData(res);
  });
};

export const deleteMovie = movieId => {
  const token = localStorage.getItem('jwt');
  return fetch(`${mainApiUrl}${routes.routeMovies}/${movieId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`
    },
    credentials: 'include'
  }).then(res => {
    return getResponseData(res);
  });
};
