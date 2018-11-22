import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import { Loader } from "../../common";

const UsMap = lazy(() => import("./UsMap"));

const ReportPage = () => {
  return (
    <Wrapper>
      <Suspense fallback={<Loader />}>
        <UsMap />
      </Suspense>
    </Wrapper>
  );
};

export default ReportPage;

const Wrapper = styled.div``;
