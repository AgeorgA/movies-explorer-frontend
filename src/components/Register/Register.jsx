import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import AuthInput from '../AuthInput/AuthInput';
import useValidationsForms from '../../hooks/useValidationsForms';
import { emailRegex, nameRegex } from '../../utils/constants';

const Register = ({
  onRegister,
  sourceInfoTooltips,
  onBlockedButton,
  onResetSourceInfoTooltips
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (isValid) {
      onRegister(inputValues);
    }
  };

  const { inputValues, errMessage, isValid, handleChange } = useValidationsForms();

  return (
    <main className="register auth">
      <AuthForm
        title={'Добро пожаловать!'}
        buttonText={'Зарегистрироваться'}
        authMessage={'Уже зарегистрированы? '}
        authLinkMessage={'Войти'}
        endpoint={'/signin'}
        onSubmit={handleSubmit}
        onDisabled={isValid}
        sourceInfoTooltips={sourceInfoTooltips}
        onBlockedButton={onBlockedButton}
        onResetSourceInfoTooltips={onResetSourceInfoTooltips}
      >
        <AuthInput
          inputType={'text'}
          labelName={'Имя'}
          idInput={'name'}
          nameInput={'name'}
          placeholderInput={'Введите имя'}
          inputValue={inputValues.name ?? ''}
          erorrMessage={errMessage.name ?? ''}
          onChange={handleChange}
          pattern={nameRegex}
        />

        <AuthInput
          inputType={'email'}
          labelName={'E-mail'}
          idInput={'email'}
          nameInput={'email'}
          placeholderInput={'Введите email'}
          inputValue={inputValues.email ?? ''}
          erorrMessage={errMessage.email ?? ''}
          onChange={handleChange}
          pattern={emailRegex}
        />

        <AuthInput
          inputType={'password'}
          labelName={'Пароль'}
          idInput={'pwd'}
          nameInput={'password'}
          placeholderInput={'Введите пароль'}
          inputValue={inputValues.password ?? ''}
          erorrMessage={errMessage.password ?? ''}
          onChange={handleChange}
          minLength="8"
        />
      </AuthForm>
    </main>
  );
};
export default Register;
