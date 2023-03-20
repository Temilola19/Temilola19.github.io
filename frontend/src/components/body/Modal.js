import React from "react";
import ReactDom from "react-dom";
const MODAL_STYLES = {
  position: "absolute",
  backgroundColor: "#FFF",
  padding: "30px",
  marginTop: "60px",
  zIndex: "1000",
  width: "fit-content",
  borderRadius: "30px",
  color: "black",
  textAlign: "right",
  padding: "50px",
  paddingBottom: "80px",
  margin: "50px auto",
};
const OVERLAY_STYLE = {
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0, .8)",
  zIndex: "1000",
  overflowY: "auto",
};
const Modal = ({ open, children }) => {
  if (!open) return null;
  return (
    <>
      <div style={OVERLAY_STYLE}>
        <div style={MODAL_STYLES}>{children}</div>
      </div>
    </>
  );
};

export default Modal;
