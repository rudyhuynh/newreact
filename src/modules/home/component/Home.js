import React from "react";
import styled from "styled-components";

function appReducer(state, action){
  switch(action.type){
    case 'setAppName': 
      return {
        ...state,
        appName: action.appName
      }
    case 'setAppDescription':
      return {
        ...state,
        appDescription: action.appDescription
      }
    default: return state
  }
}

const Home = () => {

  const [state, dispatch] = React.useReducer(appReducer, {
    appName: '',
    appDescription: ''
  })

  React.useEffect(() => {
    document.title = state.appName;
  })
  
  return (
    <Wrapper>
      <div>
        App Name:{" "}
        <input
          value={state.appName}
          onChange={e => dispatch({type: 'setAppName', appName: e.target.value})}
        />

      </div>
      <div>
        App Description:{" "}
        <input
          value={state.appDescription}
          onChange={e => dispatch({type: 'setAppDescription', appDescription: e.target.value})}
        />

      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;
