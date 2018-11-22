import React from "react";
import styled from "styled-components";

class Home extends React.Component {
  state = { appName: "" };

  componentDidUpdate() {
    document.title = this.state.appName;
  }

  render() {
    const { appName } = this.state;
    return (
      <Wrapper>
        <div>
          App Name:{" "}
          <input
            value={appName}
            onChange={e => this.setState({ appName: e.target.value })}
          />
        </div>
      </Wrapper>
    );
  }
}

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;
