import React from "react";

export default function MovieUpdate() {
  return (
    <div>
      <p>Edit this record below</p>

      <table>
        <tr>
          <th>Movie ID</th>
          <th>Movie Name</th>
          <th>Runtime (Mins)</th>
          <th>MPA Rating</th>
          <th>Year</th>
        </tr>

        <tr>
          <td className="">
<select>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>

</select>

          </td>
          <td className="">
            <select>
              <option>Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>

            </select>
            </td>
          <td className=""><input type="number" min="0" value="95"></input></td>
          <td className="">
            <select>
              <option>PG</option>
              <option>PG-13</option>
              <option>R</option>
              <option>NR</option>

            </select>
          </td>
          <td className=""><input type="number" min="1800" value="1964"></input></td>
          </tr>

        </table>
        <button>
          <a href="./Movie">Update</a>
        </button>

        <button>
          <a href="./Movie">Cancel</a>
        </button>

    </div>
  );
}
