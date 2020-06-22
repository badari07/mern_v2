import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UpdatePage from "./components/UpdatePage";
import AddPage from "./components/AddPage";
import Page from "./components/Page";
import "./app.css";

function App() {
  return (
    <div className="container">
      <div className="modal-body row">
        <BrowserRouter>
          <div className="col-md-3">
            <Page />
          </div>
          <Switch>
            <div className="col-md">
              <Route path="/updatepage" exact component={UpdatePage} />
              <Route path="/addpage" exact component={AddPage} />
            </div>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
