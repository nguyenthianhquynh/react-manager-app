
// import stylesModal from "./ConfirmModal.module.scss";
import React from 'react';
import ReactDOM from 'react-dom';


const ConfirmModal = (props) => {
  return (
    <>
      {
        ReactDOM.createPortal(
          <div
          className={`modal fade ${props.show ? "show" : "hide"}`}
          id="exampleModalLive"
          role="dialog"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLiveLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Woohoo, you're reading this text in a modal!</p>
              </div>
              <div className="modal-footer">
                <button
                  onClick={props.onClose}
                  type="button"
                  className="btn btn-secondary"
                  
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div> ,
          document.getElementById("modal")
        )
      }
    </>
  );
};

export default ConfirmModal;
