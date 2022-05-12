import React, { useContext } from "react";
import { ButtonFilled, Text, SlatMini, Theme, View } from "@go1d/go1d";

const GuruCard = props => {
  const { content } = props;
  const { colors } = useContext(Theme);
  return (
    <View margin={5} display="flex" flexDirection={"row"}>
      <View>
        <SlatMini image={content.img} size="sm" />
      </View>

      <View display="flex" flexDirection={"column"}>
        <View display="flex" flexDirection={"row"} marginBottom={3}>
          {content.isGuru && (
            <View
              backgroundColor="vividMid"
              border={1}
              borderColor="delicate"
              borderRadius={1}
            >
              <Text>Guru</Text>
            </View>
          )}
          <View marginLeft={2} color={colors.default}>
            <Text fontWeight="medium">{content.name}</Text>
          </View>
        </View>

        <View color={colors.subtle}>
          <Text fontSize={1} fontWeight="light">
            {content.company}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default GuruCard;
