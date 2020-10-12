import { gql } from '@apollo/client';

export const GETDATA = gql`
  query {
    Country {
       _id,
      capital,
      nameTranslations(filter: { languageCode_in: ["pt"]}) {
        value
      },
      flag {
        svgFile
      },
      area,
      population,
      topLevelDomains {
        name
      }
    }
  }
`;

export const LIST = gql`
  query {
    list @client
  }
`;

export const DETAILS = gql`
  query {
    details
  }
`;
