import React, { useEffect, useState } from "react";
import "../FoodMenu/Foodmenu.css";
import { Foodlist } from "../Services/Foodlist";
import { get } from "../Services/url";

const FoodMenu = () => {
  let [Fooditem, setFooditem] = useState(Foodlist.getList());

  let [Add, setAdd] = useState("Add");
  const Additem = () => {
    setAdd("rmv");
    // get("addFood", {
    //   method: "post",
    //   body: JSON.stringify({
    //     fid: 4,
    //     fname: "puri",
    //     fcost: 35,
    //     fquantity: 1,
    //   }),
    //   Headers: {
    //     "Content-type": "application/json; charset-UTF-8",
    //   },
    // }).then((msg) => console.log(msg));
  };

  return (
    <>
      <div className="row">
        {Fooditem.map((e, i) => {
          return (
            <div className=" card col-2 align-center">
              <div className="cardimg">
                <img className="fimg" src={e.fimage} alt="" />
              </div>
              <div className="card-body">
                {e.fname}
                {e.fcost}

                <button
                  className="{Add} btn btn-success ms-2"
                  onClick={Additem}
                >
                  {Add}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FoodMenu;
