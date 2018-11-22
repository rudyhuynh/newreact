import React, { useEffect } from "react";
import styled from "styled-components";
import { Home } from "./modules/home";
import { Details } from "./modules/details";
import { TabBar } from "./modules/common";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import { MapPage } from "./modules/map";

let App = ({ location, history }) => {
  useEffect(() => {
    if (location.pathname === "/") {
      history.push("/home");
    }
  }, []);

  return (
    <Wrapper>
      <TabBar />

      <RouteWrapper>
        <Route path="/home" component={Home} />
        <Route path="/map" component={MapPage} />
        <Route path="/details" component={Details} />
      </RouteWrapper>
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

const RouteWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;
`

