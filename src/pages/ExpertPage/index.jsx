import React, { useContext } from "react";
import "../Style/ExpertPage.css";
import { Theme, View } from "@go1d/go1d";
import ExpertLeft from "./ExpertLeft";
import ExpertRight from "./ExpertRight";

const ExpertPage = () => {
  const { colors } = useContext(Theme);
  return (
    <View id="expert-page-container" display={"flex"} flexDirection="row">
      <ExpertLeft />
      <ExpertRight />
    </View>
  );
};

export default ExpertPage;
