import React from "react";

// components
import CardContainer from "./CardContainer";
import Amount from "./Amount";

export default function CurrentBalance(props) {
  const { totalBalance } = props;

  return (
    <CardContainer className="mt-4">
      <Amount label="Current Balance" amount={totalBalance} textType="text-secondary" />
    </CardContainer>
  );
}
