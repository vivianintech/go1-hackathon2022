import React, { useContext } from "react";
import { Text, Theme, View } from "@go1d/go1d";

import ChevronRight from "@go1d/go1d/build/components/Icons/ChevronRight";
import { COURSES } from "../../Data/Constants";

import CourseRecommendCard from "./CourseRecommendCard";

const CourseRecommended = () => {
  const { colors } = useContext(Theme);

  return (
    <View
      id="expert-recommend"
      width="95%"
      border={1}
      borderColor="delicate"
      backgroundColor="background"
      borderRadius={3}
    >
      <View
        color={colors.successLowest}
        display="flex"
        flexDirection={"row"}
        alignItems="center"
        marginTop={5}
        marginLeft={7}
        marginBottom={5}
      >
        <Text fontSize={3} marginRight={3}>
          Courses recommended by Chris
        </Text>
        <ChevronRight />
      </View>

      <View>
        {COURSES.map((data, key) => {
          return <CourseRecommendCard key={key} content={data} />;
        })}
      </View>
    </View>
  );
};

export default CourseRecommended;
