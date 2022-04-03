import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function BmiList({ range, bmi }) {
  console.log(range);
  return (
    <div>
      <div className="text-center shadow-sm rounded">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Type</th>
              <th>Bmi</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr className={bmi < 18.5 ? "border border-danger border-3" : null}>
              <td>Under Weight</td>
              <td> &lt; 18.5</td>
              <td>{range.underWeight.low} kg </td>
            </tr>
            <tr
              className={
                18.5 < bmi && bmi < 24.9
                  ? "border border-danger border-3"
                  : null
              }
            >
              <td>Normal</td>
              <td>18.5 - 24.9</td>
              <td>{range.normal.low + " - " + range.normal.high} Kg </td>
            </tr>

            <tr
              className={
                25 < bmi && bmi < 29.9 ? "border border-danger border-3" : null
              }
            >
              <td>Over Weight</td>
              <td>25 - 29.9</td>
              <td>{range.overWeight.low + " - " + range.overWeight.high} Kg</td>
            </tr>

            <tr
              className={
                30 < bmi && bmi < 34.9 ? "border border-danger border-3" : null
              }
            >
              <td>obesity class I</td>
              <td>30 - 34.9</td>
              <td>
                {" "}
                {range.obesityOne.low + " - " + range.obesityOne.high} Kg
              </td>
            </tr>

            <tr
              className={
                35 < bmi && bmi < 39.9 ? "border border-danger border-3" : null
              }
            >
              <td>obesity class II</td>
              <td>35 - 39.9</td>
              <td>
                {range.obesityTwo.low + " - " + range.obesityTwo.high} Kg{" "}
              </td>
            </tr>

            <tr className={40 < bmi ? "border border-danger border-3" : null}>
              <td>obesity class III</td>
              <td> 40 &gt;</td>
              <td>{range.obesityThree.high} Kg </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default BmiList;
