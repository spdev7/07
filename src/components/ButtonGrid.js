import React, { useState, useEffect } from "react";
import { FaRecycle } from "react-icons/fa";
import { GrRefresh } from "react-icons/gr";
import ButtonSet from "./ButtonSet";

const ButtonGrid = (props) => {
  // const [refresh, setRefresh] = useState(false);
  const [count, setCount] = useState(4);
  const { handlenNoi } = props;
  const [bs, setBs] = useState([]);

  const renderBS = (count, setCount) => {
    let arr = [];

    for (let i = 0; i < count; i++) {
      arr.push(<ButtonSet count={count} setCount={setCount} />);
    }
    return arr && arr.map((ele) => ele);
  };

  useEffect(() => {
    setBs(renderBS(count, setCount));
  }, []);


  return (
    <div>
      <div className="row justify-content-center">
        <button className="btn btn-success" onClick={() => console.log("s")}>
          <GrRefresh />
        </button>
        <button
          className="btn btn-primary"
          onClick={() => renderBS(count, setCount(4))}
        >
          <FaRecycle />
        </button>
      </div>
      {bs}
    </div>
  );
};

export default ButtonGrid;
