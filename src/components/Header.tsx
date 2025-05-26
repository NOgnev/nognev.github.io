import {
  Box,
  Flex,
  Link,
  HStack,
  Spacer,
  Button,
  useColorMode,
  IconButton,
  useDisclosure,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
  ];

  return (
    <Box bg="brand.500" px={4} py={3} color="white">
      <Flex maxW="container.2xl" mx="auto" alignItems="center">
        {/* Desktop nav */}
        <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              as={RouterLink}
              to={item.path}
              fontWeight={location.pathname === item.path ? 'bold' : 'normal'}
              _hover={{ textDecoration: 'none' }}
            >
              {item.label}
            </Link>
          ))}
        </HStack>

        {/* Mobile hamburger */}
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          mr={2}
          color="white"
          bg="brand.500"
          _hover={{ bg: 'brand.600' }}
        />

        <Spacer />

        <Button size="sm" onClick={toggleColorMode}>
          {colorMode === 'light' ? '🌙 Dark' : '☀️ Light'}
        </Button>
      </Flex>

      {/* Drawer for mobile menu */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="brand.500" color="white">
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  as={RouterLink}
                  to={item.path}
                  fontWeight={location.pathname === item.path ? 'bold' : 'normal'}
                  onClick={onClose}
                  w="100%"
                  _hover={{ textDecoration: 'underline', bg: 'brand.600' }}
                  px={3}
                  py={2}
                  borderRadius="md"
                  display="block"
                >
                  {item.label}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
