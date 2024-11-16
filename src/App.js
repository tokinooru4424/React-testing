import Container from "react-bootstrap/esm/Container";
import { Row } from "react-bootstrap";
import "./App.scss";
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";

function App() {
  return (
    <div className="app-container">
      <Header />
      <TableUsers />
    </div>
  );
}

export default App;
