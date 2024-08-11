import ReactDOM from "react-dom";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnBackgroundClick?: boolean;
}

const Modal = (props: ModalProps) => {
  const { isOpen, onClose, children, closeOnBackgroundClick = false } = props;

  if (!isOpen) {
    return null;
  }

  const handleModalClose = (e) => {
    if(!closeOnBackgroundClick) {
      return;
    }

    e.stopPropagation();

    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={handleModalClose}
    >
      <div className="bg-customBgColor1 rounded-lg shadow-lg relative flex">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex justify-center items-center bg-customBgColor1"
        >
          <img src="cross.svg" alt="Close" className="w-4 h-4" />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
