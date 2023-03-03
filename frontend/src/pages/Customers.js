import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { CustomerForm } from "./CustomerForm";

// Fetch and return data array of customers from API
async function fetchCustomers() {
    const customers = await axios.get("http://localhost:3001/customers");
    return customers.data.data;
}

// Functional Component Defintion for Customers Component
export default function Customers() {
    // State definition for the customers data array
    const [customers, setCustomers] = useState(
        async () => await fetchCustomers()
    );

    function fetchAndSetCustomers() {
        setCustomers(async () => await fetchCustomers());
    }

    // State definition for whether or not to hide form
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState(null);

    // Function to confirm and handle deletion of table record, via the delete
    //   icon in the delete column.
    async function handleDelete(row) {
        if (
            window.confirm(
                `Are you sure you want to DELETE the record for customer ID = ${row.customer_id}?`
            ) === true
        ) {
            let deleted = await axios.delete(
                `http://localhost:3001/customers/${row.customer_id}`
            );
            if (deleted.status === 200) {
                fetchAndSetCustomers();
            }
        }
    }

    function handleEdit(row) {
        setFormData(row);
        setShowForm(true);
    }

    // Customer Component Contents
    return (
        <div>
            <h3>Customers</h3>
            <p>Create, Retrieve, Update or Delete a Customer</p>
            <Grid
                columns={[
                    { name: "Customer ID", id: "customer_id", sort: true },
                    { name: "First Name", id: "first_name", sort: true },
                    { name: "Last Name", id: "last_name", sort: true },
                    {
                        name: "Date of Birth",
                        id: "dob",
                        formatter: (cell) => {
                            return cell.split("T")[0];
                        },
                    },
                    { name: "Email", id: "email" },
                    {
                        name: "Edit Item",
                        data: (row) =>
                            _(<MdEdit onClick={() => handleEdit(row)} />),
                    },
                    {
                        name: "Delete Item",
                        data: (row) =>
                            _(
                                <MdDeleteForever
                                    onClick={() => handleDelete(row)}
                                />
                            ),
                    },
                ]}
                data={async () => await customers}
                search={true}
                pagination={{ limit: 25 }}
            />
            <Link to="/CustomerNew" className="newPlus">
                Add new customer
            </Link>
            {showForm ? (
                <CustomerForm
                    row={formData}
                    showForm={setShowForm}
                    parentRerender={() => fetchAndSetCustomers()}
                ></CustomerForm>
            ) : null}
        </div>
    );
}
