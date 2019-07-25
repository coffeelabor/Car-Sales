import React from "react";
import { connect } from "react-redux";
import { initialState } from "./store/reducers";
import { buyCarPart, removeCarPart } from "./store/actions";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = props => {
  console.log("App props", props);

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeCarPart(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.buyCarPart(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.carParts} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("mapStateToProps", state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    carParts: state.carParts
  };
};

export default connect(
  mapStateToProps,
  { buyCarPart, removeCarPart }
)(App);
