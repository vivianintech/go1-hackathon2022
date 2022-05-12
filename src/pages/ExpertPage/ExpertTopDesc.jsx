import React, { useContext } from "react";
import {
  ButtonFilled,
  ButtonMinimal,
  Card,
  Text,
  Theme,
  View,
} from "@go1d/go1d";
import { EXPERTS } from "../../Data/Constants";

const ExpertTopDesc = () => {
  const { colors } = useContext(Theme);
  const initialData = EXPERTS[0];

  return (
    <View
      id="expert-top-desc"
      display={"flex"}
      flexDirection="row"
      marginTop={5}
    >
      <View id="expert-top-img" width={128} marginRight={7}>
        <Card thumbnail={initialData.image} />
      </View>
      <View
        id="expert-top-desc"
        display={"flex"}
        flexDirection="column"
        marginTop={4}
        maxWidth="75%"
      >
        <View id="expert-top-title" color={colors.successLow}>
          <Text fontFamily={"Victor Serif"}>{initialData.role}</Text>
        </View>

        <View id="expert-top-name" color={colors.successLowest} marginY={4}>
          <Text fontWeight={"bold"} fontSize={7} fontFamily="Victor Serif">
            {initialData.name}
          </Text>
        </View>

        <View color={colors.default}>
          <Text>{initialData.profileDesc}</Text>
        </View>

        <View
          id="expert-top-btns"
          display={"flex"}
          flexDirection="row"
          marginY={6}
          width="40%"
        >
          <ButtonFilled color="accent" marginRight={4}>
            <Text fontSize={0}>Record Your Intro</Text>
          </ButtonFilled>

          <ButtonFilled>
            <Text fontSize={0}>My availability</Text>
          </ButtonFilled>

          <ButtonMinimal css={{ marginLeft: "-12%", marginTop: "1%" }}>
            <svg
              width="45"
              height="45"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z"
                fill="white"
              />
              <path
                d="M22.6667 17.3333C23.7275 17.3333 24.7449 17.7548 25.4951 18.5049C26.2452 19.2551 26.6667 20.2725 26.6667 21.3333V26H24V21.3333C24 20.9797 23.8595 20.6406 23.6095 20.3905C23.3594 20.1405 23.0203 20 22.6667 20C22.313 20 21.9739 20.1405 21.7239 20.3905C21.4738 20.6406 21.3333 20.9797 21.3333 21.3333V26H18.6667V21.3333C18.6667 20.2725 19.0881 19.2551 19.8382 18.5049C20.5884 17.7548 21.6058 17.3333 22.6667 17.3333V17.3333Z"
                fill="#394446"
              />
              <path d="M16 18H13.3333V26H16V18Z" fill="#394446" />
              <path
                d="M14.6667 16C15.403 16 16 15.403 16 14.6667C16 13.9303 15.403 13.3333 14.6667 13.3333C13.9303 13.3333 13.3333 13.9303 13.3333 14.6667C13.3333 15.403 13.9303 16 14.6667 16Z"
                fill="#394446"
                stroke="#394446"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 1H32V-1H8V1ZM39 8V32H41V8H39ZM32 39H8V41H32V39ZM1 32V8H-1V32H1ZM8 39C4.13401 39 1 35.866 1 32H-1C-1 36.9706 3.02944 41 8 41V39ZM39 32C39 35.866 35.866 39 32 39V41C36.9706 41 41 36.9706 41 32H39ZM32 1C35.866 1 39 4.13401 39 8H41C41 3.02944 36.9706 -1 32 -1V1ZM8 -1C3.02944 -1 -1 3.02944 -1 8H1C1 4.13401 4.13401 1 8 1V-1Z"
                fill="#D3D8D9"
              />
            </svg>
          </ButtonMinimal>

          <ButtonMinimal css={{ marginLeft: "-30%", marginTop: "1%" }}>
            <svg
              width="45"
              height="45"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 8C0.5 3.58172 4.08172 0 8.5 0H32.5C36.9183 0 40.5 3.58172 40.5 8V32C40.5 36.4183 36.9183 40 32.5 40H8.5C4.08172 40 0.5 36.4183 0.5 32V8Z"
                fill="white"
              />
              <path
                d="M25.1667 26L20.5 22.6667L15.8333 26V15.3333C15.8333 14.9797 15.9738 14.6406 16.2239 14.3905C16.4739 14.1405 16.813 14 17.1667 14H23.8333C24.187 14 24.5261 14.1405 24.7761 14.3905C25.0262 14.6406 25.1667 14.9797 25.1667 15.3333V26Z"
                stroke="#394446"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5 1H32.5V-1H8.5V1ZM39.5 8V32H41.5V8H39.5ZM32.5 39H8.5V41H32.5V39ZM1.5 32V8H-0.5V32H1.5ZM8.5 39C4.63401 39 1.5 35.866 1.5 32H-0.5C-0.5 36.9706 3.52944 41 8.5 41V39ZM39.5 32C39.5 35.866 36.366 39 32.5 39V41C37.4706 41 41.5 36.9706 41.5 32H39.5ZM32.5 1C36.366 1 39.5 4.13401 39.5 8H41.5C41.5 3.02944 37.4706 -1 32.5 -1V1ZM8.5 -1C3.52944 -1 -0.5 3.02944 -0.5 8H1.5C1.5 4.13401 4.63401 1 8.5 1V-1Z"
                fill="#D3D8D9"
              />
            </svg>
          </ButtonMinimal>
        </View>
      </View>
    </View>
  );
};

export default ExpertTopDesc;
