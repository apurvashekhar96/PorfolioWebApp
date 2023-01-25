import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ children, onClick, actionBar }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  });
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClick}
        className="fixed inset-0 bg-tertiary opacity-40"
      ></div>
      <div className="fixed top-1/3 left-1/3 sm:inset-40 rounded-md p-5 md:p-10 bg-secondary-container">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
