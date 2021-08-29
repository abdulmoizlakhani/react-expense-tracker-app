import React, { useContext } from "react";

// components
import CardContainer from "./CardContainer";
import Amount from "./Amount";

// Context
import { TransactionContext } from "../context/TransactionContext";

export default function CurrentBalance() {
  const { totalIncome, totalExpense } = useContext(TransactionContext);

  return (
    <CardContainer className="mt-4">
      <Amount
        label="Current Balance"
        amount={totalIncome + totalExpense}
        textType="text-secondary"
      />
    </CardContainer>
  );
}
