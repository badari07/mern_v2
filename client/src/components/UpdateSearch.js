import React, { useState } from "react";
import axios from "axios";

const UpdateSearch = (props) => {
  const { FirstName, LastName, UserName, _id } = props.userInfo;
  console.log(props.userInfo);

  const intialSate = {
    FirstName: "",
    LastName: "",
    UserName: "",
  };

  const [formUpdate, FormUpdateSet] = useState(intialSate);
  console.log(formUpdate);

  const onhandleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      FirstName: formUpdate.FirstName,
      LastName: formUpdate.LastName,
      UserName: props.userInfo.UserName,
    });

    try {
      const res = await axios.post("/api/users/update", body, config);
      alert("user updated");
    } catch (error) {
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach((error) => alert(error.msg));
      }
    }
    props.setUserInfo({ FirstName: "", LastName: "", UserName: "", _id: "" });
    props.fetchData();
    FormUpdateSet({
      ...formUpdate,
      FirstName: "",
      LastName: "",
      UserName: "",
    });
  };

  const onhandleChange = (e) => {
    FormUpdateSet({ ...formUpdate, [e.target.name]: e.target.value });
  };

  const onblur = (e) => {
    console.log("onblur");
  };
  const onFocus = (e) => {
    FormUpdateSet({ ...formUpdate, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={onhandleSubmit}>
        <div key={_id}>
          <input
            type="text"
            name="FirstName"
            onChange={onhandleChange}
            required
            disabled={FirstName ? "" : "disabled"}
            placeholder="FirstName"
            defaultValue={FirstName}
            onFocus={onFocus}
          />

          <input
            type="text"
            name="LastName"
            onChange={onhandleChange}
            placeholder="LastName"
            defaultValue={LastName}
            required
            disabled={LastName ? "" : "disabled"}
            onFocus={onFocus}
          />

          <input
            type="text"
            name="UserName"
            placeholder="UserName"
            disabled="disabled"
            defaultValue={UserName}
          />
        </div>
        <div>
          <input
            type="submit"
            disabled={UserName ? "" : "disabled"}
            value="UPDATE"
          />
        </div>
      </form>
    </>
  );
};

export default UpdateSearch;
