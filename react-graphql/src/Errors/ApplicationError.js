import React from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"

const ERROR_403 = gql`
  {
    error403
  }
`;

const ApplicationError = () => (
  <div className={'w-100 flex justify-center pa6'}>
    <div className='w-100' style={{maxWidth: 1150}}>
      <Query query={ERROR_403} errorPolicy="all">
        {({ loading, error, data }) => {
          if (loading) return "Loading...";

          if (error) return `Error! ${error.message}`;

          return <h1>Some protected page</h1>;
        }}
      </Query>
    </div>
  </div>
);

export default ApplicationError
