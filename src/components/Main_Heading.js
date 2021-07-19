import { Heading,
Text,
Button,
Stack,
Flex, Image,
} from "@chakra-ui/react"
import Lion from './images/giphy.gif'

export default function MainHeading(){
    return(
    <Stack
    textAlign={'center'}
    align={'center'}
    spacing={{ base: 8, md: 10 }}
    py={{ base: 20, md: 28 }}>
    <Heading
      fontWeight={600}
      fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
      lineHeight={'110%'}>
      <Text as={'span'} color={'red.400'}>YorkU</Text>{' '}
      <Text  as={'span'}
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
              GPA
            </Text>{' '}
            <Text as={'span'} color={'red.400'}>Calculator</Text>
    <br/>{''}
      <Text as={'span'}
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
    Calculate{' '}</Text><Text as={'span'} color={'red.400'}>
       and 
      </Text><Text as={'span'}
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
   {' '} Save  </Text>
      <Text as={'span'} color={'red.400'}>
       . 
      </Text><br/>{''}
      <Text as={'span'} color={'red.400'}>
       Made for {''}
      </Text>
      <Text as={'span'}
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
    Lions</Text>
    <Text as={'span'} color={'red.400'}>
       . 
      </Text>
      <br/> {''}
      
    </Heading><Image src={Lion} boxSize="300px" alt="lion"/>
    <Text color={'gray.500'} maxW={'3xl'}>
      A specially designed calculator for York University students, which aside from helping them 
      calculate their GPA also gives them an option to save their grade report in spreadsheet for later use.
    </Text>
    <Stack spacing={6} direction={'row'}>
     <Button
      onClick={()=> window.open("/calculator", "_self")}
        rounded={'full'}
        px={6}
        colorScheme={'red'}
        bg={'red.400'}
        _hover={{ bg: 'red.500' }}>
      Calculate
      </Button>
      <Button onClick={()=> window.open("/example", "_self")} rounded={'full'} px={6} >
      Example
      </Button>
    </Stack>
    <Flex w={'full'}>
      
    </Flex>
  </Stack>)
}
