import React from "react";
import { View } from "@go1d/go1d";
import ExpertCost from "./ExpertCost";
import ExpertInfo from "./ExpertInfo";
import ExpertMore from "./ExpertMore";

const ExpertRight = () => {
  return (
    <View id="expert-group-down" width="27%" marginTop={5}>
      <ExpertCost />
      <ExpertInfo />
      <ExpertMore />
    </View>
  );
};

export default ExpertRight;
