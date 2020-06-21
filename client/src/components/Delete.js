import React from "react";
import axios from "axios";

const Delete = (props) => {
  const { _id, FirstName } = props.userInfo;
  //console.log(props);

  const handleDelete = async (e) => {
    await axios.delete(`/api/users/${_id}`);
    alert(`${FirstName} deleted`);

    props.fetchData();
    props.setUserInfo({ FirstName: "", LastName: "", UserName: "", _id: "" });
  };
  return (
    <div>
      <button onClick={handleDelete}>
        <span role="img" aria-label="delete" title="delete User">
          ❌
        </span>
      </button>
    </div>
  );
};

export default Delete;
