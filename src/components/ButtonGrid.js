import React, { useState, useEffect } from "react";
import {
  FaMinusCircle,
  FaRecycle,
  FaPlusCircle,
  FaTrash,
} from "react-icons/fa";
import { GrRefresh } from "react-icons/gr";

const ButtonSet = (props) => {
  const [value, setValue] = useState(0);
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    setValue(0)
  },[props.refresh]);

  return (
    <div className="row justify-content-center">
      {display && (
        <div className="row mt-2 mb-2">
          <div>
            <span
              className="badge badge-warning mr-2"
              style={{
                fontSize: "24px",
                color: "white",
                backgroundColor: value == 0 ? "#ffc107" : "#007bff",
              }}
              name="id1"
            >
              {value === 0 ? "Zero" : value}
            </span>
          </div>
          <div>
            <button
              className="btn btn-secondary"
              onClick={() => setValue(value + 1)}
            >
              <FaPlusCircle />
            </button>
            <button
              className="btn btn-info"
              onClick={() => setValue(value - 1)}
              disabled={value === 0 ? true : false}
            >
              <FaMinusCircle />
            </button>
            <button
              className="btn btn-danger"
              onClick={() => setDisplay(false)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ButtonGrid = (props) => {
  const [refresh, setRefresh] = useState(false);

  const {handlenNoi} = props;


  return (
    <div>
      <div className="row justify-content-center">
        <button className="btn btn-success" onClick={() => setRefresh(!refresh)}>
          <GrRefresh />
        </button>
        <button className="btn btn-primary" onClick={handlenNoi}>
          <FaRecycle />
        </button>
      </div>
      <ButtonSet refresh={refresh} />
      <ButtonSet refresh={refresh} />
      <ButtonSet refresh={refresh} />
      <ButtonSet refresh={refresh} />
    </div>
  );
};

export default ButtonGrid;
