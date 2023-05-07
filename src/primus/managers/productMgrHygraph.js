import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';

const API_URL = 'https://ap-south-1.cdn.hygraph.com/content/clhbm3q7k1z5401tehgr4f99u/master';
const graphQLClient = new GraphQLClient(API_URL);
function productMgrHygraph() {
  this.provider = 'ProductMgr';
};
productMgrHygraph.prototype.useGetProducts = function useGetProducts(pid) {
    return useQuery('get-products', async () => {

      var query = ``;
      if(typeof pid === 'string'){
        query = gql`{
            products(where: {pid: "${pid}"}) {
              pid
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
        }`
      } else if(typeof pid == 'object') {
        var pidQbj = [
        ];

        pid.forEach(id => {
          pidQbj.push(`{pid: "${id}"}`);
        });

        pidQbj = pidQbj.join(' ');
        query = gql`
        query MyQuery {
          products(where: {OR: [${pidQbj}]}) {
            pid
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
        }`
      }

      var { products } = await graphQLClient.request(query);
      return products;
    });
}

export default productMgrHygraph