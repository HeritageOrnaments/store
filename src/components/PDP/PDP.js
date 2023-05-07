import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    List,
    ListItem,
    Spinner
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';
import productMgrHygraph from '../../primus/managers/productMgrHygraph.js';
import Header from '../common/Header.js';
import Footer from '../common/Footer.js';
export default function Simple() {
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    var pid = params.get('pid');
    const { data, status } = new productMgrHygraph().useGetProducts(pid);

    return (
        <div className='pdp'>
            <Header />
            <Container maxW={'7xl'}>
                {status === "loading" ? (
                    <Flex width={'full'} height={'50vh'} justifyContent={'center'} alignItems={'center'}>
                        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
                    </Flex>
                ) : (
                    <SimpleGrid
                        columns={{ base: 1, lg: 2 }}
                        spacing={{ base: 8, md: 10 }}
                        py={{ base: 18, md: 20 }}>
                        <Flex  >
                            <Image
                                alt={'product image'}
                                src={
                                    data[0]?.images[0]?.url
                                }
                                fit={'cover'}
                                align={'center'}
                                w={'100%'}
                                h={{ base: '100%', sm: '400px', lg: '500px' }}
                                border={'1px solid gray'}
                                loading={'lazy'}
                            />
                        </Flex>
                        <Stack spacing={{ base: 6, md: 10 }}>
                            <Box as={'header'}>
                                <Heading
                                    lineHeight={1.1}
                                    fontWeight={600}
                                    fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                                    {data[0].name}
                                </Heading>
                                <Text
                                    color={'gray.900'}
                                    fontWeight={300}
                                    fontSize={'2xl'}>
                                    Rs: {data[0].price}
                                </Text>
                            </Box>

                            <Stack
                                spacing={{ base: 4, sm: 6 }}
                                direction={'column'}
                                divider={
                                    <StackDivider
                                        borderColor={'gray.200'}
                                    />
                                }>
                                <VStack spacing={{ base: 4, sm: 6 }}>
                                    <Text color={'gray.500'} fontSize={'2xl'} fontWeight={'300'}>
                                        {data[0].description.json.children[0].children[0].text}
                                    </Text>
                                    <Text fontSize={'lg'}>
                                        {data[0].description.json.children[0].children[0].text}
                                    </Text>
                                </VStack>
                                <Box>
                                    <Text
                                        fontSize={{ base: '16px', lg: '18px' }}
                                        color={'yellow.500'}
                                        fontWeight={'500'}
                                        textTransform={'uppercase'}
                                        mb={'4'}>
                                        Features
                                    </Text>

                                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                        <List spacing={2}>
                                            <ListItem>Chronograph</ListItem>
                                            <ListItem>Master Chronometer Certified</ListItem>{' '}
                                            <ListItem>Tachymeter</ListItem>
                                        </List>
                                        <List spacing={2}>
                                            <ListItem>Anti‑magnetic</ListItem>
                                            <ListItem>Chronometer</ListItem>
                                            <ListItem>Small seconds</ListItem>
                                        </List>
                                    </SimpleGrid>
                                </Box>
                                <Box>
                                    <Text
                                        fontSize={{ base: '16px', lg: '18px' }}
                                        color={'yellow.500'}
                                        fontWeight={'500'}
                                        textTransform={'uppercase'}
                                        mb={'4'}>
                                        Product Details
                                    </Text>

                                    <List spacing={2}>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Between lugs:
                                            </Text>{' '}
                                            20 mm
                                        </ListItem>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Bracelet:
                                            </Text>{' '}
                                            leather strap
                                        </ListItem>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Case:
                                            </Text>{' '}
                                            Steel
                                        </ListItem>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Case diameter:
                                            </Text>{' '}
                                            42 mm
                                        </ListItem>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Dial color:
                                            </Text>{' '}
                                            Black
                                        </ListItem>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Crystal:
                                            </Text>{' '}
                                            Domed, scratch‑resistant sapphire crystal with anti‑reflective
                                            treatment inside
                                        </ListItem>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Water resistance:
                                            </Text>{' '}
                                            5 bar (50 metres / 167 feet){' '}
                                        </ListItem>
                                    </List>
                                </Box>
                            </Stack>

                            <Button
                                rounded={'none'}
                                w={'full'}
                                mt={8}
                                size={'lg'}
                                py={'7'}
                                bg={'gray.900'}
                                color={'white'}
                                textTransform={'uppercase'}
                                _hover={{
                                    transform: 'translateY(2px)',
                                    boxShadow: 'lg',
                                }}>
                                Add to cart
                            </Button>

                            <Stack direction="row" alignItems="center" justifyContent={'center'}>
                                <MdLocalShipping />
                                <Text>2-3 business days delivery</Text>
                            </Stack>
                        </Stack>
                    </SimpleGrid>
                )}
            </Container>
            <Footer />
        </div>
    );
}
