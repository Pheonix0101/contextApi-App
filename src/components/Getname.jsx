import React, { useContext } from "react";
import userContext from "../context/userContext";

function Getname() {
  const { user } = useContext(userContext);

  if (!user) return "Profile name:";
  else
    return (
      <div>
        <h3>Profile name: {user.name}</h3>
      </div>
    );
}

export default Getname;
