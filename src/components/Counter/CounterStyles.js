import styled from "styled-components";

const StyledCounter = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 50%;
  background: #7768ce;
  line-height: 15vh;
  color: white;
  font-size: 24px;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
`;

StyledCounter.displayName = "StyledCounter";

export default StyledCounter;
