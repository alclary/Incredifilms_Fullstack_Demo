import React from "react";
import CustomerTable from "../components/CustomerTable";
import CustomerNew from "./CustomerNew";

export default function Customers() {
  return (
    <div>
      <h3>Customers</h3>
      <p>Create, Retrieve, Update or Delete a Customer</p>
      <a href="./CustomerNew" class="newPlus">
        Add new customer
      </a>
      <input type="text" value="Search..." className="search"></input>

      <CustomerTable />
    </div>
  );
}
