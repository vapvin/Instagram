import {ApolloClient, InMemoryCache, ApolloProvider as Provider} from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache()
});

const ApolloProvider = props => {
    return <Provider client={client} {...props} />
}

export default ApolloProvider;