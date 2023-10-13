import React, { useEffect, useState } from "react";
import "./FoodCart.css";
import { get } from "../Services/url";

const FoodCart = () => {
  let [Food, setFood] = useState([]);

  useEffect(() => {
    console.log("fetched");
    get("getFood", {}).then(
      (res) => setFood(res)
      // window.alert("Data not Found")
    );
    // .catch(window.alert("Data not Found"));
  }, []);

  let incQ = (foodid) => {
    setFood((prevState) => {
      return prevState.map((e, i) => {
        if (e.fid === foodid) {
          return {
            ...e,
            fquantity: e.fquantity + 1,
          };
        } else {
          return e;
        }
      });
    });
  };
  let decQ = (fid) => {
    setFood((prevState) => {
      return prevState.map((e, i) => {
        if (e.fid === fid) {
          return {
            ...e,
            fquantity: e.fquantity - 1 > 0 ? e.fquantity - 1 : 1,
          };
        } else {
          return e;
        }
      });
    });
  };

  let allitems = () => {
    let items = 0;
    for (let i of Food) {
      items += i.fquantity;
    }
    return items;
  };

  let bill = () => {
    let total = 0;
    for (let f of Food) {
      total += f.fprice * f.fquantity;
    }
    return total;
  };

  let del = (foodid) => {
    setFood((prevState) => {
      return prevState.filter((Food) => Food.fid != foodid);
    });
  };

  return (
    <>
      <div className="main container mt-4">
        <h3 className="order ">Order Your Food Now</h3>

        <div className="row mt-4">
          <div className="col">
            <div className="cart">
              <table className="table text-center table-hover table-striped">
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>price</th>
                    <th>Quantity</th>
                    <th>Item Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {Food.map((e, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{e.fname}</td>
                        <td>&#8377;{e.fprice}</td>
                        <td>
                          <i onClick={() => decQ(e.fid)} class="bi bi-dash"></i>

                          {e.fquantity}
                          <i onClick={() => incQ(e.fid)} class="bi bi-plus"></i>
                        </td>
                        <td>&#8377;{e.fquantity * e.fprice}</td>
                        <td>
                          <button
                            onClick={() => del(e.fid)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}

                  {bill() > 0 ? (
                    <tr>
                      <td colSpan={2}></td>
                      <td className="totalitems" colSpan={2}>
                        Total Items = {allitems()}
                      </td>
                      <td className="totalbill" colSpan={2}>
                        Total Bill = {bill()}
                      </td>
                    </tr>
                  ) : (
                    <tr>
                      <td
                        colSpan={6}
                        className="selectitems bg-danger text-white"
                      >
                        Add Items to Cart
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCart;
