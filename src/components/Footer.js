import { Button } from '@chakra-ui/button';
import { Flex, VStack, Kbd, Text, Spacer } from '@chakra-ui/layout';
import React from 'react';
import { Link } from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Footer = ({ setState, count }) => {
  React.useEffect(() => {
    const handleKeyPress = e => {
      setState(prevState => ({ ...prevState, count: count + 1 }));
    };
    const listener = event => {
      if (event.code === 'Space') {
        event.preventDefault();
        handleKeyPress();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [count, setState]);

  return (
    <Flex justify="center" alignItems="center" m="5">
      <VStack>
        <Button
          aria-label="Generate new palette"
          size="lg"
          fontSize="25"
          p="7"
          onClick={() =>
            setState(prevState => ({ ...prevState, count: count + 1 }))
          }
        >
          Generate Palette
        </Button>
        <Spacer />
        <Text display={['none', 'none', 'block']}>
          Or just press <Kbd>space</Kbd> to generate new palettes.
        </Text>
        <Spacer />
        <Text fontSize="0.8em">
          <Link
            href="https://github.com/itsayaankhan"
            isExternal
            aria-label="Link to my website"
          >
            Created by Ayaan Khan{' '}
            <FaExternalLinkAlt
              style={{ display: 'inline', marginLeft: '1', height: '12' }}
            />
          </Link>
        </Text>
      </VStack>
    </Flex>
  );
};

export default Footer;
