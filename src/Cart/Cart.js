import React from "react";
import CartList from "../CartList/CartList.js";
import SummaryTotal from "../SummaryTotal/SummaryTotal.js";

export default function Cart(props) {
  const summary = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const selectedOption = props.selected[feature];

    return (
      <CartList
        feature={feature}
        featureHash={featureHash}
        selectedOption={selectedOption}
      />
    );
  });
  return (
    <div className="cart">
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
      </section>
      <SummaryTotal {...props} />
    </div>
  );
}
