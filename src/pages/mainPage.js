import React from 'react';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../Redux/localization/localizacion-slice';
import { useTranslation } from '../hooks/useTranslation';

const MainPage = () => {
    const dispatch = useDispatch();
    const changeLanguage = (language) => {
      dispatch(setLanguage(language));
    };
  
    const lang = {
        ua: {
        btnCancel: "Скасувати",
        btnConfirm: "Підтвердити",
      },
        ru: {
        btnCancel: "Отменить",
        btnConfirm: "Подтвердить",
      },
        en: {
        btnCancel: "Cancel",
        btnConfirm: "Confirm",
      },
    };

    const l = useTranslation(lang);
  
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div style={{ marginBottom: '20px' }}>{l.btnCancel}</div>
        <button onClick={() => changeLanguage('ua')}>UA</button>
        <button onClick={() => changeLanguage('ru')}>RU</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
        <div>{l.btnConfirm}</div>
      </div>
    );
};

export default MainPage;