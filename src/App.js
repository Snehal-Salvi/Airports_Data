// App.js
import "./App.css";

import Table from "./components/Table/table";

function App() {
  return (
    <>
      <div className="app-heading">
        <h1 className="black-text">Filter</h1>
        <h1 className="grey-text">airports</h1>
      </div>

      <Table />
    </>
  );
}

export default App;
