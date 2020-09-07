import styled from "styled-components";

const StyledConfetti = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 50px;
  width: 50px;
  top: 50%;
  transform: translateY(50%);
`;
StyledConfetti.displayName = "StyledConfetti";

export default StyledConfetti;
