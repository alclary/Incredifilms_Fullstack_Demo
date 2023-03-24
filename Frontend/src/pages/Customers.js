import React, { useState } from "react";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { CustomerForm } from "./CustomerForm";
import { toast } from "react-toastify";

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

    // Forces customers data to be refetched from API, updating grid.js
    function gridRefresh() {
        setCustomers(async () => await fetchCustomers());
    }

    // Function to confirm and handle deletion of table record, via the delete
    //   icon in the delete column.
    async function handleDelete(rowData) {
        if (
            window.confirm(
                `Are you sure you want to DELETE the record for customer ${rowData.first_name} ${rowData.last_name}?`
            ) === true
        ) {
            try {
                const res = await axios.delete(
                    API_URL + `/customers/${rowData.customer_id}`
                );
                if (res.status === 200) {
                    toast.success("Record deleted.");
                    gridRefresh();
                }
            } catch (error) {
                toast.error(
                    `Error ${error.response.status}: ${error.response.data.sqlMessage}`
                );
                console.log(error);
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
            <div className="grid_wrapper">
                <h3>Customers</h3>
                <p>Create, Retrieve, Update or Delete a Customer</p>
                {/* Grid.js component wrapper */}
                <Grid
                    columns={[
                        {
                            name: "ID",
                            id: "customer_id",
                            sort: true,
                        },
                        { name: "First Name", id: "first_name", sort: true },
                        { name: "Last Name", id: "last_name", sort: true },
                        {
                            name: "Date of Birth",
                            id: "dob",
                            sort: true,
                            formatter: (cell) => {
                                return cell.split("T")[0];
                            },
                        },
                        { name: "Email", id: "email", sort: true },
                        {
                            name: "Edit",
                            data: (rowData) =>
                                _(
                                    <MdEdit
                                        onClick={() => handleEdit(rowData)}
                                    />
                                ),
                            width: "6%",
                        },
                        {
                            name: "Delete",
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
                    autoWidth={false}
                />
            </div>
            <CustomerForm
                // key update is being used to force rerender component
                key={key}
                // mode of form "edit" or "new"
                formType={formType}
                // form data to populate in form (if any and mode is "edit")
                rowData={formData}
                // function via prop to reset form state from parent
                resetForm={resetForm}
                // function call via prop to refresh table / Grid component
                gridReload={() => gridRefresh()}
            ></CustomerForm>
        </div>
    );
}
