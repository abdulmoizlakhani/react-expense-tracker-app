import React, { useContext } from "react";

// components
import CardContainer from "./CardContainer";
import Amount from "./Amount";

// Context
import { TransactionContext } from "../context/TransactionContext";

export default function IncomeExpense() {
  const { totalIncome, totalExpense } = useContext(TransactionContext);

  return (
    <CardContainer className="mt-4 d-flex flex-sm-row">
      <Amount label="Income" amount={totalIncome} textType="text-success" />
      <Amount label="Expense" amount={totalExpense} textType="text-danger" />
    </CardContainer>
  );
}
