import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface IModalProps {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export const Modal = ({ children, onClose, isOpen }: IModalProps) => {

 const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
   if (!isOpen) return null;

   

  return createPortal(
    <div className="modal"  onClick={handleOverlayClick}>
        <button className="trailer-modal-close" onClick={onClose}>
          ×
        </button>
      <div>{children}</div>
    </div>,
    document.body,
  );
};
