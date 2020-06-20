import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdatePage = (props) => {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/users");
      setData(res.data);
    }
    fetchData();
  }, []);

  const onClickCheck = (e) => {
    setCheck(!check);
  };

  if (data.length > 0) {
    const renderTableData = () => {
      return data.map((detail, index) => {
        const { FirstName, LastName, UserName, _id } = detail;
        return (
          <tr key={_id}>
            <td>{index}</td>
            <td>{FirstName}</td>
            <td>{LastName}</td>
            <td>{UserName}</td>
            <td>
              <input type="checkbox" value={check} onClick={onClickCheck} />
            </td>
          </tr>
        );
      });
    };
    return (
      <div>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="row">#</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">UserName</th>
              </tr>
            </thead>
            <tbody>{renderTableData()}</tbody>
          </table>
        </div>
      </div>
    );
  }
  return <h1>No data</h1>;
};

export default UpdatePage;
