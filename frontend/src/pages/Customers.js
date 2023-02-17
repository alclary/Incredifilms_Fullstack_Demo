import React from "react";
import CustomerTable from "../components/CustomerTable";
import CustomerNew from "./CustomerNew";

export default function Customers() {
  return (
    <div>
      <h3>Customers</h3>
      <p>Needs capability to CREATE, RETRIEVE, UPDATE, DELETE</p>
      <a href="./CustomerNew" class="newPlus">Add new customer</a>
      <CustomerTable />

    </div>
  );
}
