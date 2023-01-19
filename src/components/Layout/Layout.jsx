import React from 'react';
import { Outlet } from 'react-router-dom';
import IconGithub from '../../assets/github.svg';
import IconReact from '../../assets/react.svg';
import IconRedux from '../../assets/redux.svg';
import './layout.less';

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <img src={IconGithub} alt="github logo" width="64" height="64" />
          <h1 className="header__title">
            Search for repositories in Github using the Github API
          </h1>
          <div>
            <img src={IconReact} alt="react logo" width="64" height="64" />
            <img src={IconRedux} alt="redux logo" width="64" height="64" />
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
