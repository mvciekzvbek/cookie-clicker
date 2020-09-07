import React from "react";
import { PropTypes } from "prop-types";
import StyledCounter from "./CounterStyles";

const Counter = (props) => {
  return (
    <StyledCounter>
      <span>Score: {props.score}</span>
    </StyledCounter>
  );
};

Counter.propTypes = {
  score: PropTypes.number.isRequired
};

export default Counter;
