import React from "react";
import { Form, Button } from "react-bootstrap";

// components
import CardContainer from "./CardContainer";

export default function AddTransaction() {
  return (
    <CardContainer>
      <Form>
        <Form.Group>
          <Form.Label className="input-label text-uppercase text-center w-100 m-0">
            Add New Transaction
          </Form.Label>
          <hr />
          <Form.Control type="text" placeholder="Transaction Title" />
          <Form.Control
            type="number"
            placeholder="Enter Amount"
            className="mt-2"
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
        >
          Add
        </Button>
      </Form>
    </CardContainer>
  );
}
