import React from "react";
import PropTypes from "prop-types";

const FriendListItem = ({ friend }) => {
  return (
    <li className="item">
      <span className="status">{friend.isOnline}</span>
      <img
        className="avatar"
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.object.isRequired,
};

export default FriendListItem;
