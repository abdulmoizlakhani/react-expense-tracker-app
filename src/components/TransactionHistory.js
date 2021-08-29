import React, { useContext } from "react";
import { ListGroup, Button } from "react-bootstrap";

// components
import CardContainer from "./CardContainer";
import CardHeading from "./CardHeading";

// Context
import { TransactionContext } from "../context/TransactionContext";

export default function TransactionHistory() {
  const { transactions, deleteTransaction } = useContext(TransactionContext);

  return (
    <CardContainer className="transaction-history-container">
      <CardHeading label="Transaction History" />
      <div className="d-flex justify-content-center align-items-center h-100 content">
        {transactions.length ? (
          <ListGroup className="w-100 h-100">
            {transactions.map((transaction, i) => {
              const isPositive = transaction.transactionAmount > 0;
              return (
                <ListGroup.Item
                  key={`transaction_${i}`}
                  variant={isPositive ? "success" : "danger"}
                  className="position-relative"
                >
                  <p className="m-0">{transaction.transactionDesc}</p>
                  <h5 className="fw-bold m-0 text-end">
                    $ {transaction.transactionAmount}
                  </h5>
                  <Button
                    variant="danger"
                    size="sm"
                    className="round"
                    onClick={() => deleteTransaction(i)}
                  >
                    -
                  </Button>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        ) : (
          <p className="text-center m-0">No records!</p>
        )}
      </div>
    </CardContainer>
  );
}
