import { createContext, useState } from "react";

const ModalWindowContext = createContext();

function ModalWindowProvider({ children }) {
  //modal context elements
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModalOpen = () => {
    setModalIsOpen(true);
    console.log("Modal opened.");
  };
  const handleModalClose = () => {
    setModalIsOpen(false);
    console.log("Modal closed.");
  };

  //error context elements
  const [showError, setShowError] = useState();

  //jwt token context elements
  const [jwToken, setjwToken] = useState();

  return (
    <ModalWindowContext.Provider
      value={{
        modalIsOpen,
        handleModalClose,
        handleModalOpen,
        jwToken,
        setjwToken,
        showError,
        setShowError,
      }}
    >
      {children}
    </ModalWindowContext.Provider>
  );
}

export { ModalWindowProvider };
export default ModalWindowContext;
