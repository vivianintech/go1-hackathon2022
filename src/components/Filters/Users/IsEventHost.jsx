import React from "react";
import HostApplView from "../../AssessApplication/HostApplView";
import NotHostApplView from "../../AssessApplication/NotHostApplView";

const IsEventHost = props => {
  const user = window.localStorage.getItem("user");

  const { eventData } = props;
  const host = eventData.host_username;
  const IsEventHost = host === user;

  return IsEventHost ? <HostApplView /> : <NotHostApplView />;
};

export default IsEventHost;
