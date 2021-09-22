import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={user.avatar} alt={user.name} className="avatar" />
        <p className="name">{user.name}</p>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>

      <ul className="stats">
        {Object.entries(user.stats).map(([key, value]) => (
          <li key={key}>
            <span className="label">{key}</span>
            <span className="quantity">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
