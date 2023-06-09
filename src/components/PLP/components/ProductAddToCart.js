import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    Button,
    Text,
    Link
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartSlice';
import { useToast } from '@chakra-ui/react'

function Rating({ rating, numReviews }) {
    return (
        <Box display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }} alignItems="center" flexDirection={'row'}>
            {Array(5)
                .fill('')
                .map((_, i) => {
                    const roundedRating = Math.round(rating * 2) / 2;
                    if (roundedRating - i >= 1) {
                        return (
                            <BsStarFill
                                key={i}
                                style={{ marginLeft: '1' }}
                                color={i < rating ? 'teal.500' : 'gray.300'}
                            />
                        );
                    }
                    if (roundedRating - i === 0.5) {
                        return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
                    }
                    return <BsStar key={i} style={{ marginLeft: '1' }} />;
                })}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {numReviews} review{numReviews > 1 && 's'}
            </Box>
        </Box>
    );
}

function ProductAddToCart({ product }) {
    const toast = useToast();
    const dispatch = useDispatch();
    const data = {
        isNew: true,
        id: product.id,
        imageURL: product.image || 'http://via.placeholder.com/500x500',
        name: product.name || 'not-configured',
        price: product.price || 0,
        rating: product.rating || 1,
        numReviews: product.numReviews || 0,
        url: product.url
    };

    const triggerAddToCart = () => {
        toast({
            title: `Added ${data.name} to your cart.`,
            description: "add more to get a discount.",
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: 'top-right',
            variant:  'top-accent'
        });

        dispatch(addToCart({
            id: data.id,
            title: data.name,
            image: data.imageURL,
            price: data.price
        }))
    };
    return (
        <Flex
            p={2} w="full" alignItems="center" justifyContent="center"
            data-pid={product.id} data-aos="fade-up"
        >
            <Box
                bg={useColorModeValue('white', 'gray.800')}
                maxW={{ base: '15rem', md: '15rem', lg: '300px' }}
                width={{ base: '15rem', md: '15rem', lg: '300px' }}
                borderWidth="1px"
                shadow="sm"
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                justifyItems={'center'}
                position="relative">
                {data.isNew && (
                    <Circle
                        size="10px"
                        position="absolute"
                        top={2}
                        right={2}
                        bg="red.200"
                    />
                )}
                <Link href={data.url}>
                    <Image
                        src={data.imageURL}
                        link
                        alt={`Picture of ${data.name}`}
                    />
                </Link>

                <Box p={{ base: '1', sm: '1', md: '2', lg: '4' }}>
                    <Box display="flex" alignItems="baseline">
                        {data.isNew && (
                            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                                New
                            </Badge>
                        )}
                    </Box>
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box
                            fontWeight="semibold"
                            as="div"
                            lineHeight="tight"
                            isTruncated>
                            {data.name}
                        </Box>

                    </Flex>

                    <Flex justifyContent="space-between" alignContent="center">
                        <Rating rating={data.rating} numReviews={data.numReviews} />
                        <Box color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" color={'gray.600'} >
                                ₹
                            </Box>
                            {data.price.toFixed(2)}
                        </Box>
                    </Flex>
                    <Box pt={2} w={'full'}>
                        <Button py={6} w={'full'} rounded={5} onClick={triggerAddToCart} alignContent={'center'} justifyContent={'center'}>
                            <Icon as={FiShoppingCart} h={5} w={5} alignSelf={'center'} mr={2}/>
                            <Text > Add to cart </Text>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
}

export default ProductAddToCart;
