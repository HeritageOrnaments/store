
import './App.css';
import ProductAddToCart from './components/PLP/components/ProductAddToCart';
import { Heading, Box,Text,SimpleGrid, Flex } from '@chakra-ui/react'
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';

function App() {
  return (
    <div className="homepageompage">
      <Header />
      <div className='hompage-banner'>
        <img alt='hompage-banner' width={'100%'} src='http://via.placeholder.com/1200x400' />
      </div>
      <Box p={4} textAlign={'center'}>
        <Heading mb={2}>Best Sellers</Heading>
        <Text fontSize='xl'>Checkout with one of our best sellers</Text>
      </Box>
      <Flex  justifyContent={'center'}>
        <SimpleGrid padding={'30px'} columns={[2, null, 4]} >
          <ProductAddToCart product={{}}/>
          <ProductAddToCart product={{}}/>
          <ProductAddToCart product={{}}/>
          <ProductAddToCart product={{}}/>
        </SimpleGrid>
      </Flex>
      <div className='hompage-banner-2' mb={2}>
        <img alt='hompage-banner-2' width={'100%'} src='http://via.placeholder.com/1200x400' />
      </div>
      <Footer />
    </div>
  );
}

export default App;
