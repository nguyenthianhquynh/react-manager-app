
// import stylesModal from "./ConfirmModal.module.scss";
import ReactDOM from 'react-dom';


const ConfirmModal = (props) => {
  return (
    <>
      {
        ReactDOM.createPortal(
          <div
          className={`modal fade ${props.show ? "show" : "hide"}`}
          id="exampleModalLive"
          tabindex="-1"
          role="dialog"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLiveLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p>Woohoo, you're reading this text in a modal!</p>
              </div>
              <div class="modal-footer">
                <button
                  onClick={props.onClose}
                  type="button"
                  class="btn btn-secondary"
                  
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
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
