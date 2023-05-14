import { Stack, Card, Image, Divider, Text, Heading, Button, CardBody, CardFooter } from '@chakra-ui/react'
    export const CategoryTile = ({category}) => (
    <Card maxW='sm' rounded={0}>
    <CardBody rounded={0}>
        <Image
            src='https://media.graphassets.com/tv8bAGfaTT2KdPaAxu27'
            alt='show now'
        />
        <Stack mt='6' spacing='3'>
            <Heading size='md'>{category.name}</Heading>
            <Text> {category.description}</Text>
        </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
        <Button
            p={2} w={'full'} variant='solid'
            onClick={()=>{window.location.href = '/store/#/category?cid=' + category.id}}
        >Shop Now</Button>
    </CardFooter>
</Card>
)
export default CategoryTile;

