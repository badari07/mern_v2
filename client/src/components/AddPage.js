import React, { useState } from "react";
import UpdatePage from "./UpdatePage";

const AddPage = () => {
  const intialSate = {
    firstName: "",
    lastName: "",
    userName: "",
    FName: [],
    LName: [],
    UName: [],
  };
  const [state, setState] = useState(intialSate);

  const onhandleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onhandleSubmit = (e) => {
    e.preventDefault();
    const fn = [...state.FName];
    const ln = [...state.LName];
    const un = [...state.UName];
    if (state.firstName) {
      fn.push(state.firstName);
    }
    if (state.lastName) {
      ln.push(state.lastName);
    }
    if (state.userName) {
      un.push(state.userName);
    }
    setState({
      ...state,
      FName: fn,
      LName: ln,
      UName: un,
      firstName: "",
      lastName: "",
      userName: "",
    });
  };

  const { firstName, lastName, userName } = state;

  return (
    <>
      <form onSubmit={onhandleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          onChange={onhandleChange}
          required
          value={firstName}
        />
        <input
          type="text"
          name="lastName"
          placeholder="lastName"
          onChange={onhandleChange}
          value={lastName}
        />
        <input
          type="text"
          name="userName"
          placeholder="userName"
          onChange={onhandleChange}
          value={userName}
        />
        <div>
          <input type="submit" value="ADD" />
        </div>
      </form>
      <UpdatePage data={state} />
    </>
  );
};

export default AddPage;
