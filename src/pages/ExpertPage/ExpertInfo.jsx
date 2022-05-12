import { Text, Theme, View } from "@go1d/go1d";
import React, { useContext } from "react";
import { EXPERTS, SKILLS } from "../../Data/Constants";
import SkillCard from "./SkillCard";

const ExpertInfo = () => {
  const { colors } = useContext(Theme);
  const initialData = EXPERTS[0];
  return (
    <View
      border={1}
      borderColor="delicate"
      backgroundColor="background"
      borderRadius={3}
      marginTop={6}
    >
      <View
        display={"flex"}
        flexDirection="row"
        marginY={4}
        paddingBottom={4}
        borderBottom={1}
        borderColor="soft"
        width="100%"
        justifyContent={"center"}
      >
        <View
          display={"flex"}
          flexDirection="column"
          marginRight={5}
          alignItems="center"
          justifyContent={"center"}
        >
          <View color={colors.contrast}>
            <Text fontSize={3}>10</Text>
          </View>
          <View color={colors.thin}>
            <Text fontSize={1}>events</Text>
          </View>
        </View>

        <View
          display={"flex"}
          flexDirection="column"
          marginX={5}
          alignItems="center"
          justifyContent={"center"}
        >
          <View color={colors.contrast}>
            <Text fontSize={3}>23</Text>
          </View>
          <View color={colors.thin}>
            <Text fontSize={1}>mentees</Text>
          </View>
        </View>

        <View
          display={"flex"}
          flexDirection="column"
          marginLeft={5}
          alignItems="center"
          justifyContent={"center"}
        >
          <View color={colors.contrast}>
            <Text fontSize={3}>321</Text>
          </View>
          <View color={colors.thin}>
            <Text fontSize={1}>likes</Text>
          </View>
        </View>
      </View>

      <View marginTop={3} marginX={5}>
        <View marginBottom={4}>
          <View color={colors.subtle} marginBottom={3}>
            <Text fontWeight="light">Industry</Text>
          </View>
          <View color={colors.default}>
            <Text fontWeight="medium" fontSize={2}>
              {initialData.industry}
            </Text>
          </View>
        </View>

        <View marginBottom={4}>
          <View color={colors.subtle} marginBottom={3}>
            <Text>Expertise</Text>
          </View>

          <View display={"flex"} flexDirection="row" flexWrap="wrap">
            {SKILLS.map((data, key) => {
              return <SkillCard key={key} content={data} />;
            })}
          </View>
        </View>

        <View marginBottom={4}>
          <View color={colors.subtle} marginBottom={3}>
            <Text>Skill level</Text>
          </View>

          <View color={colors.default}>
            <Text fontWeight="medium" fontSize={2}>
              Suitable for leaders
            </Text>
          </View>
        </View>

        <View marginBottom={4}>
          <View color={colors.subtle} marginBottom={3}>
            <Text>Services</Text>
          </View>

          <View color={colors.default}>
            <Text fontWeight="medium" fontSize={2}>
              Mentor ･ Coach ･ Speaker
            </Text>
          </View>
        </View>

        <View marginBottom={4}>
          <View color={colors.subtle} marginBottom={3}>
            <Text>Region & Language</Text>
          </View>

          <View color={colors.default}>
            <Text fontWeight="medium" fontSize={2}>
              Australia (APAC) ･ English (AU)
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExpertInfo;
