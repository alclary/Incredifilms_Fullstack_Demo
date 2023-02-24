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
                        "Stephanie.Helmsely@bmail.com",
                    ],
                    [
                        3,
                        "Alexa",
                        "Bliss",
                        "1991-08-09",
                        "Alexa.Bliss@bmail.com",
                    ],
                    [4, "Booker", "T", "1965-03-01", "NULL"],
                    [
                        5,
                        "Jenna",
                        "Andrade",
                        "1989-11-03",
                        "Jenna.Andrade@bmail.com",
                    ],
                    [6, "Andre", "Giant", "1946-05-19", "NULL"],
                    [
                        7,
                        "Michaela",
                        "Hargrove",
                        "2001-05-30",
                        "Michaela.Hargrove@bmail.com",
                    ],
                    [8, "Em", "Patterson", "2017-12-02", "NULL"],
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
                pagination={{ limit: 5 }}
            />
        </div>
    );
}
