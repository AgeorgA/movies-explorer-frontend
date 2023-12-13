import React, { useState, useRef, useEffect } from 'react';
import './SearchForm.css';
import useValidationsForms from '../../hooks/useValidationsForms';
import { message } from '../../utils/constants';

const SearchForm = ({ onSubmit, isLoading, isChecked, onChange, oldRequest }) => {
  const [errSearchMessage, setErrSearchMessage] = useState(message.searchPlaceholderInput);
  const inputSearch = useRef(null);

  const listenerValidation = isValid => {
    if (isValid) {
      setErrSearchMessage(message.searchPlaceholderInput);
    } else {
      setErrSearchMessage(message.emptyPlaceholderInput);
    }
    inputSearch.current.focus();
  };

  const { inputValues, isValid, handleChange } = useValidationsForms();

  const handleSubmit = e => {
    e.preventDefault();
    listenerValidation(isValid);
    if (isValid) {
      onSubmit(inputValues.inputSearch);
    }
  };

  useEffect(() => {
    if (oldRequest !== '') {
      inputValues.inputSearch = oldRequest;
    }
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <section className="search">
      <div className="search__container">
        <form onSubmit={handleSubmit} className="search__form" noValidate>
          <fieldset className="search__fieldset">
            <label htmlFor="search__input" className="search__label-form">
              <input
                className="search__input"
                placeholder={errSearchMessage}
                ref={inputSearch}
                type="text"
                name="inputSearch"
                value={inputValues.inputSearch ?? ''}
                id="search__input"
                onChange={handleChange}
                required
              />
            </label>
          </fieldset>
          <button
            type="submit"
            disabled={isLoading}
            onClick={refreshPage}
            className="search__button links-hover"
          ></button>
        </form>
        <div className="search__wrapper">
          <label className="search__switch" htmlFor="search__checkbox">
            <input
              type="checkbox"
              className="search__checkbox"
              id="search__checkbox"
              onChange={onChange}
              checked={isChecked}
            />
            <span className="search__slider search__slider_round"></span>
          </label>
          <label className="search__label-text" htmlFor="search__checkbox">
            Короткометражки
          </label>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
