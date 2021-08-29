import React from "react";

// components
import CardContainer from "./CardContainer";
import Amount from "./Amount";

export default function IncomeExpense(props) {
  const { totalIncome, totalExpense } = props;

  return (
    <CardContainer className="mt-4 d-flex flex-sm-row">
      <Amount label="Income" amount={totalIncome} textType="text-success" />
      <Amount label="Expense" amount={totalExpense} textType="text-danger" />
    </CardContainer>
  );
}
