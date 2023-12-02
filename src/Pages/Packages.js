import React from 'react'
import Navbar from '../Components/Navbar'
import FilterContainer from '../Components/FilterContainer'
import PackagesCardSet from '../Components/PackagesCardSet'

function Packages() {
  return (
    <>
    <Navbar/>
    <FilterContainer/>
    <PackagesCardSet/>
    </>
    
  )
}

export default Packages