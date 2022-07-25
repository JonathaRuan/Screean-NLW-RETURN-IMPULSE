import{ ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient ({
    uri:"https://api-sa-east-1.graphcms.com/v2/cl4p177ml1gwb01yw5sjeagxj/master",
    cache: new InMemoryCache()

})