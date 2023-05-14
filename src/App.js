
import './App.css';
import ProductAddToCart from './components/PLP/components/ProductAddToCart';
import { Heading, Box, Text, SimpleGrid, Flex, Spinner } from '@chakra-ui/react'
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';
import { useGetPage } from './primus/managers/pageMgrHygraph';
import productMgrHygraph from './primus/managers/productMgrHygraph';
import CategoryTile from './components/common/CategoryTile'
function App() {
  const { data, status } = useGetPage('homepage');

  var ProductTilesBestSellers = () => {
    var ProductTiles = [];
    var productIds = data?.jsonData.section['bestSeller']?.productIds;
    var productMgrHygraphProviderBestSeller = new productMgrHygraph();
    var productPromise = productMgrHygraphProviderBestSeller.useGetProducts(productIds);

    if (productPromise.isLoading) {
      ProductTiles.push(
        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
      );
    } else {
      productPromise.data.forEach(product => {
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
    }
    return ProductTiles;
  }

  var ProductTilesNewArrival = () => {
    var ProductTiles = [];
    var productIds = data?.jsonData.section['newArrival']?.productIds;
    var productMgrHygraphProviderNewArrival = new productMgrHygraph();
    console.log(productMgrHygraphProviderNewArrival);
    var productPromise = productMgrHygraphProviderNewArrival.useGetProducts(productIds);

    if (productPromise.isLoading) {
      ProductTiles.push(
        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
      );
    } else {
      productPromise.data.forEach(product => {
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
    }
    return ProductTiles;
  }

  return (
    <div className="homepage">
      <Header />
      {status === "loading" ? (
        <Flex width={'full'} height={'50vh'} justifyContent={'center'} alignItems={'center'}>
          <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
        </Flex>
      ) : (
        <>
          {/* homepage banner 2 */}
          <div className='hompage-banner'>
            <img alt='hompage-banner' width={'100%'} src={data.bannerImages[0]?.url || 'http://via.placeholder.com/1200x400'} />
          </div>

          {/* Product Category */}
          <Box p={4} textAlign={'center'}>
            <Heading mb={2}> PRODUCT CATEGORY</Heading>
            <Text fontSize='xl'> Shop one of our top category's</Text>
          </Box>
          <Flex >
            <SimpleGrid width={'full'} padding={'30px'} justifyItems={'center'} columns={[1, null, 3]}>
            <CategoryTile category={{
            id: 'bangles',
            name: 'Bangles',
            link:'/store/#/bangles',
          }}/>
          <CategoryTile category={{
            id: 'necklace',
            name: 'Necklaces',
            link:'/store/#/necklace',
          }}/>
          <CategoryTile category={{
            id: 'rings',
            name: 'Rings',
            link:'/store/#/rings',
          }}/>
            </SimpleGrid>
          </Flex>

          {/* New Arrival */}
          <Box p={4} textAlign={'center'}>
            <Heading mb={2}>{data?.jsonData.section['newArrival'].title}</Heading>
            <Text fontSize='xl'>{data?.jsonData.section['newArrival'].description}</Text>
          </Box>
          <Flex justifyContent={'center'}>
            <SimpleGrid padding={'30px'} columns={[2, null, 4]}>
              <ProductTilesNewArrival />
            </SimpleGrid>
          </Flex>
          {/* homepage banner 2 */}
          <div className='hompage-banner-2' mb={2}>
            <img alt='hompage-banner-2' width={'100%'} src={data.bannerImages[1]?.url || 'http://via.placeholder.com/1200x400'} />
          </div>
          {/* best sellers */}
          <Box p={4} textAlign={'center'}>
            <Heading mb={2}>{data?.jsonData.section['bestSeller'].title}</Heading>
            <Text fontSize='xl'>{data?.jsonData.section['bestSeller'].description}</Text>
          </Box><Flex justifyContent={'center'}>
            <SimpleGrid padding={'30px'} columns={[2, null, 4]}>
              <ProductTilesBestSellers />
            </SimpleGrid>
          </Flex>
        </>
      )};
      <Footer />
    </div>
  );
}

export default App;
