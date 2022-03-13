import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [errorBody, setErrorBody] = useState();

  const usernameChangeHandler = (event) => {
    return setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    return setEnteredAge(event.target.value);
  };
  const submitNewUser = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrorBody({
        title: "Fields can not be blank",
        message: "make sure to fill all fields",
      });
      return;
    }
    if (+enteredAge < 0) {
      setErrorBody({
        title: "Please enter a valid age",
        message: "Age has to be more than 0",
      });
      return;
    }
    console.log(enteredUsername, enteredAge);

    props.onSubmitNewUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
   const errorBodyHandler = () => {
     setErrorBody(null);
   };
  return (
    <>
      {errorBody && (
        <ErrorModal
          title={errorBody.title}
          message={errorBody.message}
          onClickOkHandle={errorBodyHandler}
        />
      )}
      <Card passingClassName={styles.input}>
        <form onSubmit={submitNewUser}>
          <label>Name</label>
          <input
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label>Age</label>
          <input type="number" onChange={ageChangeHandler} value={enteredAge} />
          <Button content="Add User" />
        </form>
      </Card>
    </>
  );
};

export default AddUser;
