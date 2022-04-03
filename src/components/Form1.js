import { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Form1({ getData }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)) {
      setAlert(true);
      console.log("not a valid input");
    } else {
      getData(weight, height);
      setAlert(false);
      setHeight(" ");
      setWeight(" ");
      // console.log(height);
      // console.log(weight);
    }
  };
  // let alertMsg
  // if(alert){
  //   alertMsg =  <div className="alert alert-danger" role ="alert"> Please enter valid datas</div>
  // }
  // else{
  //   alertMsg = " "
  // }

  return (
    <div>
      <Container className="d-flex justify-content-center pt-5">
        <div className="col-sm-4 shadow rounded px-5 pt-3">
          <h1 className="text-center pt-3 text-secondary h2">BMI Calculator</h1>
          {alert && (
            <div className="alert alert-danger" role="alert">
              {" "}
              Please enter valid datas
            </div>
          )}

          <section className="d-flex justify-content-center">
            <Form onSubmit={onSubmit}>
              <Form.Group className=" mb-3" controlId="formBasicEmail">
                <Form.Label>Weight in Kg</Form.Label>
                <Form.Control
                  type="Text"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="  mb-3" controlId="formBasicPassword">
                <Form.Label>Height in m</Form.Label>
                <Form.Control
                  type="text"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                />
              </Form.Group>
              <div className="pb-2 d-flex justify-content-center">
                <Button variant="primary" type="submit">
                  Get BMI
                </Button>
              </div>
            </Form>
          </section>
        </div>
      </Container>
    </div>
  );
}

export default Form1;
