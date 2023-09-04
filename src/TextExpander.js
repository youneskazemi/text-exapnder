import { useState } from "react";

const textStyle = {
  paddingRight: "5px",
};

function TextExpander({
  children,
  expandButtonText = "Show more",
  className = {},
  buttonColor,
  collapsedNumWords = 65,
  collapseButtonText = "Show less",
  expanded,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className={className}>
      <span style={textStyle}>
        {show ? children : `${children.slice(0, collapsedNumWords)}...`}
      </span>
      <Button color={buttonColor} onShow={() => setShow((prev) => !prev)}>
        {show ? collapseButtonText : expandButtonText}
      </Button>
    </div>
  );
}

function Button({ children, color, onShow }) {
  const buttonStyle = {
    color,
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
  };
  return (
    <button style={buttonStyle} onClick={onShow}>
      {children}
    </button>
  );
}

export default TextExpander;
