import React from "react";
import { PropTypes } from "prop-types";
import { StyledCookieWrapper, StyledCookie } from "./CookieStyles";

const Cookie = (props) => {
  const handleClick = (e) => {
    props.handleClick();
  };

  return (
    <StyledCookieWrapper>
      <StyledCookie onClick={handleClick} />
    </StyledCookieWrapper>
  );
};

Cookie.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default Cookie;
