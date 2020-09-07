import styled from "styled-components";

const StyledLevel = styled.div`
  position: relative;
  overflow: hidden;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 50%;
  background: #f4a21f;
  line-height: 15vh;
  color: white;
  font-size: 24px;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);

  &.glow:after {
    animation: shine 8s ease-in-out infinite;
    animation-fill-mode: forwards;
    content: "";
    position: absolute;
    top: 0%;
    left: -100%;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: rotate(0deg);

    background: rgba(255, 255, 255, 0.13);
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.4) 92%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  @keyframes shine {
    10% {
      opacity: 1;
      top: 0%;
      left: 30%;
      transition-property: left, top, opacity;
      transition-duration: 0.7s, 0.7s, 0.15s;
      transition-timing-function: ease;
    }
    100% {
      opacity: 0;
      top: 0;
      left: 500%;
      transition-property: left, top, opacity;
    }
  }
`;

StyledLevel.displayName = "StyledLevel";

export default StyledLevel;
