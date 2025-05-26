import { Box, Container } from '@chakra-ui/react';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { PageTransition } from './PageTransition';

export const Layout = () => {
  return (
    <>
      <Header />
      <Container maxW="container.lg" mt={6}>
        <Box as="main">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </Box>
      </Container>
    </>
  );
};
