import React from 'react';
import { Flex, Text } from '@chakra-ui/layout';

const Header = () => {
  return (
    <Flex justify="center" minH="14vh" alignItems="center" m="1">
      <Text fontSize="4xl">Color Palette Generator</Text>
    </Flex>
  );
};

export default Header;
