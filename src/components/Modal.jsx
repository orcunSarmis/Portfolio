import { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import './modal.css'

const Modal = ({ className, children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <section id="backdrop"></section>
          <Card className={className}>{children}</Card>
        </>,
        document.querySelector("#overlays")
      )}
    </>
  );
};

export default Modal;
