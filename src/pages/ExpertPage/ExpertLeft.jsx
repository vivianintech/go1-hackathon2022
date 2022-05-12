import React from "react";
import { View } from "@go1d/go1d";
import ExpertTopDesc from "./ExpertTopDesc";
import ExpertReview from "./ExpertReview";
import CourseRecommended from "./CourseRecommended";

const ExpertLeft = () => {
  return (
    <View id="expert-group-left" display={"flex"} width="70%">
      <ExpertTopDesc />
      <ExpertReview />
      <CourseRecommended />
    </View>
  );
};

export default ExpertLeft;
