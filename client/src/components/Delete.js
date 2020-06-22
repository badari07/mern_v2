import React from "react";
import axios from "axios";

const Delete = (props) => {
  const { _id, FirstName } = props.userInfo;
  // console.log(props);
  // console.log(_id, FirstName);

  const handleDelete = async (e) => {
    await axios.delete(`/api/users/${_id}`);
    alert(`${FirstName} deleted`);

    props.fetchData();
    props.setUserInfo({ FirstName: "", LastName: "", UserName: "", _id: "" });
  };
  return (
    <div className="deleteComp">
      <button
        onClick={handleDelete}
        className="delete"
        disabled={_id ? "" : "disabled"}
      >
        <span role="img" aria-label="delete" title="delete User">
          ❌
        </span>
      </button>
    </div>
  );
};

export default Delete;
