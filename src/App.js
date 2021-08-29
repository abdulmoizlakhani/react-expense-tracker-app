import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

// components
import Header from "./components/Header";
import AddTransaction from "./components/AddTransaction";
import IncomeExpense from "./components/IncomeExpense";
import CurrentBalance from "./components/CurrentBalance";
import TransactionHistory from "./components/TransactionHistory";

// css
import "./css/app.css";

function App() {
  const [transactions, updateTransactions] = useState([]);

  const addTransaction = (transaction) => {
    const updatedTransactions = [...transactions, transaction];
    updateTransactions(updatedTransactions);
  };

  const deleteTransaction = (transactionIndex) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(transactionIndex, 1);
    updateTransactions(updatedTransactions);
  };

  const totalIncome = transactions
    .filter((transaction) => +transaction.transactionAmount > 0)
    .map((transaction) => +transaction.transactionAmount)
    .reduce((a, b) => a + b, 0);
  const totalExpense = transactions
    .filter((transaction) => +transaction.transactionAmount < 0)
    .map((transaction) => +transaction.transactionAmount)
    .reduce((a, b) => a + b, 0);

  return (
    <Row className="main-container w-100 align-items-center justify-content-center my-4 my-md-0">
      <Col
        xs={10}
        sm={10}
        md={2}
        lg={2}
        xl={2}
        className="d-flex justify-content-center justify-content-md-end"
      >
        <Header />
      </Col>
      <Col xs={10} sm={10} md={5} lg={4} xl={4}>
        <AddTransaction addTransaction={addTransaction} />
        <IncomeExpense totalIncome={totalIncome} totalExpense={totalExpense} />
        <CurrentBalance totalBalance={totalIncome + totalExpense} />
      </Col>
      <Col xs={10} sm={10} md={4} lg={4} xl={3} className="mt-4 mt-md-0">
        <TransactionHistory transactions={transactions} deleteTransaction={deleteTransaction} />
      </Col>
    </Row>
  );
}

export default App;
