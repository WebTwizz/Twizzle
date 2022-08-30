import React, { useState } from "react";
import { Overlay } from "../../../Feedback/Overlay";
import { Button } from "../../../General/Button";
import { Typography } from "../../../General/Typography";
import {
  StyledModal,
  StyledModalBody,
  StyledModalClose,
  StyledModalContent,
  StyledModalFooter,
  StyledModalHeader,
} from "./StyledModal";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Title of the modal
   */
  title?: string;
  /**
   * boolean to show close button
   */
  closable?: boolean;
  /**
   * boolean to show the header of the modal
   */
  header?: boolean;
  /**
   * boolean to show the footer of the modal
   * @default true
   */
  footer?: boolean;
  /**
   * onCancel callback function
   */
  onCancel?: () => void;
  /**
   * Show cancel button
   */
  showCancel?: boolean;
  /**
   * onOk callback function
   */
  onConfirm?: () => void;
  /**
   * Show confirm button
   */
  showConfirm?: boolean;
  /**
   * text for the confirm button
   * @default "Confirm"
   */
  confirmText?: string;
  /**
   * onClose callback function
   */
  onClose?: () => void;
  /**
   * Content of the modal for the body
   */
  children: React.ReactNode;
  /**
   * styling for the modal
   */
  style?: React.CSSProperties;
  /**
   * styling for the body of the modal content
   */
  bodyStyle?: React.CSSProperties;
}

const Modal: React.FC<ModalProps> = ({
  title,
  closable = true,
  header = true,
  footer = true,
  onCancel,
  showCancel = true,
  onConfirm,
  showConfirm = true,
  confirmText = "Confirm",
  onClose,
  children,
  style,
  bodyStyle,
  ...props
}) => {
  const handleClose = () => {
    onClose?.();
  };
  const handleConfirm = () => {
    onConfirm?.();
  };
  const handleCanel = () => {
    onCancel?.();
  };
  return (
    <>
      <Overlay
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <StyledModal
          role={"modal"}
          style={{
            ...style,
          }}
          {...props}
        >
          <StyledModalContent
            style={{
              ...bodyStyle,
            }}
          >
            {header && <StyledModalHeader>
              <Typography
                elementType={5}
                style={{ fontWeight: "normal", margin: "12px 0px" }}
              >
                {title}{" "}
              </Typography>
              {closable && (
                <StyledModalClose
                  onClick={() => handleClose()}
                  className="twizzle-modal-close"
                  role={"close-button"}
                >
                  &#215;
                </StyledModalClose>
              )}
            </StyledModalHeader>}
            <StyledModalBody style={bodyStyle}>{children}</StyledModalBody>
            {footer && (
              <StyledModalFooter>
                {showCancel && (
                  <Button onClick={handleCanel} style={{margin: '0px 5px'}} label="Cancel" outlined />
                )}
                {showConfirm && (
                  <Button onClick={handleConfirm} style={{margin: '0px 5px'}} label={confirmText} />
                )}
              </StyledModalFooter>
            )}
          </StyledModalContent>
        </StyledModal>
      </Overlay>
    </>
  );
};

export default Modal;
