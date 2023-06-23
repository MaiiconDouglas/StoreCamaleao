import { Box, Heading, ScrollView, Text, View } from "native-base";
import React from "react";
import Colors from "../color";
import OrderInfo from "../Components/OrderInfo";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderIterm from "../Components/OrderIterm";
import OrderModel from "../Components/OrderModel";

function OrderScreen() {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="INFORMAÇÃO DE ENVIO"
            success
            subTitle="Envio: Brasil"
            text="Método de Pagamento: PayPal"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />

          <OrderInfo
            title="ENTREGAR PARA"
            subTitle="Endereço:"
            danger
            text="Rua 10 numero 41"
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
      </Box>

      {/* Order Iterm */}

      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
        PRODUTOS
        </Heading>
        <OrderIterm />

        {/* Total */}
        
        <OrderModel />
      </Box>
    </Box>
  );
}

export default OrderScreen;
