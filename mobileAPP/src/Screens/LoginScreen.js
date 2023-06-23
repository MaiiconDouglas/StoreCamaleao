import { Box, 
        Image, 
        Heading, 
        VStack , 
        Pressable, 
        Input, 
        Button,
        Text } 
        from 'native-base';
import React from 'react';
import Colors from "../color";
import { MaterialIcons} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function LoginScreen() {
  return (
    <Box flex={1} bg={Colors.black}>
        <Image flex={1} alt="Logo" 
        resizeMode="cover" size="lg" w="full"
        source={require("../img/assets/splash.png")}/>

        <Box w="full" h="full" position="absolute" top="0" px="6"
         justifyContent="center"
      >

      <Heading>LOGIN</Heading>
          <VStack space={5} pt="6">

            { /* EMAIL DE LOGIN*/ }

            <Input
             InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.main} />
             }
             variant="underline" placeholder="user@gmail.com"
             w="70%" pl={2} type="text" 
             color={Colors.main} borderBottomColor={Colors.underline}/>


            {/* PASSWORD DE LOGIN */}

            <Input
             InputLeftElement={
              <Ionicons name="eye" size={20} color={Colors.black} />              
             }
             variant="underline" 
             placeholder="********"
             w="70%" type="password" pl={2}
             color={Colors.main} borderBottomColor={Colors.underline}/>
          </VStack>   

          <Button
           _pressed={{
            bg:Colors.main,
           }}
           my={30}  w="40%" rounded={50} bg={Colors.main}_text={{
            color: Colors.white,
           }}>
             LOGIN
          </Button>
          <Pressable mt={4}>
            <Text color={Colors.deepestGray}>CADASTRE-SE</Text>
          </Pressable>
        </Box>        
    </Box>
  );
}

export default LoginScreen;