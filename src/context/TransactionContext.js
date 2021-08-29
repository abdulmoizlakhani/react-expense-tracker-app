import React, { createContext, useReducer } from "react";
import TransationReducer from "./transactionReducer";

const initialState = {
  transactions: [],
  totalIncome: 0,
  totalExpense: 0,
};

export const TransactionContext = createContext(initialState);

export function TransactionContextProvider(props) {
  const [state, dispatch] = useReducer(TransationReducer, initialState);

  // Actions
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  // Calculations
  const calculateTotalIncome = () => {
    return state.transactions
      .filter((transaction) => +transaction.transactionAmount > 0)
      .map((transaction) => +transaction.transactionAmount)
      .reduce((a, b) => a + b, 0);
  };
  const calculateTotalExpense = () => {
    return state.transactions
      .filter((transaction) => +transaction.transactionAmount < 0)
      .map((transaction) => +transaction.transactionAmount)
      .reduce((a, b) => a + b, 0);
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        totalIncome: calculateTotalIncome(),
        totalExpense: calculateTotalExpense(),
        deleteTransaction,
        addTransaction,
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
}
