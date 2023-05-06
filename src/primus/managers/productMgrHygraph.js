import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';

const API_URL = 'https://ap-south-1.cdn.hygraph.com/content/clhbm3q7k1z5401tehgr4f99u/master';
const graphQLClient = new GraphQLClient(API_URL);

export function useGetProducts(pid) {
    return useQuery('get-products', async () => {
        const { products } = await graphQLClient.request(gql`
    {
        products(where: {pid: "${pid}"}) {
          id
          online
          name
          description{
            json
          }
          images {
            url
          }
          price
        }
      }
    `);

        return products;
    });
}
