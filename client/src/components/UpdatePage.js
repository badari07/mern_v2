import React from "react";
import AddPage from "./AddPage";

const UpdatePage = (props) => {
  console.log(props.data.FName[0]);

  // const renderTableData = () => {
  //   return data.map((detail, index) => {
  //     const { FName, LName, UName } = detail;
  //     return (
  //       <tr>
  //         <td>{FName}</td>
  //         <td>{LName}</td>
  //         <td>{UName}</td>
  //         <td>
  //           <input type="checkbox" />
  //         </td>
  //       </tr>
  //     );
  //   });
  // };

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
          <tbody>
            <tr>
              <td>1</td>
              <td>{props.data.FName[0]}</td>
              <td>{props.data.LName[0]}</td>
              <td>{props.data.UName[0]}</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpdatePage;
