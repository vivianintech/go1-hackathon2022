import React, { useState, useEffect } from "react";
import UserCard from "../../components/UserCard/deprecated/UserCard";

const UsersPage = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        setUserList(data);
      });
  }, []);

  return (
    <div id="users">
      <div>
        <h1>All User Profiles</h1>
      </div>
      <div id="users-list">
        {userList.map((userData, key) => {
          return <UserCard key={key} userData={userData} />;
        })}
      </div>
    </div>
  );
};

export default UsersPage;
