import { Box, Flex, Heading, HStack, Link, Stack, useColorModeValue as mode, } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { CartItem } from './components/CartItem.js';
import { CartOrderSummary } from './components/CartOrderSummary';
import Header from '../common/Header.js';
import Footer from '../common/Footer.js';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem} from '../../redux/cartSlice.js';
function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const getTotalQuantity = () => {
    let total = 0;
    if(cart){
      cart?.forEach(item => {
        total += item.quantity
      })
    }
    return total
  };
  return (
    <>
      <Header />
      <Box
        maxW={{ base: '3xl', lg: '7xl', }} mx="auto" px={{ base: '4', md: '8', lg: '12', }}
        py={{ base: '6', md: '8', lg: '12', }} >
        <Heading mb={4} fontSize="2xl" fontWeight="extrabold"> Shopping Cart ({getTotalQuantity() || 0} items) </Heading>
        <Stack direction={{ base: 'column', lg: 'row', }} align={{ lg: 'flex-start', }} spacing={{ base: '8', md: '16', }} >
          <Stack spacing={{ base: '8', md: '10', }} flex="2" >
            <Stack spacing="6">
              {cart?.map((item) => (
                <CartItem
                  key={item.id} id={item.id} name={item.title} imageUrl={item.image}
                  title={item.title} price={item.price} quantity={item.quantity}
                  onClickDelete={()=>{dispatch(removeItem(item.id))}}
                  incrementQuantity={()=>{dispatch(incrementQuantity(item.id))}}
                  decrementQuantity={()=>{dispatch(decrementQuantity(item.id))}}
                />
              ))}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p> <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
      <Footer />
    </>
  )
}
export default Cart;