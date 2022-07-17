import React from 'react';
import { Box, Text } from '@chakra-ui/layout';
import { generateNewColor } from '../utils/utils';
import { Slide } from '@chakra-ui/react';
import { FaCopy, FaLock, FaLockOpen } from 'react-icons/fa';
const ColorPane = ({ state, initialColor = '' } = {}) => {
  const [regen, setRegen] = React.useState(true);
  const [color, setColor] = React.useState(initialColor);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCopyOpen, setIsCopyOpen] = React.useState(false);

  const handleClick = () => {
    setRegen(regen => !regen);
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), 800);
  };

  const copyOnClick = () => {
    navigator.clipboard.writeText(color);
    setIsCopyOpen(true);
    setTimeout(() => setIsCopyOpen(false), 2000);
  };

  React.useEffect(() => {
    if (regen) {
      setColor(() => generateNewColor());
    }
  }, [state]);

  return (
    <>
      <Box
        minW={['80%', '40%', '35%', '25%', '15%']}
        minH="sm"
        bg="gray.100"
        w="15%"
        borderRadius="20"
        m="5"
        p="3"
      >
        <Box bg={color} minH="70%" position="relative" borderRadius="10">
          <Box
            position="absolute"
            right="8px"
            top="8px"
            cursor="pointer"
            onClick={copyOnClick}
          >
            <FaCopy color="white" />
          </Box>
        </Box>
        <Box m="10" color="black">
          <Text
            onClick={handleClick}
            cursor="pointer"
            _hover={{ bg: 'gray.300' }}
            borderRadius="md"
            p="2"
            bg={!regen ? 'gray.300' : 'gray.100'}
          >
            {color}
            {regen ? (
              <FaLockOpen
                style={{
                  display: 'inline',
                  marginLeft: '10',
                  height: '12',
                  color: 'grey',
                }}
              />
            ) : (
              <FaLock
                style={{ display: 'inline', marginLeft: '10', height: '12' }}
              />
            )}
          </Text>
        </Box>
      </Box>

      <Slide
        direction="top"
        in={isOpen}
        style={{ zIndex: 10 }}
        unmountOnExit={true}
      >
        <Box
          p="40px"
          color="white"
          m="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          {!regen ? 'Color Locked!' : 'Color Unlocked!'}
        </Box>
      </Slide>
      <Slide
        direction="top"
        in={isCopyOpen}
        style={{ zIndex: 10 }}
        unmountOnExit={true}
      >
        <Box
          p="40px"
          color="white"
          m="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          {color} has been copied to your clipboard!
        </Box>
      </Slide>
    </>
  );
};

export default ColorPane;
