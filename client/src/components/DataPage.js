import React from "react";

const DataPage = (props) => {
  if (props.data.length > 0) {
    const renderTableData = () => {
      return props.data.map((detail, index) => {
        const { FirstName, LastName, UserName, _id } = detail;
        return (
          <tr key={_id}>
            <td>{index}</td>
            <td>{FirstName}</td>
            <td>{LastName}</td>
            <td>{UserName}</td>
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

export default DataPage;
