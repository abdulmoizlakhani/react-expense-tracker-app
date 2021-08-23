import React from "react";

export default function Amount(props) {
  const { label, amount, textType } = props;

  return (
    <div className="flex-grow-1">
      <h4
        className={`input-label text-uppercase text-center ${
          textType ?? "text-succes"
        }`}
      >
        {label}
      </h4>
      <hr />
      <h4 className={`text-uppercase text-center ${textType ?? "text-succes"}`}>
        ${amount || 0}
      </h4>
    </div>
  );
}
