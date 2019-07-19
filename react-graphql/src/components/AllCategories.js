import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ListPage extends React.Component {

  render() {
    if (this.props.AllCategories.loading) {
      return (
        <div className='flex w-100 h-100 items-center justify-center pt7'>
          <div> Loading ... </div>
        </div>
      )
    }


    return (
      <div className={'w-100 flex justify-center pa6'}>
        <div className='w-100' style={{maxWidth: 1150}}>
          {this.props.AllCategories.allCategories && this.props.AllCategories.allCategories.map(post => (
            <div key={post.id}>
              <h1> {post.name} </h1>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const ALL_CATEGORIES_QUERY = gql`
  query AllCategories {
    allCategories {
      id
      name
    }
  }
`

const ListPageWithQuery = graphql(ALL_CATEGORIES_QUERY, {
  name: 'AllCategories',
  options: {
    fetchPolicy: 'network-only',
  },
})(ListPage)

export default ListPageWithQuery
