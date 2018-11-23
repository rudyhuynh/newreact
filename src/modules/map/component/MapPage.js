import React, { Suspense } from "react";
import styled from "styled-components";

const UsMap = React.lazy(() => import("./UsMap"));

const MapPage = () => {
  return (
    <Wrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <UsMap />
      </Suspense>
    </Wrapper>
  );
};

export default MapPage;

const Wrapper = styled.div``;
