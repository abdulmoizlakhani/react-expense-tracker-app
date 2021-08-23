import React from "react";

// components
import CardContainer from "./CardContainer";
import Amount from "./Amount";

export default function CurrentBalance() {
  return (
    <CardContainer className="mt-4">
      <Amount label="Current Balance" amount={0} textType="text-secondary" />
    </CardContainer>
  );
}
