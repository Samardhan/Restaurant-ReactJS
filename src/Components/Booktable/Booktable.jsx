import React, { useState } from "react";

const Book = () => {
  let [items, setItems] = useState();

  return (
    <>
      <div className="container text-center mt-5">
        <table>
          <thead>
            <tr>
              <th colSpan={2}>
                <h3>Enter Food Details </h3>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Food Id :</td>
              <td>
                <input type="Number" />
              </td>
            </tr>
            <tr>
              <td className="pe-0">Food Name :</td>
              <td>
                {" "}
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>Food price :</td>
              <td>
                <input type="number" step={0.01} />
              </td>
            </tr>
            <tr>
              <td>Food Quantity :</td>
              <td>
                <input type="number" />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button className="btn btn-success">Add Item</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Book;
