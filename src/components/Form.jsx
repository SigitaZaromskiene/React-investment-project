import styles from "../css/Form.module.css";
import { useContext, useState } from "react";
import { Global } from "./Global";

function Form({ setMessage, setData }) {
  const {
    setCurrentSavings,
    setIntrest,
    setYearSavings,
    setInvestment,
    currentSavings,
    intrest,
    yearSavings,
    investment,
  } = useContext(Global);

  const saveDataHandler = () => {
    if (
      currentSavings === "" ||
      intrest === "" ||
      yearSavings === "" ||
      investment === ""
    ) {
      setMessage("Please fill all information");
      setInterval(() => {
        setMessage("");
      }, 2000);
      setCurrentSavings("");
      setIntrest("");
      setYearSavings("");
      setInvestment("");
      return;
    }
    setData({
      curSave: currentSavings,
      intrest: intrest,
      yearSave: yearSavings,
      invest: investment,
    });
    setCurrentSavings("");
    setIntrest("");
    setYearSavings("");
    setInvestment("");
  };

  const resetHandler = () => {
    setCurrentSavings("");
    setIntrest("");
    setYearSavings("");
    setInvestment("");
  };
  return (
    <div className={styles.form}>
      <form>
        <div className={styles["form-column"]}>
          <div className={styles["one-column"]}>
            <label>Current savings</label>
            <input
              type="number"
              min="0"
              max="5000"
              placeholder="&euro;"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(e.target.value)}
            ></input>
          </div>
          <div className={styles["one-column"]}>
            <label>Expected intrest</label>
            <input
              type="number"
              min="0"
              max="5000"
              placeholder="&euro;"
              value={intrest}
              onChange={(e) => setIntrest(e.target.value)}
            ></input>
          </div>
        </div>
        <div className={styles["form-column"]}>
          <div className={styles["one-column"]}>
            <label>Yearly savings</label>
            <input
              type="number"
              placeholder="&euro;"
              min="0"
              max="5000"
              value={yearSavings}
              onChange={(e) => setYearSavings(e.target.value)}
            ></input>
          </div>
          <div className={styles["one-column"]}>
            <label>Investment duration</label>
            <input
              type="number"
              placeholder="&euro;"
              min="0"
              max="5000"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
            ></input>
          </div>
        </div>
      </form>
      <div className={styles["button-container"]}>
        <button className={styles.button} onClick={saveDataHandler}>
          Calculate
        </button>
        <button onClick={resetHandler} className={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Form;
