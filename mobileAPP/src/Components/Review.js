import {Text,View} from 'react-native'
import React, {Component} from 'react'

export class Review extends Component{
    render(){
        return(
            <BOX my={9}>
                <Heading bold fontSize={15} mb={2}>
                    REVIEW
                </Heading>
                {/*IF THERE IS NO REVIEW */}

                {/*REVIEW */}
                <BOX p={3} bg={Colors.deepGray} mt={5} rounded={5}>
                   <Heading fontSize={15} color={Colors.black}>
                        Usuário Doe
                   </Heading>
                   <Rating value={4}/>
                   <Text mb={3}>12 Jan 2023 </Text>
                </BOX>
            </BOX>
        )
    }
}

