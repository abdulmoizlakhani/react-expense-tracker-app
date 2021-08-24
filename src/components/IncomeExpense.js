import React from "react";

// components
import CardContainer from "./CardContainer";
import Amount from "./Amount";

export default function IncomeExpense() {
  return (
    <CardContainer className="mt-4 d-flex flex-sm-row">
      <Amount label="Income" amount={0} />
      <Amount label="Expense" amount={0} textType="text-danger" />
    </CardContainer>
  );
}
