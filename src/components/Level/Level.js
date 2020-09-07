import React, { useRef, useEffect } from "react";
import { PropTypes } from "prop-types";
import StyledLevel from "./LevelStyles";

const Level = (props) => {
  const ref = useRef(null);

  useEffect(() => {
    if (props.level > 1) {
      ref.current.classList.add("glow");
    }

    const timer = setTimeout(() => {
      ref.current.classList.remove("glow");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [props.level]);

  return (
    <StyledLevel ref={ref}>
      <span>Level: {props.level}</span>
    </StyledLevel>
  );
};

Level.propTypes = {
  level: PropTypes.number.isRequired
};

export default Level;
