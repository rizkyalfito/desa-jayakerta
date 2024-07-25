import { IconButton, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

const ColorModeSwitcher = ({ isOpen, toggle }) => {
  const { colorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle Color Mode"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggle}
      variant="ghost"
      color="white"
      display={{ base: isOpen ? 'block' : 'none', md: 'none' }}
      position="fixed"
      bottom="4rem"
      right="1rem"
      transform="translateX(50%)"
    />
  );
};

ColorModeSwitcher.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default ColorModeSwitcher;
