import { Box, Center, Image, VStack } from "native-base";
import React from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";

function NotVerfiyScreen() {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={250}>
        <Image
          source={require("../../assets/favicon.png")}
          alt="Logo"
          size="lg"
        />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <Buttone bg={Colors.black} color={Colors.white}>
          Registro
        </Buttone>
        <Buttone bg={Colors.white} color={Colors.black}>
          Login
        </Buttone>
      </VStack>
    </Box>
  );
}

export default NotVerfiyScreen;
