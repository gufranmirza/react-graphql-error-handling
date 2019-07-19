import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div className={'w-100 flex justify-center pa6'}>
    <div className='w-100 flex flex-wrap' style={{maxWidth: 1150}}>
      <Link
        to='/protected-page'
        className='ma3 box new-post br2 flex flex-column items-center justify-center ttu fw6 f20 black-30 no-underline'
      >
        <div>Show an Application Level Error Handling</div>
      </Link>
      <Link
        to='/query-level-error'
        className='ma3 box new-post br2 flex flex-column items-center justify-center ttu fw6 f20 black-30 no-underline'
      >
        <div>Show an Query Level Error Handling</div>
      </Link>

      <Link
        to='/all-categories'
        className='ma3 box new-post br2 flex flex-column items-center justify-center ttu fw6 f20 black-30 no-underline'
      >
        <div>Show all Ingredient Categories</div>
      </Link>
    </div>
  </div>
)

export default Home
