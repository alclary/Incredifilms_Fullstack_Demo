import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const CustomerNew = () => {
  return (
    <>
      <article>
        <h2>New customer form</h2>
        <form>
          <label>
            First name:
            <input type="text" required />
          </label>
          <label>
            Last name:
            <input type="text" required />
          </label>
          <label>
            Date of Birth
            <input type="date" required />
          </label>
          <label>
            Email
            <input type="email" />
          </label>
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
