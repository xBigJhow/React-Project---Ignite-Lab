import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: import.meta.env.local.VITE_API_URL,
    headers: {
        'Authorization': `Bearer ${import.meta.env.local.VITE_API_ACCESS_TOKEN}`
    },
    cache: new InMemoryCache()

})

