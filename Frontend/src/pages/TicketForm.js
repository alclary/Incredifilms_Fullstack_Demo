import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const TicketForm = (props) => {
    // State definitions
    //      If formType mode "edit", populate fields with record data to edit,
    //      else form field empty (for new entry)

    const [customerList, setCustomerList] = useState([]);
    const [showtimeList, setShowtimeList] = useState([]);

    useEffect(() => {
        async function getCustomerList() {
            try {
                const customers = await axios.get(API_URL + "/customers/names");
                setCustomerList(customers.data.data);
            } catch (error) {
                console.error(error);
                toast.error(
                    `Error ${error.response.status}: ${error.response.data.sqlMessage}`
                );
            }
        }
        async function getShowtimeList() {
            try {
                const showtimes = await axios.get(
                    API_URL + "/showtimes/showings"
                );
                setShowtimeList(showtimes.data.data);
            } catch (error) {
                console.error(error);
                toast.error(
                    `Error ${error.response.status}: ${error.response.data.sqlMessage}`
                );
            }
        }

        getCustomerList();
        getShowtimeList();
    }, []);

    // State definitions
    const [customer_id, set_customer_id] = useState(
        props.rowData.customer_id ? props.rowData.customer_id : null
    );
    const [showtime_id, set_showtime_id] = useState(
        props.rowData.showtime_id ? props.rowData.showtime_id : null
    );
    const [price, set_price] = useState(
        props.rowData.price ? props.rowData.price : ""
    );
    const [payment_method, set_payment_method] = useState(
        props.rowData.payment_method ? props.rowData.payment_method : ""
    );

    const payment_methods = [
        { value: "CASH", label: "CASH" },
        { value: "CREDIT", label: "CREDIT" },
        { value: "DEBIT", label: "DEBIT" },
    ];

    const prices = [
        { value: "5", label: "Matinee - $5.00" },
        { value: "9", label: "Standard - $9.00" },
    ];

    async function newSubmit() {
        try {
            console.log(customer_id);
            const res = await axios.post(API_URL + "/tickets", {
                customer_id,
                showtime_id,
                price,
                payment_method,
            });
            if (res.status === 200) {
                // Success toast notification
                toast.success(`Ticket ${res.data.data.insertId} purchased.`);
            }
        } catch (error) {
            toast.error(
                `Error ${error.response.status}: ${error.response.data.sqlMessage}`
            );
            console.error(error);
        }
        // Reload entity table / grid.js component (for updates)
        props.gridReload();
        props.resetForm();
    }

    async function editSubmit() {
        try {
            const res = await axios.put(
                API_URL + `/tickets/${props.rowData.ticket_id}`,
                {
                    customer_id,
                    showtime_id,
                    price,
                    payment_method,
                }
            );
            if (res.status === 200) {
                // Success toast notification
                toast.success(`Record updated.`);
                // Reload entity table / grid.js component (for updates)
                props.gridReload();
            }
        } catch (error) {
            toast.error(
                `Error ${error.response.status}: ${error.response.data.sqlMessage}`
            );
            console.error(error);
        }
        // Reload entity table / grid.js component (for updates)
        props.gridReload();
        props.resetForm();
    }

    // Handle submit of bi-modal form; submit action based on form mode
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (props.formType === "edit") {
            editSubmit();
        } else {
            newSubmit();
        }
    };

    return (
        <div>
            {/* Form title based on mode ("edit" or "new") */}
            {props.formType === "edit" ? (
                <h3>Update ticket</h3>
            ) : (
                <h3>Add a new ticket</h3>
            )}

            <form
                onSubmit={handleSubmit}
                className="pure-form pure-form-stacked"
            >
                <label>Customer</label>
                <select
                    name="customer"
                    value={customer_id}
                    onChange={(event) => {
                        set_customer_id(event.target.value);
                    }}
                >
                    <option selected value={null}>
                        -- None --
                    </option>
                    {customerList.map((customer, i) => {
                        return (
                            <option key={i} value={customer.customer_id}>
                                {customer.customer}
                            </option>
                        );
                    })}
                </select>
                <label>Showtime</label>

                <select
                    name="showtime"
                    value={showtime_id}
                    required
                    onChange={(event) => {
                        set_showtime_id(event.target.value);
                    }}
                >
                    <option disabled selected value={null}>
                        -- select an option --
                    </option>
                    {showtimeList.map((showtime, i) => {
                        return (
                            <option key={i} value={showtime.showtime_id}>
                                {showtime.showtime}
                            </option>
                        );
                    })}
                </select>

                <label>Price</label>
                <select
                    onChange={(event) => {
                        set_price(event.target.value);
                    }}
                    required
                    value={price}
                >
                    <option disabled selected value="">
                        -- select an option --
                    </option>
                    {prices.map((price, i) => {
                        return (
                            <option key={i} value={price.value}>
                                {price.label}
                            </option>
                        );
                    })}
                </select>

                <label>Payment Method</label>
                <select
                    onChange={(event) => {
                        set_payment_method(event.target.value);
                    }}
                    value={payment_method}
                >
                    <option selected value="NULL">
                        -- select an option --
                    </option>
                    {payment_methods.map((payment_method, i) => {
                        return (
                            <option key={i} value={payment_method.label}>
                                {payment_method.label}
                            </option>
                        );
                    })}
                </select>

                <button type="submit" class="pure-button pure-button-primary">
                    Submit
                </button>
                {/* Cancel button only displayed for "edit" form modality */}
                {props.formType === "edit" ? (
                    <button
                        type="button"
                        className="pure-button pure-button"
                        // Cancel button resets form to cancel edit attempt
                        onClick={() => {
                            props.resetForm();
                        }}
                    >
                        Cancel
                    </button>
                ) : undefined}
            </form>
        </div>
    );
};

export default TicketForm;
