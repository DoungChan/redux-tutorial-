// create function component
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";
import { useState } from "react";
function HookCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const [num, setNum] = useState(1);
  console.log("numOfCakes", numOfCakes);
  console.log("num", num);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={(num) => dispatch(buyCake(num))}>Buy{num} cake</button>
    </div>
  );
}
export default HookCakeContainer;
