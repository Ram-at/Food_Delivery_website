import React from "react";

const User = ({ name, contact }) => {
  return (
    <div>
      <h2>Name:{name}</h2>
      <h3>Contact:{contact}</h3>
    </div>
  );
};
export default User;
