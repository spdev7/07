import React, { useState, useEffect } from "react";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";

const ButtonSet = (props) => {
  console.log(props)
  const {count,setCount,handleNoi} = props;
  const [value, setValue] = useState(0);


  useEffect(() => {
    setValue(0);
  }, [props.refresh]);

  
  return (
    <div className="row justify-content-center">
      {
        <div className="row mt-2 mb-2">
          <div>
            <span
              className="badge badge-warning mr-2"
              style={{
                fontSize: "24px",
                color: "white",
                backgroundColor: value === 0 ? "#ffc107" : "#007bff",
              }}
            >
              {value === 0 ? "Zero" : value}
            </span>
          </div>
          <div>
            <button
              className="btn btn-secondary"
              onClick={() => {setValue(value + 1);handleNoi(1);console.log(value);}}
            >
              <FaPlusCircle />
            </button>
            <button
              className="btn btn-info"
              onClick={() => {setValue(value - 1);handleNoi(-1);}}
              disabled={value === 0 ? true : false}
            >
              <FaMinusCircle />
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                setCount(count-1);
              }}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default ButtonSet;
