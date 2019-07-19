import React from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"

const ERROR_400 = gql`
  {
    error400
  }
`;

const QueryError = () => (
  <div className={'w-100 flex justify-center pa6'}>
    <div className='w-100' style={{maxWidth: 1150}}>
      <Query query={ERROR_400} errorPolicy="all">
        {({ loading, error, data }) => {
          if (loading) return "Loading...";

          console.log(error);

          if (error) return (
            <div className='ma3 box1 new-post br6 flex flex-column justify-center ttu fw6 f20 black-30 no-underline'>
              Query Level Error handler invoked <br />
              {error.graphQLErrors.map(({ message, code }, i) => (
                <span key={i}>
                  <p>Error Message: {message} </p>
                  <p>Code: {code} </p>
                </span>
              ))}
            </div>
          ) ;

          return <h1>Some Query result data to be displayed</h1>;
        }}
      </Query>
    </div>
  </div>
);

export default QueryError
