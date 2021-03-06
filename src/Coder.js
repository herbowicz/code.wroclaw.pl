import React from 'react';
import './Coder.css';

const Coder = ({ coder, user, i }) => (
  <span className="user">
    {user.login === coder.login && (
      <div>
        <div className="top-info1" />
        <div className="top-info2" />
        <div className="info">
          <ul>
            <h3>
              <a href={`https://github.com/${user.login}`}>
                {user.name}
              </a>
            </h3>
            <h2>
              <a href={`https://github.com/${user.login}`}>
                {user.login}
              </a>
            </h2>
            <li>ID: {user.id}</li>
            <li>{user.bio && user.bio.substring(0, 115)}</li>
            <li>
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </li>
            <li>
              <a
                href={`http://${user.blog.split('//').pop()}`}
                target="_blank"
                rel="noopener noreferrer">
                {user.blog.split('//').pop()}
              </a>
            </li>
            <h3>
              <p>
                <li>
                  Repos:{' '}
                  <a
                    href={`https://github.com/${
                      user.login
                      }?tab=repositories`}
                    target="_blank"
                    rel="noopener noreferrer">
                    {' '}
                    <b>{user.public_repos}</b>
                  </a>
                </li>
                <li>
                  Followers:{' '}
                  <a
                    href={`https://github.com/${
                      user.login
                      }?tab=followers`}
                    target="_blank"
                    rel="noopener noreferrer">
                    {user.followers}
                  </a>
                </li>
                <li>
                  Following:{' '}
                  <a
                    href={`https://github.com/${
                      user.login
                      }?tab=following`}
                    target="_blank"
                    rel="noopener noreferrer">
                    {user.following}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://github.com/${
                      user.login
                      }?tab=stars`}>
                    Stars
                                    </a>
                </li>
              </p>
            </h3>
            <li>Since: {user.created_at.substring(0, 10)}</li>
            <li>
              <span className="gold">
                {user.hireable ? 'Available for hire' : ''}
              </span>
            </li>
          </ul>
          <div className="thumb" title="Give thumbs up">
            <span role="img" aria-label="thumbs-up">
              &#128077;
                        </span>
          </div>

          <div className="position">{i + 1}</div>
        </div>
      </div>
    )}

    <img
      id={coder.login}
      style={{ width: '125px', height: '125px' }}
      src={coder.avatar_url}
      alt="avatar"
    />
  </span>
);

export default Coder;
