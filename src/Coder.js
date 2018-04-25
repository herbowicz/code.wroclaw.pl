import React from 'react'
import './Coder.css'

const Coder = ({ coder, user }) => (
  <span className="user">
    {user.login === coder.login && <div className="info">
      <a href={`https://github.com/${user.login}`}>
        <ul>
          <h3>{user.name}</h3>
          <h2>{user.login}</h2>
          <li>ID: {user.id}</li>
          <li>{user.bio && user.bio.substring(0, 125)}</li>
          <li>{user.email}</li>
          <li>Repos: <b>{user.public_repos}</b></li>
          <li>Followers: {user.followers}</li>
          <li>Following: {user.following}</li>
          <li>Since: {user.created_at.substring(0, 10)}</li>
          <li>{user.hireable ? "Available for hire" : ""}</li>
        </ul>
      </a>
    </div>}

    <img id={coder.login}
      style={{ width: '100px', height: '100px' }}
      src={coder.avatar_url}
      alt="avatar" />
  </span>
)

export default Coder;