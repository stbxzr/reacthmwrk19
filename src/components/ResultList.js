import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map((result) => (
        <li className="list-group-item" key={result.cell}>
          <img
            alt={result.name.last}
            className="img-fluid"
            src={result.picture.medium}
          />

          {result.name.first}
          {result.name.last}
          {result.email}
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
