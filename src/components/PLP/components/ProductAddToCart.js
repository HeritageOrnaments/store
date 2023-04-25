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
    const data = {
        isNew: true,
        imageURL: product.Images ? product.Images[0] : null || 'http://via.placeholder.com/500x500',
        name: product.name || 'not-configured',
        price: product.price || 0,
        rating: product.rating || 1,
        numReviews: product.numReviews || 0,
        url: product.url
    };
    return (
        <Flex
            p={4} w="full" alignItems="center" justifyContent="center"
            data-pid={product.id} data-aos="fade-up"
        >
            <Box
                bg={useColorModeValue('white', 'gray.800')}
                maxW="sm"
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

                <Box p={{ base: '6', sm: '2', md: '4', lg: '6' }}>
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
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                            {data.name}
                        </Box>

                    </Flex>

                    <Flex justifyContent="space-between" alignContent="center">
                        <Rating rating={data.rating} numReviews={data.numReviews} />
                        <Box color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" color={'gray.600'} >
                                Rs:
                            </Box>
                            {data.price.toFixed(2)}
                        </Box>
                    </Flex>
                <Box pt={4} w={'full'}>
                <Button w={'full'}>
                    <Text p={2}> Add to cart </Text>
                    <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                </Button>
                </Box>
                </Box>

            </Box>
        </Flex>
    );
}

export default ProductAddToCart;
