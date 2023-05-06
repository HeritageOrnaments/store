
import './App.css';
import ProductAddToCart from './components/PLP/components/ProductAddToCart';
import { Heading, Box, Text, SimpleGrid, Flex, Spinner } from '@chakra-ui/react'
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';
import { useGetPage } from './primus/managers/pageMgrHygraph';
import { useGetProducts} from './primus/managers/productMgrHygraph';
var tilesApi = { };
function App() {
  const { data, status } = useGetPage('homepage');

  const ProductTiles = () => {
    var ProductTiles = [];
    var productIds = data?.jsonData.section['bestSeller']?.productIds;
    for (let index = 0; index < productIds.length; index++) {
      const pid = productIds[index];
      // eslint-disable-next-line react-hooks/rules-of-hooks
      var { product, statusPMGR } = useGetProducts(pid);
      if(statusPMGR === 'loading') {
        ProductTiles.push(
          <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
        );
      } else {
        ProductTiles.push(
          <ProductAddToCart product={{
              id: product?.pid || pid,
              name: product?.name || pid,
              description: product?.description,
              price: product?.price,
              image: product?.images.length ? product.images[0].url : '',
              url: '/store/#/product?pid=' + product?.pid,
          }} />
        );
      }
    }
    return ProductTiles;
  }

  return (
    <div className="homepageompage">
      <Header />
      {status === "loading" || tilesApi.statusPMGR === "loading" ? (
        <Flex width={'full'} height={'50vh'} justifyContent={'center'} alignItems={'center'}>
          <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
        </Flex>
      ) : (
              <><div className='hompage-banner'>
            <img alt='hompage-banner' width={'100%'} src={data.bannerImages[0]?.url || 'http://via.placeholder.com/1200x400'} />
          </div><Box p={4} textAlign={'center'}>
              <Heading mb={2}>Best Sellers</Heading>
              <Text fontSize='xl'>Checkout with one of our best sellers</Text>
            </Box><Flex justifyContent={'center'}>
              <SimpleGrid padding={'30px'} columns={[2, null, 4]}>
                <ProductTiles />
              </SimpleGrid>
            </Flex><div className='hompage-banner-2' mb={2}>
              <img alt='hompage-banner-2' width={'100%'} src={data.bannerImages[1]?.url || 'http://via.placeholder.com/1200x400'} />
            </div></>
      )};
      <Footer />
    </div>
  );
}

export default App;
