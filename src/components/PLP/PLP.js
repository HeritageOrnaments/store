import ProductAddToCart from './components/ProductAddToCart.js';
import { SimpleGrid, Grid, Flex } from '@chakra-ui/react'
import Header from '../common/Header.js';
import Footer from '../common/Footer.js';

function PLP() {
    return (
        <div className="PLP" >
            <Header />
            <div className='plp-banner'>
                <img width={'100%'} alt={'plp-banner'} src='http://via.placeholder.com/1200x300' />
            </div>
            <Flex>
                <Grid w={[0, null, '20%']}></Grid>
                <SimpleGrid width={'auto'} padding={'30px'} columns={[2, null, 4]} >
                    <ProductAddToCart />
                    <ProductAddToCart />
                    <ProductAddToCart />
                    <ProductAddToCart />
                    <ProductAddToCart />
                    <ProductAddToCart />
                </SimpleGrid>
            </Flex>
            <Footer />
        </div>
    );
}

export default PLP;
