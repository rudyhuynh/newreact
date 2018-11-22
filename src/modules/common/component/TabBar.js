import React from "react";
import { withRouter } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";

const TabBar = ({ location, history }) => {
  const { pathname } = location;
  const { push } = history;

  return (
    <Paper>
      <Tabs
        value={pathname}
        onChange={(e, value) => push(value)}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" value="/home" />
        <Tab label="Details" value="/details" />
        <Tab label="Report" value="/report" />
      </Tabs>
    </Paper>
  );
};

export default withRouter(TabBar);
