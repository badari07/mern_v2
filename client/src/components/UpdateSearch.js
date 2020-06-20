import React from "react";

const updateSearch = (props) => {
  const { FirstName, LastName, UserName } = props.userInfo;

  const onhandleSubmit = (e) => {
    e.preventDefault();
    console.log("update");
  };

  return (
    <>
      <form onSubmit={onhandleSubmit}>
        <input
          type="text"
          name="FirstName"
          //onChange={onhandleChange}
          required
          placeholder="FirstName"
          value={FirstName}
        />
        <input
          type="text"
          name="LastName"
          //onChange={onhandleChange}
          value={LastName}
          placeholder="LastName"
        />
        <input
          type="text"
          name="UserName"
          value={UserName}
          disabled="disabled"
          placeholder="UserName"
        />
        <div>
          <input type="submit" value="UPDATE" />
        </div>
      </form>
    </>
  );
};

export default updateSearch;
