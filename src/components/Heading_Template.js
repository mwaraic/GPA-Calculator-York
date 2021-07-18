import {
    Text,Heading
    } from "@chakra-ui/react"
    
    export default function HeadingTemplate({match}){
        return(
            <>
            <br/>{''}<Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'red.400',
              zIndex: -1,
            }}>
            {match}
          </Text></Heading><br/>{''}</>)
    }
    
