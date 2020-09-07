import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ACHIEVEMENTS, NOTIFICATION_CONFIG } from "../../config/config";
import { StyledNotification, StyledToastContainer } from "./NotificationStyles";

const Notification = (props) => {
  const notify = (msg) => toast.success(msg, NOTIFICATION_CONFIG);

  useEffect(() => {
    const lastAchievement = props.achievements[props.achievements.length - 1];
    const lastAchievementScore =
      (lastAchievement && lastAchievement.score) || 0;

    for (let achievement of ACHIEVEMENTS) {
      if (
        props.score >= achievement.score &&
        achievement.score > lastAchievementScore
      ) {
        notify(achievement.message);
        props.addAchievement(achievement);
      }
    }
  }, [props]);
  return (
    <StyledNotification>
      <StyledToastContainer />
    </StyledNotification>
  );
};

Notification.propTypes = {
  score: PropTypes.number.isRequired,
  achievements: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired
    })
  ),
  addAchievement: PropTypes.func.isRequired
};

export default Notification;
