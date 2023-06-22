import styles from "./css/Main.module.css";
import Form from "./components/Form";
import List from "./components/List";
import logo from "./img/investment.png";
import { GlobalProvider } from "./components/Global";
import { useState } from "react";
import Message from "./components/Message";

function App() {
  const [message, setMessage] = useState("");

  console.log(message);

  return (
    <GlobalProvider>
      <div className={styles.container}>
        <div className={styles.content}>
          <img src={logo} alt="page-logo" />
          <h1>Investment Calculator</h1>
          {message ? <Message message={message}></Message> : null}
          <Form setMessage={setMessage} />
          <List />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
