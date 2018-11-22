import React from "react";
import { unstable_createResource } from "react-cache";
import { Loader } from "../../common";

const detailsResource = unstable_createResource(() =>
  fetch("http://localhost:3009/api/details").then(resp => resp.json())
);

const DetailList = () => {
  const details = detailsResource.read();

  return (
    <div>
      <div>Details: </div>
      <ul>
        {details.map(detail => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

const Details = () => {
  return (
      <React.Suspense fallback={<h1>Loading...</h1>} maxDuration={200}>
        <DetailList />
      </React.Suspense>
  );
};

export default Details;
