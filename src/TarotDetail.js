import React from 'react';
import { Image, Button, Text, Flex } from '@chakra-ui/react';

const TarotDetail = props => {
  const card = props.selectedCard;
  const date = new Date().toLocaleDateString();
  console.log(date);
  return (
    <Flex
      direction={{ sm: 'column', md: 'row' }}
      maxW={{ sm: '330px', md: '100%' }}
      h={{ sm: '100%', md: '85%' }}
      justify="center"
      align="center"
    >
      <Image
        maxH={{ sm: '200px', md: '370px' }}
        src={card.image}
        alt={card.name}
        mr={{ sm: '0', md: '30px' }}
        my={{ sm: '15px', md: '0' }}
        borderRadius="5px"
        shadow="lg"
      />
      <Flex
        direction="column"
        w={{ sm: '100%', md: '50%' }}
        pl={{ sm: '0', md: '30px' }}
        borderLeft={{ sm: 'none', md: '1px solid #727D8C' }}
        justify="space-between"
        align={{ sm: 'center', md: 'flex-start' }}
      >
        <Text
          fontSize={{ sm: '12px', md: '14px' }}
          color="#3E4C59"
          textAlign={{ sm: 'center', md: 'left' }}
          letterSpacing="0.05em"
          fontWeight="300"
        >
          {date}
        </Text>
        <Text
          fontSize={{ sm: '20px', md: '32px' }}
          color="#BF4B60"
          textAlign={{ sm: 'center', md: 'left' }}
          letterSpacing="0.05em"
          fontWeight="700"
          my={{ sm: '10px', md: '15px' }}
        >
          {card.name}
        </Text>
        <Text
          fontSize={{ sm: '14px', md: '16px' }}
          color="#3E4C59"
          textAlign={{ sm: 'center', md: 'left' }}
          letterSpacing="0.05em"
          fontWeight="400"
        >
          {card.text}
        </Text>
        <Button
          mt={{ sm: '20px', md: '30px' }}
          color="#FFF"
          bg="#727D8C"
          letterSpacing="0.05em"
          _hover={{ bg: '#3E4C59' }}
          onClick={props.restart}
          shadow="lg"
        >
          重新測驗
        </Button>
      </Flex>
    </Flex>
  );
};

export default TarotDetail;
