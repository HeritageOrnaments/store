import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';

const API_URL = 'https://ap-south-1.cdn.hygraph.com/content/clhbm3q7k1z5401tehgr4f99u/master';
const graphQLClient = new GraphQLClient(API_URL);

export function useGetPage(pageId) {
    return useQuery('get-Page', async () => {
        const { pages } = await graphQLClient.request(gql`
        {
            pages(where: {pageId: "homepage"}) {
                pageId,
                bannerImages {
                url
                }
                jsonData
            }
        }`);

        return pages[0];
    });
}
