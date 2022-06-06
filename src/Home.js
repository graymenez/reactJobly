import React from "react";

const Home = ({ currentUser }) => {
  return (
    <>
      {currentUser ? (
        <div>
          <h1>Welcome Home, {currentUser.firstName}</h1>
        </div>
      ) : (
        <div>
          <h1>Welcome Home</h1>
        </div>
      )}
    </>
  );
};
export default Home;
