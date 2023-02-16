import React from "react";

export default function ShowtimeUpdate() {
  return (
    <div>
      <p>Edit this record below</p>
      <table>
        <tr>
          <th>Showtime ID</th>
          <th>Showtime Date & Time</th>
          <th>Movie Name</th>
          <th>Theater Name</th>
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
          <option>2023-02-10 16:00:00</option>
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
          <td className="">
            <select>
              <option>IncrediFilms Rogers Park</option>
              <option>IncrediFilms Rogers Park</option>
              <option>IncrediFilms Rogers Park</option>
              <option>IncrediFilms Rogers Park</option>
              <option>IncrediFilms Rogers Park</option>

            </select>
          </td>
        </tr>



        </table>
        <button>
          <a href="./Showtime">Update</a>
        </button>

        <button>
          <a href="./Showtime">Cancel</a>
        </button>
    </div>
  );
}
