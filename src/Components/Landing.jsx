import React from "react";
import { NavBar } from "./NavBar/NavBar";
import { InputForm } from "./Add/InputForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecordTable } from "./Home/Table/RecordTable";
import { EditRecord } from "./Edit/EditRecord";

export const Landing = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/RecordSheet">
            <RecordTable />
          </Route>
          <Route path="/Add">
            <InputForm />
          </Route>
          <Route path="/Edit">
            <EditRecord />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
