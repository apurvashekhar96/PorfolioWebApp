import { useContext } from "react";
import ModalWindowContext from "../contexts/ModalWindow";

function useModalWindowContext() {
  return useContext(ModalWindowContext);
}

export default useModalWindowContext;
