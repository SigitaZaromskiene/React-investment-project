import { Global } from "./Global";
import { useContext } from "react";
import styles from "../css/List.module.css";
import { v4 as uuidv4 } from "uuid";

function List() {
  const { data, setData } = useContext(Global);

  return (
    <>
      {!data ? (
        <p>No investment calculated yet.</p>
      ) : (
        data.map((li, i) => (
          <div key={uuidv4()} className={styles["list-container"]}>
            <div className={styles["list-headline"]}>
              <p>Year</p>
              <p>Total Savings</p>
              <p>Intrest(Year)</p>
              <p>Total intrest</p>
              <p>Invested capital</p>
            </div>
            <ul>
              <li>
                <p>{i + 1}</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </li>
            </ul>
          </div>
        ))
      )}
    </>
  );
}

export default List;
