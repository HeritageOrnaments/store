import { CloseButton, Flex,Input, HStack, Button, Stack, Image,Box,Text } from '@chakra-ui/react'
import { PriceTag } from './PriceTag.js'
const QuantitySelect = ({value, incrementQuantity, decrementQuantity}) => {
  console.log(value)
  return (
    <HStack maxW='150px'>
      <Button onClick={decrementQuantity} rounded={0} p={0} m={0} w={50}>-</Button>
      <Input textAlign={'center'} rounded={0} p={0} m={0} readOnly={true} value={value} w={100}/>
      <Button onClick={incrementQuantity} rounded={0} p={0} m={0} w={50}>+</Button>
    </HStack>
  )
}

export const CartItem = (props) => {
  console.table(props)
  const {
    name,
    quantity, imageUrl, currency, price,
    incrementQuantity, decrementQuantity, onClickDelete,
  } = props
  return (

    <Flex direction={{ base: 'column', md: 'row', }} justify="space-between" align="center"  borderWidth="1px" padding={'8px'} position={'relative'}>

<Stack direction="row" spacing="5" width="full">
      <Image
        width="120px"
        height="120px"
        fit="cover"
        src={imageUrl}
        alt={name}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4" w={'full'}>
        <HStack spacing="0.5" w={'80%'} justifyContent={'space-between'} paddingBottom={8}>
          <Text fontWeight="medium">{name}</Text>
          <PriceTag price={price} currency={currency} />
        </HStack>
        <QuantitySelect value={quantity} incrementQuantity = {incrementQuantity} decrementQuantity = {decrementQuantity} />
      </Box>
    </Stack>
    <CloseButton aria-label={`Delete ${name} from cart`} onClick={onClickDelete} position={'absolute'} top={0} right={0}/>
    </Flex>
  )
}
