import React, { useState } from "react";
import { Overlay } from "../../../Feedback/Overlay";
import { Button } from "../../../General/Button";
import { Typography } from "../../../General/Typography";
import { ModalProps } from "./Modal";
import {
  StyledModal,
  StyledModalBody,
  StyledModalClose,
  StyledModalContent,
  StyledModalFooter,
  StyledModalHeader,
} from "./StyledModal";

interface CornerModalProps extends ModalProps {
  /**
   * Position of the modal
   * @default "BOTTOM_RIGHT"
   */
  position?: "TOP_LEFT" | "TOP_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_RIGHT";
}

const CornerModal: React.FC<CornerModalProps> = ({
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
  position = "BOTTOM_RIGHT",
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

  const positionAtrributes = {
    TOP_LEFT: {
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    TOP_RIGHT: {
      alignItems: "flex-start",
      justifyContent: "flex-end",
    },
    BOTTOM_LEFT: {
      alignItems: "flex-end",
      justifyContent: "flex-start",
    },
    BOTTOM_RIGHT: {
      alignItems: "flex-end",
      justifyContent: "flex-end",
    },
  };

  return (
    <>
      <Overlay
        style={{
          display: "flex",
          alignItems: positionAtrributes[position].alignItems,
          justifyContent: positionAtrributes[position].justifyContent
        }}
      >
        <StyledModal
          role={"modal"}
          style={{
            margin: "12px",
            width: "80vh",
            ...style,
          }}
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

export default CornerModal;
