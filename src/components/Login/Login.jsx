import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import AuthForm from '../AuthForm/AuthForm';
import AuthInput from '../AuthInput/AuthInput';
import './Login.css';

const Login = ({ onAuth }) => {
  const Authorized = React.useContext(CurrentUserContext);

  const { pathname } = useLocation();

  const [formValue, setFormValue] = useState({
    authEmail: '',
    authPwd: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setFormValue({ ...formValue, [name]: value });
  };
  console.log(formValue);

  const handleClick = e => {
    console.log(e);
    e.preventDefault();
    onAuth();
  };

  return (
    <main className="login auth">
      <AuthForm
        title={'Рады видеть!'}
        buttonText={'Войти'}
        authMessage={'Ещё не зарегистрированы? '}
        authLinkMessage={'Регистрация'}
        endpoint={'/signup'}
        onClickLogin={handleClick}
      >
        <AuthInput
          inputValue={formValue.authEmail}
          inputType={'email'}
          placeholderInput={'Введите email'}
          labelName={'E-mail'}
          inptValue={'pochta@yandex.ru|'}
          idInput={'email'}
          nameInput={'authEmail'}
          erorrMessage={'Что-то пошло не так'}
          onChange={handleChange}
        />

        <AuthInput
          inputValue={formValue.authPwd}
          inputType={'password'}
          labelName={'Пароль'}
          placeholderInput={'Введите пароль'}
          idInput={'pwd'}
          nameInput={'authPwd'}
          erorrMessage={'Пожалуйста, используйте не менее 8 символов'}
          onChange={handleChange}
        />
      </AuthForm>
    </main>
  );
};

export default Login;
