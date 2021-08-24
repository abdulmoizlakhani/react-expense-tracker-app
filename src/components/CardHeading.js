import React from "react";

export default function CardHeading(props) {
  const { textType, label } = props;

  return (
    <>
      <h4
        className={`input-label text-uppercase text-center m-0 ${
          textType ?? "text-succes"
        }`}
      >
        {label}
      </h4>
      <hr />
    </>
  );
}
