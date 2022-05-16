import React from 'react';
import { ChakraProvider, extendTheme, Flex, Heading } from '@chakra-ui/react';
import TarotPile from './TarotPile';

const breakpoints = {
  sm: '300px',
  md: '760px',
};

const fonts = {
  heading: 'Microsoft JhengHei, sans-serif',
  body: 'Microsoft JhengHei, sans-serif',
};

const theme = extendTheme({ breakpoints, fonts });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex w="100vw" h="100vh" align="center" justify="center" p="30px">
        <Flex
          direction="column"
          w={{ sm: '100%', md: '900px' }}
          h={{ sm: '100%', md: '600px' }}
          p="30px"
          shadow="lg"
          bg="#B8BBBF"
          borderRadius="5px"
          align="center"
          justify="center"
        >
          <Heading
            fontSize={{ sm: '18px', md: '32px' }}
            letterSpacing="0.05em"
            textAlign="center"
            fontWeight="200"
            color="#3E4C59"
          >
            Adam's Daily Tarot Reading
          </Heading>
          <TarotPile />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
