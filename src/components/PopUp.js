import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function PopUp({ open, setPopup, message, title, callback }) {
  const handleClose = () => {
    setPopup({ open: false });
    if (callback) {
      callback();
    }
  };

  return (
    <>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              color: "white",
              backgroundColor: "black",
              borderStyle: "none",
              lineHeight: "15px",
              cursor: "pointer",
            }}
            onClick={handleClose}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;
