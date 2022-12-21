import './Modal.css'
const Modal = (props) => {
    return ( 
        <div className="modal-backdrop">
            <div className="modal">
                {props.children}
                <button onClick={props.closeHandle}>Close</button>
            </div>
        </div>
     );
}
 
export default Modal;
