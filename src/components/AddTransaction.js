import React, { useState, createRef, useContext } from "react";
import { Form, Button } from "react-bootstrap";

// components
import CardContainer from "./CardContainer";

// Context
import { TransactionContext } from "../context/TransactionContext";

export default function AddTransaction() {
  const getInitialState = () => ({
    transactionDesc: "",
    transactionAmount: 0,
  });

  const titleRef = createRef();
  const [formData, updateFormData] = useState(getInitialState());
  const { addTransaction } = useContext(TransactionContext);

  const handleOnChange = (ev) => {
    const { name, value } = ev.target;
    const updatedFormData = { ...formData };
    updatedFormData[name] = value;
    updateFormData(updatedFormData);
  };

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    addTransaction(formData);
    updateFormData(getInitialState());
    titleRef.current.focus();
  };

  return (
    <CardContainer>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group>
          <Form.Label className="input-label text-uppercase text-center w-100 m-0">
            Add New Transaction
          </Form.Label>
          <hr />
          <Form.Control
            ref={titleRef}
            type="text"
            placeholder="Transaction Description"
            name="transactionDesc"
            value={formData.transactionDesc}
            onChange={handleOnChange}
            maxLength={24}
            required
          />
          <Form.Control
            type="number"
            placeholder="Enter Amount"
            className="mt-2"
            name="transactionAmount"
            value={formData.transactionAmount}
            onChange={handleOnChange}
            required
          />
          <ul className="m-0 mt-2 list-unstyled">
            <li>
              <small>(+) Positive amount is income</small>
            </li>
            <li>
              <small>(-) Negative amount is expense</small>
            </li>
          </ul>
        </Form.Group>

        <Button
          className="w-100 mt-3"
          variant="secondary"
          size="sm"
          type="submit"
          disabled={!formData.transactionAmount}
        >
          Add
        </Button>
      </Form>
    </CardContainer>
  );
}
