import React from "react";
import { Grid, _ } from "gridjs-react";
import { MdEdit, MdDeleteForever } from "react-icons/md";

export default function Customers() {
    return (
        <div>
            <h3>Customers</h3>
            <p>Create, Retrieve, Update or Delete a Customer</p>
            <a href="./CustomerNew" class="newPlus">
                Add new customer
            </a>
            <Grid
                data={[
                    [1, "AJ", "Styles", "1977-06-02", "AJ.Styles@bmail.com"],
                    [
                        2,
                        "Stephanie",
                        "Helmsley",
                        "1976-09-24",
                        "Steph.Helmsley@bmail.com",
                    ],
                ]}
                columns={[
                    { name: "Customer ID", sort: true },
                    { name: "First Name", sort: true },
                    { name: "Last Name", sort: true },
                    "Date of Birth",
                    "Email",
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
                search={true}
                pagination={{ limit: 25 }}
            />
        </div>
    );
}
