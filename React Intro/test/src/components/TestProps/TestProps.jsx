import React from "react";
import { useState, useEffect } from "react";
import classes from "../Ui/Button.module.css";
import inputclass from "../Ui/Input.module.css";

const TestProps = (props) => {
  const intialValues = { name: "", surname: "", age: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formValues.name) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!formValues.surname) {
      errors.surname = "Cannot be blank";
    } else if (formValues.name.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }

    return errors;
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

  // const handleClik = (e) => {
  //   e.preventDefault();
  //   alert("Welcome Guys");
  // // };
  // const Increment = (e) => {
  //   e.preventDefault();
  //   setcount(count + 1);
  // };
  // const Decrement = (e) => {
  //   e.preventDefault();
  //   if (count > 0) {
  //     setcount(count - 1);
  //   }
  //   return 0;
  // };

  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit} className={inputclass.form_group}>
              <div className="row">
                <div className="col-lg-12">
                  <label htmlFor="name">Name</label>
                  <input
                    onChange={handleChange}
                    value={formValues.name}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter The Name"
                  />
                </div>
                <div className="col-lg-12">
                  <label htmlFor="surname">SurName</label>
                  <input
                    onChange={handleChange}
                    value={formValues.surname}
                    type="text"
                    name="surname"
                    id="surname"
                    placeholder="Enter The SurName"
                  />
                </div>
                <div className="col-lg-12">
                  <label htmlFor="age">Age</label>
                  <input
                    onChange={handleChange}
                    value={formValues.age}
                    type="tel"
                    name="age"
                    id="age"
                    placeholder="Enter The Age"
                  />
                </div>
              </div>

              <button type="submit" className={classes.btn}>
                Log In
              </button>
            </form>
            {formErrors.name && <span>{formErrors.name}</span>}
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <button onClick={Increment} className={classes.btn}>
              +
            </button>
            <span
              style={{
                color: "black",
                textAlign: "center",
                display: "block",
                fontSize: "1rem",
                borderRadius: "5px",
                padding: "10px",
                fontWeight: "bold",
                color: "white",
                backgroundColor: "gold",
              }}
            >
              {count}
            </span>
            <button onClick={Decrement} className={classes.btn}>
              -
            </button>
          </div>
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default TestProps;
