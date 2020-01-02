import React from "react";
import FeatureItem from "../FeatureItem/FeatureItem.js";

export default function Customize(props) {
  const features = Object.keys(props.features).map((feature, idx) => {
    return <FeatureItem {...props} feature={feature} idx={idx} />;
  });

  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  );
}
