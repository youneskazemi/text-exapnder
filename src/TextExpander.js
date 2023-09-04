import { useState } from "react";
import { PropTypes } from "prop-types";

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
  buttonColor = "#1f09cd",
  collapsedNumWords = 10,
  collapseButtonText = "Show less",
  expanded = false,
}) {
  const [show, setShow] = useState(expanded);

  return (
    <div className={className}>
      <span>
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
    backgroundColor: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
  };
  return (
    <button style={buttonStyle} onClick={onShow}>
      {children}
    </button>
  );
}

export default TextExpander;
