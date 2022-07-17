import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import React from 'react';
import ColorPane from './ColorPane';
import Footer from './Footer';

const Palette = () => {
  const [state, setState] = React.useState({
    count: 0,
    num: 5,
    colors: [],
  });

  const { count, num, colors } = state;

  colors.splice(0, colors.length);

  for (let i = 0; i < num; i++) {
    colors.push(<ColorPane key={i} state={count} />);
  }

  return (
    <>
      <Flex justify="center" wrap="wrap">
        <Button
          aria-label="Add a color"
          onClick={() =>
            setState(prevState => ({ ...prevState, num: num + 1 }))
          }
          m="5"
        >
          Add a Color
        </Button>
        <Button
          aria-label="Remove a color"
          onClick={() =>
            setState(prevState => ({ ...prevState, num: num - 1 }))
          }
          m="5"
        >
          Remove a Color
        </Button>
      </Flex>
      <Flex justify="center" wrap="wrap">
        {colors.map(color => color)}
      </Flex>
      <Footer setState={setState} count={count} />
    </>
  );
};

export default Palette;
