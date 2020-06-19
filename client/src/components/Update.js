import React from "react";
import { Link } from "react-router-dom";

const Update = () => {
  return (
    <>
      <button>
        <Link to="/updatepage" style={{ textDecoration: "none" }}>
          Update
        </Link>
      </button>
    </>
  );
};

export default Update;
