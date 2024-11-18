import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { putUpdateUser } from "../services/userService";
import { toast } from "react-toastify";

const ModalUpdateUser = (props) => {
  const { handleClose, show, dataUserUpdate, handleUpdateUserFromModal } =
    props;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleUpdateUser = async () => {
    let res = await putUpdateUser(name, job, dataUserUpdate.id);

    console.log(res);
    if (res) {
      handleUpdateUserFromModal({
        first_name: name,
        id: dataUserUpdate.id,
      });

      handleClose();
      toast.success("Update user succeed");
    }
  };

  useEffect(() => {
    if (show) {
      setName(dataUserUpdate.first_name);
    }
  }, [dataUserUpdate]);

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
            <Modal.Title>Update user</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="body-add-new">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <div className="form-text"></div>
              </div>
              <div className="mb-3">
                <label className="form-label">Job</label>
                <input
                  type="text"
                  className="form-control"
                  value={job}
                  onChange={(event) => setJob(event.target.value)}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => handleUpdateUser()}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ModalUpdateUser;
