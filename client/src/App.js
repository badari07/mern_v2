import React from "react";
import Add from "./components/Add";
import Update from "./components/Update";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UpdatePage from "./components/UpdatePage";
import AddPage from "./components/AddPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Add />
        <Update />
        <Switch>
          <Route path="/updatepage" exact component={UpdatePage} />
          <Route path="/addpage" exact component={AddPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
