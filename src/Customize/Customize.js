import React from "react";
import CustomizeList from "../CustomizeList/CustomizeList.js";

export default function Customize(props) {
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const options = props.features[feature].map(item => {
      return (
        <CustomizeList
          item={item}
          updateFeature={props.updateFeature}
          feature={feature}
          selected={props.selected}
        />
      );
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });

  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  );
}
