import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const GenreNew = () => {

  const [] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO implement POST request to API
};



  return (
    <>
      <article>
        <h3>Add a new genre</h3>
        <form onSubmit={handleSubmit} className="pure-form pure-form-stacked">
          <label>
            Genre Name
            <input type="text" required 
            />
          </label>
          <br />

          <button type="submit" className="pure-button pure-button-primary">
                    Submit
                </button>
        </form>
      </article>

      <a href="./Genre">Return to all genres</a>
    </>
  );
};

export default GenreNew;
