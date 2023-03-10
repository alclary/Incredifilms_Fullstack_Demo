import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { CustomerForm } from "./CustomerForm";

const API_URL = process.env.REACT_APP_API_URL;

// Fetch and return data array of customers from API
async function fetchCustomers() {
    const customers = await axios.get(API_URL + "/customers");
    return customers.data.data;
}

// Functional Component Definition for Customers Component
export default function Customers() {
    // State definition for the customers data array
    const [customers, setCustomers] = useState(
        async () => await fetchCustomers()
    );
    // State definition for modal form
    const [formData, setFormData] = useState("");
    const [formType, setFormType] = useState("new");
    const [key, setKey] = useState(Math.random());

    // Resets the modal form (new and update) to a fresh "new" form
    function resetForm() {
        setFormData("");
        setFormType("new");
        setKey(Math.random());
    }

    // Forces customers data to be refetched from API, updates customers state
    function fetchAndSetCustomers() {
        setCustomers(async () => await fetchCustomers());
    }

    // Function to confirm and handle deletion of table record, via the delete
    //   icon in the delete column.
    async function handleDelete(rowData) {
        if (
            window.confirm(
                `Are you sure you want to DELETE the record for customer ID = ${rowData.customer_id}?`
            ) === true
        ) {
            let deleted = await axios.delete(
                API_URL + `/customers/${rowData.customer_id}`
            );
            if (deleted.status === 200) {
                fetchAndSetCustomers();
            }
        }
    }

    function handleEdit(rowData) {
        setFormType("edit");
        setFormData(rowData);
        setKey(Math.random());
    }

    // Customer Component Contents
    return (
        <div>
            <h3>Customers</h3>
            <p>Create, Retrieve, Update or Delete a Customer</p>
            <Grid
                columns={[
                    {
                        name: "Customer ID",
                        id: "customer_id",
                        sort: true,
                        width: "8%",
                    },
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
                        data: (rowData) =>
                            _(<MdEdit onClick={() => handleEdit(rowData)} />),
                        width: "6%",
                    },
                    {
                        name: "Delete Item",
                        data: (rowData) =>
                            _(
                                <MdDeleteForever
                                    onClick={() => handleDelete(rowData)}
                                />
                            ),
                        width: "6%",
                    },
                ]}
                data={async () => await customers}
                search={true}
                pagination={{ limit: 10 }}
            />
            <CustomerForm
                key={key}
                formType={formType}
                resetForm={resetForm}
                rowData={formData}
                parentRerender={() => fetchAndSetCustomers()}
            ></CustomerForm>
        </div>
    );
}
