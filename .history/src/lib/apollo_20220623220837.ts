import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-us-west-2.graphcms.com/v2/cl4okeftf0iqo01w7avrndr95/master",
    headers: {
        'Authorization': Bear
    },
    cache: new InMemoryCache()

})

