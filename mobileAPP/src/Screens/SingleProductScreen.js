import React, { useState } from 'react'
import {Box,Heading,Image,ScrollView,HStack,View} from 'native-base'
import Rating from "../Components/Rating";
import NumericInput from "react-native-numeric-input";
import Colors from '../color';

function SingleProductScreen() {
  const [value,setValue] = useState(0);
  return (
    <Box safeArea flex={1} bg={Colors.white}>
       <Text>
            <ScrollView px={5} showsVerticalScrollIndicator={false}>
              <Image 
              source={require("../../assets/images/1.jpg")}
              alt="Image"
              w="full"
              h={300}
              resizeMode="contain"/>

              <Heading fontSize={15} mb={2} lineHeight={22}>
                Camiseta Personalizada
              </Heading>

              <Rating value={4}/>
              <HStack space={2} alignItems="center" my={5}>
                <NumericInput
                 value={value}
                 totalWidth={140}
                 totalHeight={30}
                 iconSize={25}
                 step={1}
                 maxValue={15}
                 minValue={0}
                 borderColor={Colors.deepGray}
                 rounded
                 textColor={Colors.black}
                 iconStyle={{color: Colors.white}}
                 rightButtonBackgroundColor={Colors.main}
                 leftButtonBackgroundColor={Colors.main}
                 />
                 <Spacer/>
                 <Heading bold color={Colors.black} fontSize={19}>
                   R$ 25.00
                 </Heading>
              </HStack>
              <Text lineHeight={24} fontSize={12}>
                Adiquira esta camiseta estampada de alta qualidade produzida
                pela CammaleaoStore que acompanha todas as etapas de produção
                da camiseta desde o desing da estampa e análise do tecido até 
                a estampagem de fato.
              </Text>
              <Buttone bg={Colors.main} color={Colors.white} mt={10}>
                ADICIONAR AO CARRINHO
              </Buttone>
              {/*REVIEW*/}
              <Review/>
            </ScrollView>
        </Text>
    </Box>
  );
}

export default SingleProductScreen