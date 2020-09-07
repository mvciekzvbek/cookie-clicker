import styled from "styled-components";
import { ToastContainer } from "react-toastify";

const StyledNotification = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 50%;
  background: red;
  line-height: 20vh;
  color: white;
  font-size: 36px;
`;

StyledNotification.displayName = "StyledNotification";

const StyledToastContainer = styled(ToastContainer).attrs({})`
  .Toastify__toast-container {
  }
  .Toastify__toast {
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  }
  .Toastify__toast--success {
  }
  .Toastify__toast-body {
    font-size: 0.75em;
    line-height: 1em;
  }
  .Toastify__progress-bar {
  }
`;

export { StyledNotification, StyledToastContainer };
