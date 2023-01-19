import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCurrentRepo, getCotributors } from '../../actions/actions';
import Arrow from '../../assets/back-arrow.svg';
import './repoCard.less';

const RepoCard = () => {
  const { username, reponame } = useParams();
  const [repo, setRepo] = useState({});
  const [contributors, setContributors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentRepo(username, reponame, setRepo);
    getCotributors(username, reponame, setContributors);
  }, []);

  const onClickHandler = (evt) => {
    evt.preventDefault();
    navigate(-1);
  };

  return (
    <div className="card">
      <div className="card__header">
        <a href="/" onClick={onClickHandler}>
          <img src={Arrow} alt="back" width="32" height="32" />
        </a>
        <h1 className="card__title">{repo.name}</h1>
      </div>
      <div className="card__about-wrapper">
        <img
          src={repo.owner?.avatar_url}
          alt={repo.owner}
          width="300"
          height="300"
        />

        <div className="card__about">
          <h3 className="card__about-title">About</h3>
          <div className="card__description">{repo.description}</div>

          <div className="card__row">
            <span>Homepage:</span> {repo.homepage ? repo.homepage : 'none'}
          </div>
          <div className="card__row">
            <span>Stars:</span> {repo.stargazers_count}
            </div>
          <div className="card__row">
            <span>Subscribers:</span> {repo.subscribers_count}
          </div>
          <div className="card__row">
            <span>Watchers:</span> {repo.watchers}
          </div>
          <div className="card__row">
            <span>Forks:</span> {repo.forks}
          </div>
          <div className="card__row">
            <span>Was created:</span> {repo.created_at?.slice(0, 10)}
          </div>
          <div className="card__row">
            <span>License:</span> {repo.license?.name ? repo.license.name : 'none'}
          </div>

          <div  className="card__contributors">Contributors:</div>

          {contributors.map((c, index) => (
            <img
              key={index}
              src={c.avatar_url}
              width="30"
              height="30"
              style={{ borderRadius: '50%' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
