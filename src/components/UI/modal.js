import { createPortal } from "react-dom";
import "./modal.css";
function Modal({ show, onClose, children}) {
    if(show === false) {
        return null;
    }
    return createPortal(
        <div className="backdrop" onClick={onClose}>
            <div className="modal" onClick={(event) => event.stopPropagation()}>{children}</div>
        </div>,
        document.body
    );   
}
export default Modal;