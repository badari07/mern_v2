import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateSearch from "./UpdateSearch";
import Delete from "./Delete";

const UpdatePage = (props) => {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  console.log(userInfo);
  console.log(data);
  console.log(check);
  async function fetchData() {
    const res = await axios.get("/api/users");
    setData(res.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const onClickCheck = async (e) => {
    console.log(e.target.id);
    //console.log(e.target.id);

    // const sibling = document.querySelectorAll("td > input");
    // if( )
    // console.log(sibling[0].id, e.target.id);
    // console.log(sibling);
    setCheck(!check);

    // if (ckid.checked) {
    //   for (let i = 0; i < ckname.length; i++) {
    //     if (!ckname[i].checked) {
    //       ckname[i].disabled = true;
    //     } else {
    //       ckname[i].disabled = false;
    //     }
    //   }
    // } else {
    //   for (let i = 0; i < ckname.length; i++) {
    //     ckname[i].disabled = false;
    //   }
    // }

    const res = await axios.get(`/api/users/${e.target.id}`);
    setUserInfo(res.data);

    //setCheck(!check);
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
              <input
                type="checkbox"
                value={check}
                //disabled={check ? "disabled" : ""}
                id={_id}
                name={FirstName}
                onClick={onClickCheck}
              />
            </td>
          </tr>
        );
      });
    };
    return (
      <>
        <Delete
          fetchData={fetchData}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
        <UpdateSearch
          data={data}
          setData={setData}
          userInfo={userInfo}
          fetchData={fetchData}
          setUserInfo={setUserInfo}
        />
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
      </>
    );
  }
  return <h1>No data</h1>;
};

export default UpdatePage;
