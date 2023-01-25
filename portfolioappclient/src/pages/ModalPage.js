import useModalWindowContext from "../hooks/useModalWindowContext";
import Modal from "../components/Modal";
import Button from "../components/Button";
import LoginForm from "./LoginForm";

function ModalPage() {
  //modal window context is being used to save jwtokens and error data.
  const { modalIsOpen, handleModalClose, jwToken, showError, setShowError } =
    useModalWindowContext();

  let actionBar;

  const handleModalCloseResetError = () => {
    handleModalClose();
    setShowError(null);
  };

  if (!jwToken && !showError) {
    actionBar = <></>;
  } else {
    actionBar = (
      <Button onClick={handleModalCloseResetError} primary rounded>
        Close Modal
      </Button>
    );
  }
  const modalEl = (
    <Modal actionBar={actionBar} onClick={handleModalClose}>
      <LoginForm />
    </Modal>
  );
  return <div>{modalIsOpen && modalEl}</div>;
}

export default ModalPage;
