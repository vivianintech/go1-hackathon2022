import React, { useContext } from "react";
import { Text, Theme, View } from "@go1d/go1d";

const SkillCard = props => {
  const { content } = props;
  const { colors } = useContext(Theme);
  return (
    <View
      border={1}
      borderColor="delicate"
      backgroundColor="soft"
      borderRadius={1}
      margin={2}
      textAlign={"center"}
      color={colors.default}
    >
      <Text fontWeight="semibold" fontSize={1}>
        {content}
      </Text>
    </View>
  );
};

export default SkillCard;
