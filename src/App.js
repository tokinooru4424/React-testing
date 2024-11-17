import Container from "react-bootstrap/esm/Container";
import "./App.scss";
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import ModalAddNewUser from "./components/ModalAddNewUser";
import { useState } from "react";

function App() {
  const [isShowModalAddNewUser, setIsShowModalAddNewUser] = useState(false);

  const handleClose = () => {
    setIsShowModalAddNewUser(false);
  };

  return (
    <div className="app-container">
      <Header />
      <Container>
        <div className="my-3 add-new">
          <span>
            <b>
              <h3>List Users: </h3>
            </b>
          </span>
          <button
            className="btn btn-success "
            onClick={() => setIsShowModalAddNewUser(true)}
          >
            Add new user
          </button>
        </div>
        <TableUsers />
      </Container>
      <ModalAddNewUser show={isShowModalAddNewUser} handleClose={handleClose} />
    </div>
  );
}

export default App;
