import React from "react";
import { Form, Button, Card } from "react-bootstrap";

export default function AddTransaction() {
  return (
    <>
      <Card border="info p-3 shadow">
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
      </Card>
      <Card border="info p-3 shadow mt-4 d-flex flex-row">
        <div className="flex-grow-1">
          <h4 className="input-label text-uppercase text-center text-success">
            Income
          </h4>
          <hr />
          <h4 className="text-uppercase text-center text-success">$0</h4>
        </div>
        <div className="flex-grow-1">
          <h4 className="input-label text-uppercase text-center text-danger">
            Expense
          </h4>
          <hr />
          <h4 className="text-uppercase text-center text-danger">$0</h4>
        </div>
      </Card>
      <Card border="info p-3 shadow mt-4">
        <div className="flex-grow-1">
          <h4 className="input-label text-uppercase text-center m-0">
            Current Balance
          </h4>
          <hr />
          <h4 className="text-uppercase text-center text-secondary">$0</h4>
        </div>
      </Card>
    </>
  );
}
