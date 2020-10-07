import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

export const contriesItemsVar = makeVar([]);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        Countries: {
          read(_, { variables }) {
            return contriesItemsVar().filter(( country ) => {
              const name = country.nameTranslations[0].value;
              const contains = name.toLowerCase().indexOf(variables.term.toLowerCase()) >= 0;
              if ( contains ) {
                return country;
              }
            });
          }
        },
        Details: {
          read(_, { variables }) {
            return contriesItemsVar().find(( country ) => country._id === variables.id );
          }
        }
      }
    }
  }
});

export const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com',
  cache: cache
});