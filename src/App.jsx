import styles from "./css/Main.module.css";
import Form from "./components/Form";
import List from "./components/List";
import logo from "./img/investment.png";
import { GlobalProvider } from "./components/Global";
import { useState, useEffect } from "react";
import Message from "./components/Message";
import { read, create } from "./components/localStorage";

function App() {
  const [message, setMessage] = useState("");

  const [data, setData] = useState(null);
  const [list, setList] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const key = "INVEST";

  useEffect(() => {
    setList(read(key));
  }, [lastUpdate]);

  useEffect(() => {
    if (data === null) {
      return;
    }
    create(key, data);
    setLastUpdate(Date.now());
  }, [data]);

  return (
    <GlobalProvider>
      <div className={styles.container}>
        <div className={styles.content}>
          <img src={logo} alt="page-logo" />
          <h1>Investment Calculator</h1>
          {message ? <Message message={message}></Message> : null}
          <Form setMessage={setMessage} setData={setData} />
          <List list={list} />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
