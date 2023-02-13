import React from "react";
import { useSelector } from "react-redux";
import { Spinner } from "reactstrap";

function DashBoard() {
  const user = useSelector((state) => state.user);
  console.log(user, "testtttt");

  if (!user) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Spinner
          style={{ width: "3rem", height: "3rem", color: "secondary" }}
          type="grow"
        />
      </div>
    );
  }
  return (
    <div>
      <h1 className="mb-3 ml-4">welcome to your space</h1>
      <h5 className="mb-3 ml-4">{user.username}</h5>
      <h5 className="mb-3 ml-4">{user.email}</h5>
    </div>
  );
}

export default DashBoard;
