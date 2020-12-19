import GlobalStyles from './components/GlobalStyles';
import Routers from './components/Routers';
import ApolloProvider from './components/ApolloProvider';

function App() {
  return (
    <ApolloProvider>
      <GlobalStyles />
      <Routers />
    </ApolloProvider>
  );
}

export default App;
