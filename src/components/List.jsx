import { Global } from "./Global";
import { useContext } from "react";
import styles from "../css/List.module.css";
import { v4 as uuidv4 } from "uuid";

function List() {
  const { data, setData } = useContext(Global);

  return (
    <>
      {data.length === 0 ? (
        <p style={{ fontSize: "18px" }}>No investment calculated yet.</p>
      ) : (
        data.map((li, i) => (
          <div key={uuidv4()} className={styles["list-container"]}>
            <div className={styles["list-headline"]}>
              <p>Year</p>
              <p>Total Savings</p>
              <p>Intrest(Year)</p>
              <p>Total intrest</p>
              <p>Invested</p>
            </div>
            <div className={styles.lists} style={{ color: "white" }}>
              <p>{i + 1}</p>
              <p>{li.curSave} &euro;</p>
              <p>{li.intrest} &euro;</p>
              <p>{li.yearSave} &euro;</p>
              <p>{li.invest} &euro;</p>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default List;
