import React from "react";
import data from "../../data/";
import Profile from "../profile/Profile";
import Statistics from "../statistics/Statistics";
import FriendList from "../friendList/FriendList";
import TransactionHistory from "../transactionHistory/TransactionHistory";

const Main = () => {
  return (
    <main>
      <Profile user={data.user} />
      <Statistics title="Upload stats" stats={data.statisticalData} />
      <FriendList friends={data.friends} />
      <TransactionHistory items={data.items} />
    </main>
  );
};

export default Main;
