import React from "react";
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
  return (
    <Row className="vh-100 align-items-center justify-content-center my-4 my-md-0">
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
        <AddTransaction />
        <IncomeExpense />
        <CurrentBalance />
      </Col>
      <Col xs={10} sm={10} md={4} lg={4} xl={3} className="mt-4 mt-md-0">
        <TransactionHistory />
      </Col>
    </Row>
  );
}

export default App;
