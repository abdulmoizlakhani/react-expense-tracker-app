import React from "react";
import { Card } from "react-bootstrap";

const CardContainer = ({ children, className }) => (
  <Card className={`p-3 shadow ${className ?? ""}`} border="info">
    {children}
  </Card>
);

export default CardContainer;
