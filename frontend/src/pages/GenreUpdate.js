import React from "react";

export default function GenreUpdate() {
  return (
    <div>
      <p>Edit this genre below</p>
      <table>
        <tr>
          <th>Genre ID</th>
          <th>Genre Name</th>
        </tr>
        <tr>
          <td>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>

            </select>
          </td>
          <td><input type="text" value="Documentary"></input></td>
        </tr>
      </table>

      <button>
        <a href="./Genre">Update</a>
      </button>

      <button>
        <a href="./Genre">Cancel</a>
      </button>
    </div>
  );
}
