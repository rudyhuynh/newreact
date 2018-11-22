import React, { useEffect } from "react";
import styled from "styled-components";
import {Home} from "./modules/home";
import {Details} from "./modules/details";
import { TabBar } from "./modules/common";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import { ReportPage } from "./modules/report";

let App = ({ location, history }) => {
  useEffect(() => {
    if (location.pathname === "/") {
      history.push("/home");
    }
  }, []);

  return (
    <Wrapper>
      <TabBar />

      <Route path="/home" component={Home} />
      <Route path="/details" component={Details} />
      <Route path="/report" component={ReportPage} />
    </Wrapper>
  );
};

App = withRouter(App);

export default () => (
  <Router>
    <App />
  </Router>
);

const Wrapper = styled.div``;
