import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { formatPrice } from './PriceTag';
import { useSelector } from 'react-redux';
const OrderSummaryItem = (props) => {
  const { label, value, children } = props
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  )
}

export const CartOrderSummary = () => {
  const cart = useSelector((state) => state.cart.cart);
  const getTotalPrice = () => {
      let totalPrice = 0;
      if(cart){
      cart?.forEach(item => {
        totalPrice += item.price * item.quantity
      })}
      return totalPrice;
  };

  return (
    <Stack spacing="8" borderWidth="1px" padding="8" width="full" rounded={0}>
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={formatPrice(getTotalPrice())} />
        <OrderSummaryItem label="Coupon Code">
          <Link href="#" textDecor="underline">
            Add coupon code
          </Link>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold"> Total </Text>
          <Text fontSize="xl" fontWeight="extrabold"> {formatPrice(getTotalPrice())} </Text>
        </Flex>
      </Stack>
      <Button size="lg" fontSize="md" rightIcon={<FaArrowRight />}
        onClick={()=>{
          window.location.href='/store/#/checkout'
        }}
      >
        Checkout
      </Button>
    </Stack>
  )
}
