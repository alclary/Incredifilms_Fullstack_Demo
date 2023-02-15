import React from "react";
import CustomerTable from "../components/CustomerTable";

export default function Customers() {
  return (
    <div>
      <p>Customer</p>
      <p>Needs capability to CREATE, RETRIEVE, UPDATE, DELETE</p>
      <a href="">New customer</a>
      <CustomerTable />
    </div>
  );
}
