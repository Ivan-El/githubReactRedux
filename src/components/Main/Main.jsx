import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../reducers/reposSlice';
import { createPages } from '../../utils/pagesCreator';
import { getRepos } from '../../actions/actions';
import Repo from '../Repo/Repo';
import './main.less';

const Main = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.repos.isFetching);
  const repos = useSelector((state) => state.repos.items);
  const currentPage = useSelector((state) => state.repos.currentPage);
  const perPage = useSelector((state) => state.repos.perPage);
  const totalCount = useSelector((state) => state.repos.totalCount);
  const [searchValue, setSearchValue] = useState('');
  const pagesCount = Math.ceil(totalCount / perPage);
  const pages = [];
  createPages(pages, pagesCount, currentPage);

  const onClickHandler = () => {
    dispatch(setCurrentPage(1));
    dispatch(getRepos(searchValue, currentPage, perPage));
  };

  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage));
  }, [currentPage]);

  return (
    <div className="main">
      <div className="main__controls">
        <input
          value={searchValue}
          onChange={(evt) => setSearchValue(evt.target.value)}
          className="search-input"
          type="text"
        />
        <button onClick={onClickHandler} className="search-button">
          Search
        </button>
      </div>

      {isFetching === false ? (
        repos.length > 0 ? (
          repos.map((repo) => <Repo key={repo.id} repo={repo} />)
        ) : (
          <h2>Репозитории не найдены...</h2>
        )
      ) : (
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      )}

      <div className="pages">
        {pages.map((page, i) => (
          <span
            key={i}
            onClick={() => {
              dispatch(setCurrentPage(page));
            }}
            className={currentPage === page ? 'pages__page pages__page--current' : 'pages__page'}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Main;
