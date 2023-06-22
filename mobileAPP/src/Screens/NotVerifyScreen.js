import React from 'react'
import {Box,
        Center,
        Image,
        } from 'native-base'
import { Colors } from '../color';


function NotVerifyScreen() {
  return (
    <Box flex={1} bg="#48b600"  safeAreaTop>
        <Center w="full" h={250} >
          <Image source={require("../img/assets/Favicon.png")}
          alt="Logo Marca"
          size="lg"
          />
        </Center>

    </Box>
  );
}

export default NotVerifyScreen