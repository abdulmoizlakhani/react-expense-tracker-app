import React from "react";

// components
import CardHeading from "./CardHeading";

export default function Amount(props) {
  const { label, amount, textType } = props;

  return (
    <div className="flex-grow-1 mt-3 mt-md-0">
      <CardHeading textType={textType} label={label} />
      <h4 className={`text-uppercase text-center ${textType ?? "text-succes"}`}>
        $ {amount || 0}
      </h4>
    </div>
  );
}
