import React, { useState } from 'react';
import { Flex, Box, Text, VStack } from '@chakra-ui/react';
import TarotDetail from './TarotDetail';
import { DUMMY_DATA } from './DUMMY_DATA';

const TarotPile = () => {
  const emptyCards = [...Array(DUMMY_DATA.length + 1)];
  const [card, setCard] = useState();
  const [isClicked, setIsClicked] = useState(true);

  const handleSelectCard = e => {
    if (isClicked === true) {
      document.getElementById(e.target.id).style.marginTop = '-35px';
      document.getElementById('beforeSelect').style.cssText =
        'pointer-events: none; opacity: 0';

      setIsClicked(false);

      setTimeout(() => {
        setCard(DUMMY_DATA[Math.floor(Math.random() * DUMMY_DATA.length)]);
        setIsClicked(true);
      }, 1500);
    } else return;
  };

  // const afterSelect = document.getElementById('afterSelect');
  // afterSelect.style.opacity = 1;

  const handleRestart = () => {
    setCard();
  };

  return (
    <>
      {!card ? (
        <VStack>
          <Flex
            justify="center"
            m="50px 0 20px 56px"
            id="beforeSelect"
            transition="1.5s ease-in-out"
          >
            {emptyCards.map((el, index) => (
              <Box
                ml="-56px"
                w="66px"
                h="120px"
                bg="#727D8C"
                shadow="sm"
                border="1px solid #3E4C59"
                borderRadius="5px"
                id={index}
                key={index}
                cursor="pointer"
                _hover={{ bg: '#BF4B60', mt: '-5px' }}
                onClick={handleSelectCard}
                transition="0.3s ease-in-out"
              />
            ))}
          </Flex>
          <Box>
            <Text letterSpacing="0.05em" fontWeight="300" color="#3E4C59">
              請選擇一張牌
            </Text>
          </Box>
        </VStack>
      ) : (
        <TarotDetail selectedCard={card} restart={handleRestart} />
      )}
    </>
  );
};

export default TarotPile;
