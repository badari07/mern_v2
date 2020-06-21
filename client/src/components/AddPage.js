import React, { useState, useEffect } from "react";
import DataPage from "./DataPage";
import axios from "axios";

const AddPage = (props) => {
  const intialSate = {
    FirstName: "",
    LastName: "",
    UserName: "",
  };
  const [formData, formDataSet] = useState(intialSate);
  const [data, setData] = useState([]);
  console.log(data);

  const { FirstName, LastName, UserName } = formData;
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/users");
      setData(res.data);
    }
    fetchData();
  }, [formData]);

  const onhandleChange = (e) => {
    formDataSet({ ...formData, [e.target.name]: e.target.value });
  };
  const onhandleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ FirstName, LastName, UserName });

    try {
      const res = await axios.post("/api/users", body, config);
      alert("user add");
    } catch (error) {
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach((error) => alert(error.msg));
      }
    }

    formDataSet({
      ...formData,
      FirstName: "",
      LastName: "",
      UserName: "",
    });
  };

  return (
    <>
      <form onSubmit={onhandleSubmit}>
        <input
          type="text"
          name="FirstName"
          placeholder="FirstName"
          onChange={onhandleChange}
          required
          value={FirstName}
        />
        <input
          type="text"
          name="LastName"
          placeholder="LastName"
          onChange={onhandleChange}
          value={LastName}
        />
        <input
          type="text"
          name="UserName"
          placeholder="UserName"
          onChange={onhandleChange}
          value={UserName}
        />
        <div>
          <input type="submit" value="ADD" />
        </div>
      </form>
      <DataPage data={data} />
    </>
  );
};

export default AddPage;
