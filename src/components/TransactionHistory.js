import React from "react";

// components
import CardContainer from "./CardContainer";
import CardHeading from "./CardHeading";

export default function TransactionHistory() {
  return (
    <CardContainer>
      <CardHeading label="Transaction History" />
      <p className="text-center m-0">No records!</p>
    </CardContainer>
  );
}
