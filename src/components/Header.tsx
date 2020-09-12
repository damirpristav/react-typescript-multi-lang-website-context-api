import React, { useCallback, useState, useEffect, useRef, useContext, FC } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { LangContext } from '../context/lang';

interface HeaderProps {
  fixed?: boolean;
  transparent?: boolean;
}

const Header: FC<HeaderProps> = ({ fixed, transparent }) => {
  const { state: { language}, dispatch: { setLanguage, translate } } = useContext(LangContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownEl = useRef<HTMLUListElement>(null);

  let headerClass = 'header';

  if(fixed) {
    headerClass += ' header--fixed';
  }

  if(transparent) {
    headerClass += ' header--transparent';
  }

  const handleClickOutside = useCallback((e) => {
    if(showDropdown && e.target.closest('.dropdown') !== dropdownEl.current) {
      setShowDropdown(false);
    }
  }, [showDropdown, setShowDropdown, dropdownEl]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [handleClickOutside]);

  const chooseLanguageHandler = (value: string) => {
    setShowDropdown(false);
    setLanguage(value);
  }

  return(
    <header className={headerClass}>
      <div className="container">
        <div className="header__brand">
          <h1><Link to="/">React</Link></h1>
        </div>
        <div className="header__nav">
          <div className="header__nav_lang">
            <p className="selected" onClick={() => setShowDropdown(!showDropdown)}>{language}</p>
            {showDropdown && <ul className="dropdown" ref={dropdownEl}>
                <li onClick={() => chooseLanguageHandler('EN')}>EN</li>  
                <li onClick={() => chooseLanguageHandler('DE')}>DE</li>  
                <li onClick={() => chooseLanguageHandler('FR')}>FR</li>  
              </ul>
            }
          </div>
          <ul className="header__nav_menu">
            <li><NavLink to="/" exact>{translate('home')}</NavLink></li>
            <li><NavLink to="/about" exact>{translate('about')}</NavLink></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;