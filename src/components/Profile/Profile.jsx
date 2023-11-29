import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = ({ onAuth }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleRedact = e => {
    e.preventDefault();
    if (isVisible === true) {
      return setIsVisible(false);
    }
    return setIsVisible(true);
  };

  return (
    <main className="profile">
      <div className="profile__container">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form" onSubmit={handleRedact}>
          <label htmlFor="email" className="profile__label">
            Имя
            <input
              placeholder="Введите имя"
              disabled={isVisible}
              type="text"
              id="email"
              className="profile__input"
              required
            />
            <span className="profile__error">Пожалуйста, используйте не менее 4 символов.</span>
          </label>

          <div className="profile__line"></div>

          <label htmlFor="name" className="profile__label">
            E-mail
            <input
              disabled={isVisible}
              placeholder="Введите e-mail"
              type="email"
              id="name"
              className="profile__input"
              required
            />
            <span className="profile__error">Пожалуйста, используйте не менее 4 символов.</span>
          </label>

          <span
            className={`profile__error-submit ${
              isVisible === false ? 'profile__error-submit_show' : ''
            }`}
          >
            При обновлении профиля произошла ошибка.
          </span>
          <button
            className={`profile__button-save  ${
              isVisible === false ? 'profile__btn-save_show' : ''
            } `}
          >
            Сохранить
          </button>
        </form>
        <button
          onClick={handleRedact}
          className={`profile__button-redact ${
            isVisible === true ? 'profile__button-redact_show' : ''
          } links-hover`}
        >
          Редактировать
        </button>

        <Link
          to="/"
          className={`profile__link ${isVisible === true ? 'profile__link_show' : ''} links-hover`}
          onClick={onAuth}
        >
          Выйти из аккаунта
        </Link>
      </div>
    </main>
  );
};

export default Profile;
