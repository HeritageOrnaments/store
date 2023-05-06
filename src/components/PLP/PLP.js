import ProductAddToCart from './components/ProductAddToCart.js';
import { Card, CardBody, SimpleGrid, Grid, Flex, Box, Heading, Text, Spinner } from '@chakra-ui/react'
import Header from '../common/Header.js';
import Footer from '../common/Footer.js';
import { useGetCategory } from '../../primus/managers/catalogMgrHygraph.js';

export default function PLP() {
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const { data, status } = useGetCategory(params.get('cid') || null);

    const ProductTiles = () => {
        var ProductTiles = [];

        data?.products.forEach((product)=>{
            ProductTiles.push(
                <ProductAddToCart product={{
                    id: product.pid,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    image: product.images.length ? product.images[0].url : '',
                    url: '/store/#/product?pid=' + product.pid,
                }} />
            )
        });
        return ProductTiles;
    }

    return (
        <div className="PLP" >
            <Header />

            {status === "loading" ? (
                <Flex width={'full'} height={'50vh'} justifyContent={'center'} alignItems={'center'}>
                    <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
                </Flex>
            ) : (
                <><div className='plp-banner'>
                    <img width={'100%'} alt={'plp-banner'} src={data.bannerImage.url || 'http://via.placeholder.com/1200x400'} />
                </div><Box p={4} textAlign={'center'}>
                        <Heading>{data.name}</Heading>
                        <Text fontSize='xl'>{data.description}</Text>
                    </Box><Flex justifyContent={'center'}>
                        <Grid w={[0, null, '20%']} padding={{ base: '10px', lg: '20px' }} display={{ base: 'none', md: 'flex', lg: 'flex' }}>
                            <Card>
                                <CardBody>
                                    <Text></Text>
                                </CardBody>
                            </Card>
                        </Grid>
                        <SimpleGrid width={'auto'} padding={{ base: '10px', lg: '20px' }} columns={[2, null, 3]}>
                            <ProductTiles />
                        </SimpleGrid>
                    </Flex></>
            )}

            <Footer />
        </div>
    );
}
