import styles from "./css/Main.module.css";
import Form from "./components/Form";
import List from "./components/List";
import logo from "./img/investment.png";
import { GlobalProvider } from "./components/Global";

function App() {
  return (
    <GlobalProvider>
      <div className={styles.container}>
        <div className={styles.content}>
          <img src={logo} alt="page-logo" />
          <h1>Investment Calculator</h1>
          <Form />
          <List />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
