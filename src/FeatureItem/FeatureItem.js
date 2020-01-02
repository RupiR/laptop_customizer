import React from "react";
import CustomizeList from "../CustomizeList/CustomizeList.js";

export default function FeatureItem(props) {
  const featureHash = props.feature + "-" + props.idx;
  const options = props.features[props.feature].map(item => {
    return (
      <CustomizeList
        item={item}
        updateFeature={props.updateFeature}
        feature={props.feature}
        selected={props.selected}
      />
    );
  });

  return (
    <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{props.feature}</h3>
      </legend>
      {options}
    </fieldset>
  );
}
