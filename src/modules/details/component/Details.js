import React, { Suspense } from "react";
import {unstable_createResource as createResource} from 'react-cache'

const detailsResouce = createResource(() => fetch("http://localhost:3009/api/details")
  .then(resp => resp.json()))

const Details = () => {

  const details = detailsResouce.read('1') // throw Promise

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

const DetailsPage = () => {
  return <Suspense fallback={<div>Loading...</div>}>
    <Details/>
  </Suspense>
}

export default DetailsPage;
