import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import AuthInput from '../AuthInput/AuthInput';

const Register = () => {
  const { pathname } = useLocation();

  return (
    <main className="register auth">
      <AuthForm
        title={'Добро пожаловать!'}
        buttonText={'Зарегистрироваться'}
        authMessage={'Уже зарегистрированы? '}
        authLinkMessage={'Войти'}
        endpoint={'/signin'}
      >
        <AuthInput
          inputType={'text'}
          labelName={'Имя'}
          inputValue={'Виталий'}
          idInput={'name'}
          nameInput={'authName'}
          placeholderInput={'Введите имя'}
          erorrMessage={'Что - то пошло не так...'}
        />

        <AuthInput
          inputType={'email'}
          labelName={'E-mail'}
          inputValue={'pochta@yandex.ru'}
          idInput={'email'}
          nameInput={'authEmail'}
          placeholderInput={'Введите email'}
          erorrMessage={'Что - то пошло не так...'}
        />

        <AuthInput
          inputType={'password'}
          labelName={'Пароль'}
          inputValue={'••••••••••••••'}
          idInput={'pwd'}
          nameInput={'authEmail'}
          placeholderInput={'Введите пароль'}
          erorrMessage={'Пожалуйста, используйте не менее 8 символов.'}
        />
      </AuthForm>
    </main>
  );
};

export default Register;
