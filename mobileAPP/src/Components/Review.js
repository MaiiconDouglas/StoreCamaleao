import React, { useState } from "react";
import {
  Box,
  CheckIcon,
  FormControl,
  Heading,
  Select,
  Text,
  TextArea,
  VStack,
} from "native-base";
import Colors from "../color";
import Rating from "./Rating";
import Message from "./Notfications/Message";
import Buttone from "./Buttone";

export default function Review() {
  const [ratings, setRatings] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
      ANÁLISE
      </Heading>

      {/*SE NÃO HOUVER REVISÃO */}

      {/* <Message
        color={Colors.main}
        bg={Colors.deepGray}
        bold
        children={"SEM REVISÃO"}
      /> */}
      {/* REVISÃO */}

      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          Julia Fernanda
        </Heading>
        <Rating value={4} />
        <Text my={2} fontSize={11}>
          23 de Junho de 2023
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children={
            "Esse produto e muito confortavel"
          }
        />
      </Box>
     
      {/* WRITE REVIEW */}

       <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
         AVALIE ESTE PRODUTO
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
            Avaliação
            </FormControl.Label>

            <Select
              bg={Colors.subGreen}
              borderWidth={0}
              rounded={5}
              py={4}
              placeholder="Escolha a taxa"
              _selectedItem={{
                bg: Colors.subGreen,
                endIcon: <CheckIcon size={3} />,
              }}
              selectedValue={ratings}
              onValueChange={(e) => setRatings(e)}
            >
              <Select.Item label="1 - EM BREVE" value="1" />
              <Select.Item label="2 - EM BREVE" value="2" />
              <Select.Item label="3 - EM BREVE" value="3" />
            </Select>

          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
             Comente
            </FormControl.Label>

            <TextArea
              h={24}
              w="full"
              placeholder="Esse produto é bom....."
              borderWidth={0}
              bg={Colors.subGreen}
              py={4}
              _focus={{
                bg: Colors.subGreen,
              }}
            />
          </FormControl>

          <Buttone bg={Colors.main} color={Colors.white}>
          ENVIAR
          </Buttone>
          <Message
            color={Colors.white}
            bg={Colors.black}
            children={"Por favor, 'Entre' para escreva um comentário"}
          />
        </VStack>
      </Box> 
    </Box>
  );
}
