import styles from "../css/Form.module.css";
import { useContext, useState } from "react";
import { Global } from "./Global";

function Form() {
  const {
    setCurrentSavings,
    setIntrest,
    setYearSavings,
    setInvestment,
    setData,
    currentSavings,
    intrest,
    yearSavings,
    investment,
  } = useContext(Global);

  const saveDataHandler = () => {
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
  return (
    <div className={styles.form}>
      <form>
        <div className={styles["form-column"]}>
          <div className={styles["one-column"]}>
            <label>Current savings</label>
            <input
              value={currentSavings}
              onChange={(e) => setCurrentSavings(e.target.value)}
            ></input>
          </div>
          <div className={styles["one-column"]}>
            <label>Expected intrest</label>
            <input
              value={intrest}
              onChange={(e) => setIntrest(e.target.value)}
            ></input>
          </div>
        </div>
        <div className={styles["form-column"]}>
          <div className={styles["one-column"]}>
            <label>Yearly savings</label>
            <input
              value={yearSavings}
              onChange={(e) => setYearSavings(e.target.value)}
            ></input>
          </div>
          <div className={styles["one-column"]}>
            <label>Investment duration</label>
            <input
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
        <button className={styles.button}>Reset</button>
      </div>
    </div>
  );
}

export default Form;
