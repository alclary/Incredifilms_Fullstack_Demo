import React from "react";
import { Link } from "react-router-dom";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import axios from "axios";

export default function Customers() {
    return (
        <div>
            <h3>Customers</h3>
            <p>Create, Retrieve, Update or Delete a Customer</p>
            <Link to="/CustomerNew" className="newPlus">
                Add new customer
            </Link>
            <Grid
                columns={[
                    { name: "Customer ID", id: "customer_id", sort: true },
                    { name: "First Name", id: "first_name", sort: true },
                    { name: "Last Name", id: "last_name", sort: true },
                    { name: "Date of Birth", id: "dob" },
                    { name: "Email", id: "email" },
                    {
                        name: "Edit Item",
                        data: _(<MdEdit onClick={() => alert("clicked!")} />),
                    },
                    {
                        name: "Delete Item",
                        data: _(
                            <MdDeleteForever
                                onClick={() => alert("clicked!")}
                            />
                        ),
                    },
                ]}
                data={async () => {
                    const customers = await axios.get(
                        "http://localhost:3001/customers"
                    );
                    return customers.data.data;
                }}
                search={true}
                pagination={{ limit: 25 }}
            />
        </div>
    );
}
