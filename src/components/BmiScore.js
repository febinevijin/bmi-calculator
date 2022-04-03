import React from "react";

function BmiScore({ bmiNo, bmiName, changeWeight }) {
  // destructure
  // const{bmiNo,bmiName} = props

  //     console.log(props.bmiNo);

  console.log(changeWeight);
  return (
    <div className="text-center shadow rounded p-4">
      <div>Your BMI Score</div>
      <div className=" row justify-content-md-center">
        {changeWeight.type === "positive" && (
          <div className="p-3 my-2 alert fs-1 alert-warning col-sm-4">
            {bmiNo}
          </div>
        )}
        {changeWeight.type === "normal" && (
          <div className="p-3 my-2 alert fs-1 alert-success col-sm-4">
            {bmiNo}
          </div>
        )}
        {changeWeight.type === "negative" && (
          <div className="p-3 my-2 alert fs-1 alert-danger col-sm-4">
            {bmiNo}
          </div>
        )}
      </div>
      <div className="fs-3 fw-bold text-primary">{bmiName}</div>
      {changeWeight.type === "positive" && (
        <div className="fs-4">
          "You need loose{" "}
          <span className="fw-bold">{changeWeight.weight} Kg"</span>
        </div>
      )}

      {changeWeight.type === "negative" && (
        <div className="fs-4">
          "You need gain{" "}
          <span className="fw-bold">{changeWeight.weight} Kg"</span>
        </div>
      )}

      {changeWeight.type === "normal" && (
        <div className="fs-4">
          "Your weight is <span className="fw-bold"> Normal </span> ,Its good
          for you
        </div>
      )}
    </div>
  );
}

export default BmiScore;
