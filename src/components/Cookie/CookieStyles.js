import styled from "styled-components";

const StyledCookie = styled.div`
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/e/e5/Crystal_Project_cookie.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 300px;
  max-width: 400px;
  margin: 0 auto;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    animation: pulse 1s infinite;
    animation-timing-function: linear;
  }
`;
StyledCookie.displayName = "StyledCookie";

const StyledCookieWrapper = styled.div`
  width: 100%;
  padding: 50px;
`;

export { StyledCookieWrapper, StyledCookie };
