import React from "react";
import CustomerTable from "../components/CustomerTable";
import CustomerNew from "./CustomerNew";

export default function Customers() {
  return (
    <div>
      <p>Customer</p>
      <p>Needs capability to CREATE, RETRIEVE, UPDATE, DELETE</p>
      <a href="./CustomerNew">New customer</a>
      <CustomerTable />

    </div>
  );
}
