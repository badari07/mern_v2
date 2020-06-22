import React from "react";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <div className="containerBox">
      <div>
        <Link className="btn btn-outline-primary" to="/addpage" role="button">
          Add
        </Link>
      </div>
      <div>
        <Link
          to="/updatepage"
          className="btn btn-outline-primary"
          role="button"
        >
          Update
        </Link>
      </div>
    </div>
  );
};

export default Page;
