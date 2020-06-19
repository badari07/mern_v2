import React from "react";
import Add from "./components/Add";
import Update from "./components/Update";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UpdatePage from "./components/UpdatePage";
import AddPage from "./components/AddPage";
import Good from "./components/Good";

function App() {
  return (
    <>
      <BrowserRouter>
        <Add />
        <Update />
        <Switch>
          <Route path="/updatepage" exact component={UpdatePage} />
          <Route path="/addpage" exact component={AddPage} />
          <Route path="/good" exact component={Good} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
