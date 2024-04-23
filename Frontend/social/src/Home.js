import React from 'react'
import Left from './Left'
import "./home.css"
import "./left.css"
import Mid from './Mid'
import "./mid.css"
import Right from './Right'
import "./Right.css"

export default function Home() {
  return (
    <div className='container_home'>
      {/* <Nav></Nav> */}
      <div className='contain lft'><Left></Left></div>
      <div className='contain md'><Mid></Mid></div>
      <div className='contain rt'><Right></Right></div>
      {/* <div><Mid></Mid></div> */}
      {/* <div><Right></Right></div> */}
    </div>
  )
}
