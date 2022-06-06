import React from "react";
import EditFrom from "./EditFrom";

const Profile = ({ token, currentUser }) => {
  return (
    <>
      <h1>{currentUser.firstName}'s Profile</h1>
      <EditFrom token={token} currentUser={currentUser} />
    </>
  );
};
export default Profile;
