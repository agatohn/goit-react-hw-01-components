import React from "react";
import styles from "../FriendList.module.css";

const FriendListItem = ({ friend }) => {
  return (
    <li className={styles.item}>
      <span
        className={friend.isOnline ? styles.isOnline : styles.isOffline}
      ></span>
      <img
        className={styles.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={styles.name}>{friend.name}</p>
    </li>
  );
};

export default FriendListItem;
