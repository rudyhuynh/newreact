import React, { Suspense } from "react";
import {unstable_createResource as createResource} from 'react-cache'
import * as api from '../api'

const detailsResouce = createResource(api.fetchDetails)

const Details = () => {

  const [cacheVersion, setCacheVersion] = React.useState(1)

  const details = detailsResouce.read(cacheVersion) // throw Promise

  const refresh = () => {
    setCacheVersion(cacheVersion + 1)
  }

  return (
    <div>
      <h1>Details: </h1>
      <div>
        <button onClick={refresh}>Refresh</button>
      </div>
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


