import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { default as ReactConfetti } from "react-dom-confetti";
import { CONFETTI_CONFIG } from "../../config/config";
import StyledConfetti from "./ConfettiStyles";

const Confetti = (props) => {
  let [isConfettiRunning, setIsConfettiRunning] = useState(false);

  useEffect(() => {
    if (props.nextBreakingPoint !== 10) {
      setIsConfettiRunning(true);
    }
  }, [props.nextBreakingPoint]);

  useEffect(() => {
    if (isConfettiRunning) {
      setIsConfettiRunning(false);
    }
  }, [props.score, isConfettiRunning]);

  return (
    <StyledConfetti>
      <ReactConfetti config={CONFETTI_CONFIG} active={isConfettiRunning} />
    </StyledConfetti>
  );
};

Confetti.propTypes = {
  nextBreakingPoint: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired
};

export default Confetti;
