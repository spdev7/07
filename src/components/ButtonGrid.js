import React, { useState, useEffect } from "react";
import { FaRecycle } from "react-icons/fa";
import { GrRefresh } from "react-icons/gr";
import ButtonSet from "./ButtonSet";
import { v4 as uuidv4} from 'uuid'

const ButtonGrid = (props) => {
  const [refresh, setRefresh] = useState(false);
  const [count, setCount] = useState(4);
  const { handleNoi } = props;
  const [bs, setBs] = useState([]);

  const renderBS = (count, setCount, refresh, handleNoi) => {
    let arr = [];
    console.log(arr)
    for (let i = 0; i < count; i++) {
      arr.push(
        <ButtonSet
          key={i}
          i={uuidv4()}
          count={count}
          setCount={setCount}
          handleNoi={handleNoi}
          refresh={refresh}
        />
      );
    }
    console.log(arr)
    return arr && arr.map((ele) => ele);
  };


  useEffect(() => {
    setBs(renderBS(count, setCount, refresh, handleNoi));
  }, [refresh,count]);

  return (
    <div>
      <div className="row justify-content-center">
        <button
          className="btn btn-success"
          onClick={() => {
            setRefresh(!refresh);
            renderBS(count, setCount, refresh, handleNoi);
          }}
        >
          <GrRefresh />
        </button>
        <button
          className="btn btn-primary"
          onClick={() => renderBS(count, setCount(4), refresh, handleNoi)}
          disabled={count !== 0 ? true : false}
        >
          <FaRecycle />
        </button>
      </div>
      {bs}
    </div>
  );
};

export default ButtonGrid;
