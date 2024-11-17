import { Button, Modal } from "react-bootstrap";
import { deleteUser } from "../services/userService";
import { toast } from "react-toastify";

const ModalDeleteUser = (props) => {
  const { handleClose, show, dataUserDelete, handleDeleteUserFromModal } =
    props;

  const handleDeleteUser = async () => {
    let res = await deleteUser(dataUserDelete.id);
    if (res && +res.statusCode === 204) {
      toast.success("Delete user success");
      handleClose();
      handleDeleteUserFromModal(dataUserDelete);
    } else toast.error("Error delete user");
  };

  return (
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete user</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="body-add-new">
              This action can't be undone! Do you want to delete this user,
              <br />
              <b>email = {dataUserDelete.email}?</b>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => handleDeleteUser()}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ModalDeleteUser;
