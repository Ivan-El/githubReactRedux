import React from 'react';
import { Link } from 'react-router-dom';
import IconStar from '../../assets/star.svg';
import './repo.less';

const Repo = ({ repo }) => {
  return (
    <div className="repo">
      <div>
        <Link
          className="repo__link"
          to={`/card/${repo.owner.login}/${repo.name}`}
        >
          {`${repo.owner.login}/${repo.name}`}
        </Link>
        <div className="repo__description">{repo.description}</div>
        <div className="repo__topics">
          {repo.topics.length > 0
            ? repo.topics.map((topic, i) => (
                <span className="repo__topic" key={i}>
                  {topic}
                </span>
              ))
            : null}
        </div>
        <div  className="repo__stats">
          <img src={IconStar} alt="stars" width="16" height="16" />
          <span>{repo.stargazers_count}</span>
          <span className='repo__language'>{repo.language}</span>
          <span>Update {repo.updated_at.slice(0, 10)}</span>
        </div>
      </div>
    </div>
  );
};

export default Repo;
