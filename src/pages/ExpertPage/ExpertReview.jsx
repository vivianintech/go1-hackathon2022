import React, { useContext } from "react";
import { Text, Theme, View } from "@go1d/go1d";

import ChevronRight from "@go1d/go1d/build/components/Icons/ChevronRight";

const ExpertReview = () => {
  const { colors } = useContext(Theme);

  return (
    <View
      id="expert-review"
      width="95%"
      border={1}
      borderColor="delicate"
      backgroundColor="background"
      borderRadius={3}
      marginBottom={7}
    >
      <View id="expert-review-text" marginLeft={7}>
        <View
          id="expert-review-title"
          color={colors.successLowest}
          display="flex"
          flexDirection={"row"}
          alignItems="center"
        >
          <Text fontSize={3} marginRight={3} marginY={5}>
            Reviews
          </Text>
          <ChevronRight />
        </View>

        <View id="expert-review-content" color={colors.subtle}>
          <Text marginY={4}>
            Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
            yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin
            grog yardarm hempen halter furl
          </Text>

          <Text marginY={4}>
            Best mentor ever. Forever grateful to the guidance and quality time
            Chris gave me!
          </Text>

          <Text marginY={4}>
            Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
            yardarm
          </Text>
        </View>
      </View>

      <View id="expert-review-thumb"></View>
    </View>
  );
};

export default ExpertReview;
