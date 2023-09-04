import { useState } from "react";
import { PropTypes } from "prop-types";

const textStyle = {
  paddingRight: "5px",
};

TextExpander.propTypes = {
  expandButtonText: PropTypes.string,
  className: PropTypes.string,
  buttonColor: PropTypes.string,
  collapsedNumWords: PropTypes.number,
  collapseButtonText: PropTypes.string,
  expanded: PropTypes.bool,
};

function TextExpander({
  children,
  expandButtonText = "Show more",
  className = "",
  buttonColor,
  collapsedNumWords = 65,
  collapseButtonText = "Show less",
  expanded = false,
}) {
  const [show, setShow] = useState(expanded);

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
