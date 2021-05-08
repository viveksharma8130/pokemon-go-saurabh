import React from "react";
import SearchAppBar from "./searchbar";

const PokeMonDetails = (props) => {
  const items = props.location.state.data;
  console.log(items);
  return (
    <div>
      <SearchAppBar />
      <div className="app-contaner">
        <h1>Pokemon Details</h1>
        <div className="pokemon-container">
          <div className="all-container">
            <div className={`card ${items.type}`}>
              <img src={items.image} alt={items.name} />
              <div className="card-body">
                <h3>
                  #0{items.id} {items.name}
                </h3>
                <small>Type: {items.type}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PokeMonDetails;
