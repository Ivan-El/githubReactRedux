import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Page404 from '../Page404/Page404';
import RepoCard from '../RepoCard/RepoCard';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main />} />
          <Route path='card/:username/:reponame' element={<RepoCard />}/>
          <Route path='*' element={<Page404 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
