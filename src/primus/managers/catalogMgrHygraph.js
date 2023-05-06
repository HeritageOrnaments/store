import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';

const API_URL = 'https://ap-south-1.cdn.hygraph.com/content/clhbm3q7k1z5401tehgr4f99u/master';
const graphQLClient = new GraphQLClient(API_URL);

export function useGetCategory(cid) {
    return useQuery('get-category', async () => {
        const { category } = await graphQLClient.request(gql`{
            category(where: {cid: "${cid}"}) {
                id
                name
                description
                bannerImage {
                    url
                }
                products {
                    pid
                    name
                    price
                    images(first: 1) {
                        url
                    }
                }
            }
        }
    `);
        return category;
    });
}
