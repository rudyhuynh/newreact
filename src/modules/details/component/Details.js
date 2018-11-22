import React from "react";

class Details extends React.Component {
  state = {details: []}

  componentDidMount(){
    fetch("http://localhost:3009/api/details")
    .then(resp => resp.json())
    .then(details => this.setState({details}))
  }
  
  render() {
    const {details} = this.state

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
  }
}

export default Details;
