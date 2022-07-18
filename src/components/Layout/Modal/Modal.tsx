//create modal component

import { useState } from "react";
import { Overlay } from "../../Feedback/Overlay";
import { Button } from "../../General/Button/Button";
import "./modal.css";

interface ModalProps {
  modalStyle?: React.CSSProperties;
  modalTitle?: string;
  bodyStyle?: React.CSSProperties;
  closable?: boolean;
  footer?: boolean;
  onCanel?: () => void;
  onOk?: () => void;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  modalStyle,
  modalTitle,
  bodyStyle,
  closable = true,
  footer = true,
  onCanel,
  onOk,
  onClose,
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const handleClose = () => {
    setVisible(false);
    onClose();
  };
  const handleOk = () => {
    setVisible(false);
    onOk?.();
  };
  const handleCanel = () => {
    setVisible(false);
    onCanel?.();
  };
  return (
    <>
      <Overlay>
        <div
          className="twizzle-modal"
        >
          <div
            className="twizzle-modal-content"
            
          >
            <div className="twizzle-modal-header">
              <div className="twizzle-modal-title">
                <h4 style={{fontWeight: 'normal'}}>{modalTitle} </h4>
              </div>
              {closable && (
                <div className="twizzle-modal-close" onClick={handleClose}>
                 <i className="twizzle-icon-close">&#215;</i>
                </div>
              )}
            </div>
            <div className="twizzle-modal-body" style={bodyStyle}>
              {children}
            </div>
            {footer && (
              <div className="twizzle-modal-footer">
                <div className="twizzle-modal-footer-buttons">
                  <Button onClick={handleCanel} label="Cancel" outlined />
                  <Button onClick={handleOk} label="Ok" />
                </div>
              </div>
            )}
          </div>
        </div>
      </Overlay>
    </>
  );
};

export { Modal };
