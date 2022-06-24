import { ApolloClient, InMemoryCache } from "@apollo/client";
import { meta } from '

export const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL,
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
    },
    cache: new InMemoryCache()

})


