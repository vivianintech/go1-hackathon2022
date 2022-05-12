import React, { useContext } from "react";
import { View, Text, Theme, SlatMini } from "@go1d/go1d";

const CourseRecommendCard = props => {
  const { content } = props;
  const { colors } = useContext(Theme);

  return (
    <View
      marginBottom={6}
      marginLeft={7}
      width="80%"
      display={"flex"}
      flexDirection="row"
    >
      <View display={"flex"} flexDirection="column">
        <View>
          <View color={colors.default}>
            <Text fontSize={3}>{content.title}</Text>
          </View>

          <View color={colors.subtle} marginY={4}>
            <Text>{content.desc}</Text>
          </View>
        </View>

        <View display={"flex"} flexDirection="row">
          <View>
            <SlatMini image={content.icon} size="sm" />
          </View>
          <View display={"flex"} flexDirection="column">
            <View color={colors.default}>
              <Text fontWeight="medium">{content.author}</Text>
            </View>
            <View color={colors.subtle}>
              <Text fontWeight="light" fontSize={1}>
                {content.time} - {content.type}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <SlatMini image={content.img} size="md" />
      </View>
    </View>
  );
};

export default CourseRecommendCard;
