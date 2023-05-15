import { CloseButton, Flex, Link,Input, HStack, Button } from '@chakra-ui/react'
import { PriceTag } from './PriceTag.js'
import { CartProductMeta } from './CartProductMeta.js'
const QuantitySelect = ({value, incrementQuantity, decrementQuantity}) => {
  console.log(value)
  return (
    <HStack maxW='150px'>
      <Button onClick={decrementQuantity}>-</Button>
      <Input textAlign={'center'} readOnly={true} value={value}/>
      <Button onClick={incrementQuantity}>+</Button>
    </HStack>
  )
}

export const CartItem = (props) => {
  console.table(props)
  const {
    isGiftWrapping, name, description,
    quantity, imageUrl, currency, price,
    incrementQuantity, decrementQuantity, onClickDelete,
  } = props
  return (
    <Flex direction={{ base: 'column', md: 'row', }} justify="space-between" align="center" >
      <CartProductMeta name={name} description={description} image={imageUrl} isGiftWrapping={isGiftWrapping} />

      {/* Desktop */}
      <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex', }} >
        <QuantitySelect value={quantity} incrementQuantity = {incrementQuantity} decrementQuantity = {decrementQuantity} />
        <PriceTag price={price} currency={currency} />
        <CloseButton aria-label={`Delete ${name} from cart`} onClick={onClickDelete} />
      </Flex>

      {/* Mobile */}
      <Flex mt="4" align="center" width="full" justify="space-between" display={{ base: 'flex', md: 'none', }} >
        <Link fontSize="sm" textDecor="underline"> Delete </Link>
        <QuantitySelect value={quantity} incrementQuantity = {incrementQuantity} decrementQuantity = {decrementQuantity} />
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  )
}
