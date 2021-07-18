import React from 'react';
import Example from './components/ColorMode';
import './style.css'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Button
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from './components/images/logo.png'
const Links = [{href:'/' ,link:'Home'},{href:'/example', link: 'Example'},{href:'/calculator', link: 'Calculator'}];


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('white.100', 'white.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><a href="/"><Image src={Logo} boxSize="50px" alt="logo"/></a></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Button onClick={()=> window.open(link.href, "_self")} colorScheme="black" variant="link">
                {link.link}
              </Button>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
          <Example/>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                
               <Button onClick={()=> window.open(link.href, "_self")}colorScheme="black" variant="link">
                {link.link}
              </Button>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
