/** @format */
import React from 'react';
import { useSelector } from 'react-redux';

const DisplayUsers = () => {
  const userName = useSelector((state) => state.users); // Assuming userName is a property in your Redux state
  console.log(userName);
  return (
    <div className="container">
      <h1>User list</h1>
      {userName?.length > 0 ? (
        userName.map((user, index) => (
          <React.Fragment key={index}>
            User Name: {user ? user?.name : 'NA'}
          </React.Fragment>
        ))
      ) : (
        <React.Fragment> User Name: NA</React.Fragment>
      )}
    </div>
  );
};

export default DisplayUsers;
