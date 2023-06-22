import styles from "../css/Form.module.css";

function Form() {
  return (
    <div className={styles.form}>
      <form>
        <div className={styles["form-column"]}>
          <div className={styles["one-column"]}>
            <label>Current savings</label>
            <input></input>
          </div>
          <div className={styles["one-column"]}>
            <label>Expected intrest</label>
            <input></input>
          </div>
        </div>
        <div className={styles["form-column"]}>
          <div className={styles["one-column"]}>
            <label>Yearly savings</label>
            <input></input>
          </div>
          <div className={styles["one-column"]}>
            <label>Investment duration</label>
            <input></input>
          </div>
        </div>
      </form>
      <div className={styles["button-container"]}>
        <button className={styles.button}>Calculate</button>
        <button className={styles.button}>Reset</button>
      </div>
    </div>
  );
}

export default Form;
