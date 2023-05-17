import { Stack, Card, Image, Heading, CardFooter, Link } from '@chakra-ui/react'
    export const CategoryTile = ({category}) => (
    <Link href={`/store/#/category?cid=${category.id}`} data-aos="fade-up" >
    <Card maxW='sm' rounded={0} marginBottom={8} position={'relative'}>
        <Image src='https://media.graphassets.com/tv8bAGfaTT2KdPaAxu27' alt='show now' />
    <CardFooter position={'absolute'} w={'full'} bottom={-8} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Stack spacing='3' backgroundColor={'black'} >
            <Heading  textTransform={'uppercase'} size='md' p={4} color={'white'}>{category.name}</Heading>
        </Stack>
    </CardFooter>
</Card>
</Link>
)
export default CategoryTile;

