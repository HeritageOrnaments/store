import ProductAddToCart from './components/ProductAddToCart.js';
import { SimpleGrid, Grid, Flex } from '@chakra-ui/react'
import Header from '../common/Header.js';
import Footer from '../common/Footer.js';
import catalogMgr from '../../primus/managers/catalogMgr.js';

const ProductTiles = () => {
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    var catagorie = catalogMgr.getCatagorie(params.get('cid')||null);
    var ProductTiles = [];
        for (const key in catagorie.products) {
            ProductTiles.push(
                <ProductAddToCart product={{
                    id: key,
                    name: catagorie.products[key].name,
                    description: catagorie.products[key].description,
                    price: catagorie.products[key].price,
                    Images: catagorie.products[key].Images
                }}/>
            )
        }
    return ProductTiles;
}

function PLP(params) {
    return (
        <div className="PLP" >
            <Header />
            <div className='plp-banner'>
                <img width={'100%'} alt={'plp-banner'} src='http://via.placeholder.com/1200x300' />
            </div>
            <Flex justifyContent={'center'}>
                <Grid w={[0, null, '20%']}></Grid>
                <SimpleGrid width={'auto'} padding={'30px'} columns={[2, null, 4]} >
                    <ProductTiles/>
                </SimpleGrid>
            </Flex>
            <Footer />
        </div>
    );
}

export default PLP;
