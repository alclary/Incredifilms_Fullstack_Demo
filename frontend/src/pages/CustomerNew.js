import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const CustomerNew = () => {
  return (
    <>
      <article>
        <h2>New customer form</h2>
        <form className="form">
          <label>
            First name
            <input type="text" required />
          </label>
          <br/>
          <label>
            Last name
            <input type="text" required />
          </label>
          <br/>
          <label>
            Date of Birth
            <input type="date" required />
          </label>
          <br/>

          <label>
            Email
            <input type="email" />
          </label>
          <br/>

          <label>
            <input type="submit" />
          </label>
        </form>
      </article>

      <a href="./Customer">Return to all customers</a>

    </>
  );
};

export default CustomerNew;
