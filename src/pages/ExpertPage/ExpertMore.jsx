import React, { useContext } from "react";
import { View, Text, Theme } from "@go1d/go1d";
import IconChevronRight from "@go1d/go1d/build/components/Icons/ChevronRight";
import { GURUS } from "../../Data/Constants";
import GuruCard from "./GuruCard";

const ExpertMore = () => {
  const { colors } = useContext(Theme);
  return (
    <View
      border={1}
      borderColor="delicate"
      backgroundColor="background"
      borderRadius={3}
      marginTop={6}
    >
      <View marginX={5} marginY={5}>
        <View
          display={"flex"}
          flexDirection="row"
          color={colors.successLowest}
          alignItems="center"
        >
          <Text fontSize={3} marginRight={3}>
            More like Chris
          </Text>
          <IconChevronRight />
        </View>
      </View>

      <View>
        {GURUS.map((data, key) => {
          return <GuruCard key={key} content={data} />;
        })}
      </View>
    </View>
  );
};

export default ExpertMore;
