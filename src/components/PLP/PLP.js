import ProductAddToCart from './components/ProductAddToCart.js';
import { Card, CardBody, SimpleGrid, Grid, Flex, Box, Heading, Text } from '@chakra-ui/react'
import Header from '../common/Header.js';
import Footer from '../common/Footer.js';
import catalogMgr from '../../primus/managers/catalogMgr.js';

const params = new URLSearchParams(window.location.hash.split('?')[1]);
var catagorie = catalogMgr.getCatagorie(params.get('cid') || null);

const ProductTiles = () => {
    var ProductTiles = [];
    for (const key in catagorie.products) {
        ProductTiles.push(
            <ProductAddToCart product={{
                id: key,
                name: catagorie.products[key].name,
                description: catagorie.products[key].description,
                price: catagorie.products[key].price,
                Images: catagorie.products[key].Images,
                url: '/store/#/product?pid=' + key
            }} />
        )
    }
    return ProductTiles;
}

function PLP(params) {
    return (
        <div className="PLP" >
            <Header />
            <div className='plp-banner'>
                <img width={'100%'} alt={'plp-banner'} src='http://via.placeholder.com/1200x400' />
            </div>

            <Box p={4} textAlign={'center'}>
                <Heading>{catagorie.name}</Heading>
                <Text fontSize='xl'>{catagorie.description}</Text>
            </Box>

            <Flex justifyContent={'center'}>
                <Grid w={[0, null, '20%']} padding={{base: '10px', lg:'20px'}} display={{base:'none', md:'flex', lg:'flex'}}>
                <Card>
                    <CardBody>
                        <Text></Text>
                    </CardBody>
                </Card>
                </Grid>
                <SimpleGrid width={'auto'} padding={{base: '10px', lg:'20px'}} columns={[2, null, 3]} >
                    <ProductTiles />
                </SimpleGrid>
            </Flex>
            <Footer />
        </div>
    );
}

export default PLP;
