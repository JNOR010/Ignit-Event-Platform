import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4orxur50txt01xx4e3x1snp/master',
    cache: new InMemoryCache()
})