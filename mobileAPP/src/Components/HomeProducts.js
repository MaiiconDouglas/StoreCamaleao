import {   
    ScrollView,  
    Pressable, 
    Flex,     
    Box, 
    Heading, 
    Text, 
    Image 
}
from "native-base";
import React from 'react'
import products from "../data/Products";
import Colors from "../color";
import Rating from './Rating';

function HomeProducts() {
    return(
       <ScrollView 
       flex={1}
       showsVerticalScrollIndicator={false}
       >
        <Flex 
        flexWrap="wrap" 
        direction="row" 
        justifyContent="space-between" 
        px={6}
       >
                
        {products.map((products) => (  
             
        <Pressable 
            key={products._id} 
            w="47%" 
            bg={Colors.white}
            rounded="md"
            shadow={2} 
            pt={0.3}
            my={3} 
            pb={2}
            overflow="hidden"       
            >

        <Image 
                source={{ uri: products.image }}
                alt={products.name}
                w="full"
                h={24}
                resizeMode='contain' 
                />
         
            <Box px={4} pt={1}>
                <Heading size="sm" bold>
                    {products.price}
                </Heading>

                <Text 
                fontSize={10} 
                mt={1} 
                isTruncated 
                w="full">
                    {products.name}
                </Text>
                
                {/* Rating */}
                <Rating value={products.rating} />                
            </Box>
         </Pressable>
        ))}            
       </Flex>
     </ScrollView>
    );
}

export default HomeProducts;