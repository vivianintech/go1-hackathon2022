import { SlatMini, Text, Theme, View } from "@go1d/go1d";
import IconChevronDown from "@go1d/go1d/build/components/Icons/ChevronDown";
import React, { useContext } from "react";
import { EXPERTS } from "../../Data/Constants";

const ExpertCost = () => {
  const { colors } = useContext(Theme);
  const initialData = EXPERTS[0];
  return (
    <View
      border={1}
      borderColor="delicate"
      backgroundColor="background"
      borderRadius={3}
      marginTop={3}
      paddingLeft={5}
      display="flex"
      flexDirection={"row"}
    >
      <View>
        <View color={colors.subtle} marginY={2}>
          <Text fontSize={1}>Cost</Text>
        </View>

        <View display="flex" flexDirection={"row"}>
          <View marginTop={1}>
            <SlatMini
              size=""
              image="https://res.cloudinary.com/gohkt/image/upload/v1652332798/go1-hackathon/Group_1_okx1jt.svg"
            />
          </View>
          <View color={colors.default}>
            <Text fontSize={1}>
              {initialData.price} for Mentor session (x4)
            </Text>
          </View>
        </View>
      </View>

      <View
        alignItems={"center"}
        justifyContent="center"
        marginLeft={7}
        color={colors.subtle}
      >
        <IconChevronDown />
      </View>
    </View>
  );
};

export default ExpertCost;
