import React, { useEffect, useState } from "react";
import { urllink } from "../Services/url";
import Axios from "axios";

const Add = () => {
  let [items, setItems] = useState({
    fid: null,
    fname: "",
    fprice: null,
    fquantity: null,
  });

  let Listitems = (event) => {
    const { name, value } = event.target;
    setItems((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  console.log(items);

  const addItems = async (e) => {
    e.preventDefault();

    try {
      console.log("adding");
      console.log(items);
      const resp = await Axios.post("http://localhost:8080/addFood", {
        fid: items.fid,
        fname: items.fname,
        fprice: items.fprice,
        fquantity: items.fquantity,
      });
      window.alert(resp.data);
      console.log(resp);
    } catch (error) {
      window.alert(error);
    }
  };

  return (
    <>
      <form onSubmit={addItems}>
        <div className="container text-center mt-5">
          <table>
            <thead>
              <tr>
                <th colSpan={2}>
                  <h3>Enter Food Details</h3>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="pe-0">Food ID :</td>
                <td>
                  <input
                    type="number"
                    onChange={Listitems}
                    value={items.fid}
                    name="fid"
                  />
                </td>
              </tr>
              <tr>
                <td className="pe-0">Food Name :</td>
                <td>
                  {" "}
                  <input
                    type="text"
                    onChange={Listitems}
                    value={items.fname}
                    name="fname"
                  />
                </td>
              </tr>
              <tr>
                <td>Food price :</td>
                <td>
                  <input
                    type="number"
                    step={0.01}
                    onChange={Listitems}
                    value={items.fprice}
                    name="fprice"
                  />
                </td>
              </tr>
              <tr>
                <td>Food Quantity :</td>
                <td>
                  <input
                    type="number"
                    onChange={Listitems}
                    value={items.fquantity}
                    name="fquantity"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button type="submit" className="btn btn-success">
                    Add Item
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </>
  );
};

export default Add;
