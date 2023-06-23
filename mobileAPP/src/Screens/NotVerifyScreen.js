import React from 'react'
import {
  Box,
  Button,
  Center,
  Image,
  Text,
  View,
  VStack
}
from 'native-base'
import Colors from '../color';
import Buttone from '../Components/Buttone';


function NotVerifyScreen() {
  return (
    <Box flex={1} bg={Colors.main}  safeAreaTop>
        <Center w="full" h={250} >
          <Image source={require("../img/assets/Favicon.png")}
          alt="Logo Marca"
          size="lg"
          />
        </Center>
        
        <VStack space={6} px={3} alignItems="center">
          <Buttone bg={Colors.black} color={Colors.white}>
            Registrar
            </Buttone> 

            <Buttone bg={Colors.white} color={Colors.black}>
                  Login        
          </Buttone>         
  </VStack>

  

    </Box>
  );
}

export default NotVerifyScreen