import React from 'react';
import { Link } from 'react-router-dom';
import './AccountButton.css';

const AccountButton = ({ togleChecked }) => {
  return (
    <Link
      onClick={togleChecked}
      to="/profile"
      className="profile-button
      profile-button_account
      links-hover"
    >
      <div className="profile-button__icon"></div>
      Аккаунт
    </Link>
  );
};

export default AccountButton;
