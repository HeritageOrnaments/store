
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
        <img alt='hompage-banner' width={'100%'} src='http://via.placeholder.com/1200x300' />
      </div>
      <Box p={4} textAlign={'center'}>
        <Heading mb={4}>Best Sellers</Heading>
        <Text fontSize='xl'>Checkout with one of Our Best sellers</Text>
      </Box>
      <Flex>
        <SimpleGrid padding={'30px'} columns={[2, null, 4]} >
          <ProductAddToCart />
          <ProductAddToCart />
          <ProductAddToCart />
          <ProductAddToCart />
        </SimpleGrid>
      </Flex>
      <div className='hompage-banner-2'>
        <img alt='hompage-banner-2' width={'100%'} src='http://via.placeholder.com/1200x300' />
      </div>
      <Footer />
    </div>
  );
}

export default App;
