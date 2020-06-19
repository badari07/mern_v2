import React from "react";
import { Link } from "react-router-dom";

const Add = () => {
  return (
    <div>
      <button>
        <Link to="/addpage" style={{ textDecoration: "none" }}>
          Add
        </Link>
      </button>
    </div>
  );
};

export default Add;
